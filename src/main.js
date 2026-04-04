import './style.css';
import Papa from 'papaparse';

// 1. TRADUCCIONES Y LENGUAJE
const translations = {
  en: {
    "nav.home": "UTOPIC", "nav.events": "Events", "nav.agency": "Agency", "nav.label": "Label",
    "btn_book": "Book Now", "footer.rights": "All Rights Reserved.", "profile.book": "Book Artist"
  },
  es: {
    "nav.home": "UTOPIC", "nav.events": "Eventos", "nav.agency": "Agencia", "nav.label": "Sello",
    "btn_book": "Reservar", "footer.rights": "Todos los Derechos Reservados.", "profile.book": "Contratar"
  }
};

let currentLang = 'en';
window.toggleLanguage = (lang) => {
  currentLang = lang.toLowerCase();
  document.body.setAttribute('data-lang', currentLang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
};

// 2. MENÚ MÓVIL (Unificado)
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if(menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }
});

// 3. GOOGLE SHEETS API
const SHEET_ID = '18cSR2nwf6K3rPtGKzK2qmfWrj25GDvtNVvpHuBx7XqM';

const fetchSheetData = async (sheetNameOrGid) => {
  // Corrección: Detectar si es GID o Nombre de pestaña
  const param = !isNaN(sheetNameOrGid) ? `gid=${sheetNameOrGid}` : `sheet=${sheetNameOrGid}`;
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&${param}`;
  try {
    const response = await fetch(url);
    const csvText = await response.text();
    return new Promise(resolve => Papa.parse(csvText, { header: true, skipEmptyLines: true, complete: res => resolve(res.data) }));
  } catch (error) { return []; }
};

const formatDriveUrl = (url) => {
  if (!url) return 'https://images.unsplash.com/photo-1571266028243-e4bb33394c14?auto=format&fit=crop&q=80&w=800';
  const match = url.match(/(?:id=|\/d\/|file\/d\/)([\w-]{25,})/);
  return match && match[1] ? `https://docs.google.com/uc?export=view&id=${match[1]}` : url;
};

// 4. RENDERIZADO DINÁMICO DE PANTALLAS
document.addEventListener('DOMContentLoaded', async () => {
  toggleLanguage('EN');

  // ---> Roster View (Agencia)
  const rosterGrid = document.getElementById('roster-grid');
  if (rosterGrid) {
    rosterGrid.innerHTML = '<div class="col-span-full flex justify-center py-10"><div class="loader"></div></div>';
    const artists = await fetchSheetData('Artistas');
    rosterGrid.innerHTML = '';
    artists.forEach(artist => {
      const card = `
        <a href="/dj_profile.html?artist=${encodeURIComponent(artist.NOMBRE)}" class="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-surface-container-high block">
            <img alt="${artist.NOMBRE}" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" src="${formatDriveUrl(artist.FOTO_URL)}">
            <div class="absolute inset-0 artist-card-gradient transition-opacity duration-500"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span class="font-label text-[10px] text-primary uppercase tracking-[0.2em] font-bold mb-2 block">${artist.GENEROS || 'ELECTRONIC'}</span>
                <h3 class="font-headline text-3xl font-black text-white uppercase tracking-tighter leading-none">${artist.NOMBRE}</h3>
            </div>
        </a>`;
      rosterGrid.insertAdjacentHTML('beforeend', card);
    });
  }

  // ---> DJ Profile Dinámico
  const djProfileContainer = document.getElementById('dj-profile-content');
  if (djProfileContainer) {
    const artistName = new URLSearchParams(window.location.search).get('artist');
    if (artistName) {
      const artists = await fetchSheetData('Artistas');
      const artist = artists.find(a => a.NOMBRE.toLowerCase() === artistName.toLowerCase());
      if (artist) {
        document.getElementById('dj-name').textContent = artist.NOMBRE;
        document.getElementById('dj-genres').textContent = artist.GENEROS || 'ELECTRONIC MUSIC';
        document.getElementById('dj-bio').textContent = artist.BIO || 'Biography coming soon...';
        document.getElementById('dj-image').src = formatDriveUrl(artist.FOTO_URL);
      }
    }
  }

  // ---> Events View (Archivo / Pasados)
  const pastEventsGrid = document.getElementById('past-iterations-container');
  if (pastEventsGrid) {
    const rows = await fetchSheetData('1207146259'); // GID corregido
    pastEventsGrid.innerHTML = '';
    // Corrección del row[0]: Ahora busca por el nombre de la columna (Ajusta 'FOTO_URL' al nombre real de tu columna en Sheets)
    rows.slice(0, 8).forEach(row => {
      const foto = row['FOTO_URL'] || row[Object.keys(row)[0]]; // Intenta leer 'FOTO_URL' o la primera columna
      if (!foto) return;
      const card = `
        <div class="aspect-[3/4] relative group overflow-hidden rounded-2xl bg-surface-container-low border border-white/5">
            <img alt="Archive Event" class="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" src="${formatDriveUrl(foto)}" />
            <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span class="material-symbols-outlined text-white text-4xl">visibility</span>
            </div>
        </div>`;
      pastEventsGrid.insertAdjacentHTML('beforeend', card);
    });
  }
});