# UTOPIC Worldwide

Sitio web oficial de [utopicworldwide.com](https://www.utopicworldwide.com) — agencia de booking, eventos y sello discográfico.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (`@theme inline` con paleta de colores personalizada)
- **Vercel** (hosting + dominio)

## Estructura

```
src/
├── app/
│   ├── page.js           # Home (eventos, past iterations, multimedia)
│   ├── agency/page.js    # Roster de artistas
│   ├── label/page.js     # Sello discográfico
│   ├── about/page.js     # Sobre nosotros (cabina, stage, agencias)
│   └── artist/[slug]/page.js  # Perfil de artista
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ClientLayout.jsx  # Layout con LangContext + BookingContext
│   ├── BookingModal.jsx  # Formulario de booking (vía nodemailer)
│   ├── Carousel.jsx      # Carrusel de imágenes
│   ├── EventCard.jsx
│   ├── ArtistCard.jsx
│   ├── MediaCard.jsx
│   ├── PastIterationCard.jsx
│   ├── VideoPlayer.jsx   # Lazy load con IntersectionObserver
│   └── PrefetchOnLoad.jsx
├── context/
│   ├── LangContext.jsx   # i18n EN/ES con localStorage
│   └── BookingContext.jsx # Modal de booking global
├── data/                 # JSON con contenido del sitio
│   ├── events.json
│   ├── artists.json
│   ├── past-iterations.json
│   ├── cabina.json       # Fotos del photobooth
│   ├── agencies.json
│   ├── about-media.json  # Stage carousel + stand gallery
│   ├── media.json
│   └── partners.json
├── lang/
│   ├── en.js
│   └── es.js
└── app/api/contact/route.js  # Endpoint POST para booking
```

## Media

Todo el contenido pesado (videos, fotos de artistas, eventos pasados, booth, stage, about, agencies) está servido desde **Cloudinary** para eliminar bandwidth del hosting.

Solo quedan locales:
- `public/utopic-logo.png`
- `public/flyers/`

## Dominio

- **www.utopicworldwide.com** — primary
- Hosteado en **Vercel**. DNS configurado vía el registrar.

## Booking

El formulario de booking envía un email a **gabriel@utopicworldwide.com** via **nodemailer** + Gmail SMTP con App Password.

Variables de entorno necesarias:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=gabriel@utopicworldwide.com
SMTP_PASS=<app-password>
```

## i18n

Toggle EN/ES via `LangContext`. El locale se guarda en `localStorage`. No afecta la URL.

- `t("key")` para textos simples
- `tl(data, "field")` para campos con sufijo `_es` (ej: `bio_es`)

## Desarrollo

```bash
npm install
npm run dev      # Next.js + Turbopack
npm run build    # Producción
```

Si Turbopack corrompe el cache de `.next/`, borrar la carpeta manualmente.

## Links

- [utopicworldwide.com](https://www.utopicworldwide.com)
- [Instagram](https://www.instagram.com/utopicworldwide)
