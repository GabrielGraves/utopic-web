import './style.css';
import Papa from 'papaparse';
import './partials/navbar.js';

// 1. SISTEMA DE IDIOMAS RESTAURADO
window.toggleLanguage = (lang) => {
  document.body.setAttribute('data-lang', lang.toLowerCase());
};

// 2. MENÚ MÓVIL
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if(menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }
});

// 3. GOOGLE SHEETS API (Conexión original restaurada)
const SHEET_ID = '18cSR2nwf6K3rPtGKzK2qmfWrj25GDvtNVvpHuBx7XqM';

const fetchSheetData = async (sheetNameOrGid) => {
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

// 4. RENDERIZADO DE DATOS
document.addEventListener('DOMContentLoaded', async () => {
  const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navbarHTML;
    }

  // Roster View
  const rosterGrid = document.getElementById('roster-grid');
  if (rosterGrid) {
    const artists = await fetchSheetData('Artistas');
    rosterGrid.innerHTML = '';
    artists.forEach(artist => {
      const card = `
        <div class="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container-high border border-white/5">
            <img alt="${artist.NOMBRE}" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" src="${formatDriveUrl(artist.FOTO_URL)}">
            <div class="absolute inset-0 artist-card-gradient"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span class="font-label text-[10px] text-primary uppercase tracking-[0.2em] font-bold mb-2 block">${artist.GENEROS || 'ELECTRONIC'}</span>
                <h3 class="font-headline text-3xl font-black text-white uppercase tracking-tighter leading-none mb-6">${artist.NOMBRE}</h3>
                <a href="/dj_profile.html?artist=${encodeURIComponent(artist.NOMBRE)}" class="block w-full text-center py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-label text-[10px] uppercase tracking-widest rounded-xl hover:bg-primary hover:text-on-primary-fixed transition-all duration-300">
                    <span class="lang-en">Book Artist</span>
                    <span class="lang-es">Contratar</span>
                </a>
            </div>
        </div>`;
      rosterGrid.insertAdjacentHTML('beforeend', card);
    });
  }

  // DJ Profile
  const djProfileContainer = document.getElementById('dj-profile-content');
  if (djProfileContainer) {
    const artistParam = new URLSearchParams(window.location.search).get('artist');
    if (artistParam) {
      const artists = await fetchSheetData('Artistas');
      const artist = artists.find(a => a.NOMBRE.toLowerCase() === artistParam.toLowerCase());
      if (artist) {
        document.getElementById('dj-name').textContent = artist.NOMBRE;
        document.getElementById('dj-genres').textContent = artist.GENEROS || 'ELECTRONIC MUSIC';
        document.getElementById('dj-bio').textContent = artist.BIO || 'Biography coming soon...';
        document.getElementById('dj-image').src = formatDriveUrl(artist.FOTO_URL);
      } else {
        document.getElementById('dj-name').textContent = artistParam.toUpperCase();
      }
    }
  }

  // Events View (Archive)
  const pastEventsGrid = document.getElementById('past-iterations-container');
  if (pastEventsGrid) {
    const rows = await fetchSheetData('1207146259');
    pastEventsGrid.innerHTML = '';
    rows.slice(0, 8).forEach(row => {
      const foto = row['FOTO_URL'] || row[Object.keys(row)[0]]; 
      if (!foto) return;
      const card = `
        <div class="aspect-[3/4] relative group overflow-hidden rounded-xl bg-surface-container-low">
            <img alt="Past event iteration" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="${formatDriveUrl(foto)}"/>
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-3xl">visibility</span>
            </div>
        </div>`;
      pastEventsGrid.insertAdjacentHTML('beforeend', card);
    });
  }
});