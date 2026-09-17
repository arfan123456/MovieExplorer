# 🎬 MovieExplorer

A responsive Movie Explorer application built with React, React Router and Tailwind CSS. Browse shows, search by title, and view details in a modal — powered by the [TVMaze API](https://www.tvmaze.com/api).

## Features

- **Home Page** — Navbar, hero banner with a CTA, and footer.
- **Movie Listing Page** — Search bar that filters shows by title (`/search/shows?q=`) and falls back to all shows (`/shows`). Cards are laid out in a responsive grid.
- **Movie Details Modal** — Backdrop image, title, rating, release date, genres, network and overview. Closable via the ✕ button or by clicking outside.
- Fully responsive: single column on mobile, 3–4 column grid on desktop.

## Tech Stack

- React 19 + Vite
- React Router v8
- Tailwind CSS v4
- lucide-react icons
- TVMaze API

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

## API Reference

- All shows: `GET https://api.tvmaze.com/shows`
- Search shows: `GET https://api.tvmaze.com/search/shows?q=:query`
