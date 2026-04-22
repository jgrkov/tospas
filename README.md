# Tospas — International Logistics Website

Premium multilingual website for Tospas (EN / MK / BG / SR / DE) with smart chatbot, contact form, and full responsive design.

## 🚀 Quick Start

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

## 🌍 Deployment (Works on Any Static Host)

This is a **standard Vite + React SPA** — `npm run build` produces a static `dist/` folder you can drop on any host.

### Vercel
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Vite. Click **Deploy**.
4. `vercel.json` already handles SPA routing (deep links work on refresh).

### Netlify
1. Push to GitHub
2. [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build` · Publish directory: `dist`
4. `netlify.toml` and `public/_redirects` handle SPA routing.

### GitHub Pages
```bash
npm run build
# Push the contents of dist/ to a gh-pages branch
```
Note: For GitHub Pages on a sub-path, set `base: "/repo-name/"` in `vite.config.ts`.

### cPanel / Shared Hosting / Any Static Host
1. `npm run build`
2. Upload everything inside `dist/` to your `public_html/` folder
3. Add an `.htaccess` file in the same folder for SPA routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Cloudflare Pages
1. Connect GitHub repo
2. Build command: `npm run build` · Output: `dist`
3. Done — Cloudflare auto-handles SPA fallback.

## 📧 Contact Form & Chatbot Email

All emails go to **jordangrkov9@gmail.com** via the user's mail client (`mailto:`). To switch to automatic backend delivery, integrate [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com), or [EmailJS](https://emailjs.com).

## 🧰 Tech Stack
- React 19 + Vite 7
- React Router v6 (BrowserRouter)
- Tailwind CSS v4
- TypeScript
- Lucide icons
- Custom multilingual i18n (5 languages)

## 📁 Structure
```
src/
├── App.tsx                 # Router + layout
├── main.tsx                # Entry point
├── pages/                  # Page components (Home, About, Services, Fleet, Contact)
├── components/             # Navbar, Footer, Chatbot, LanguageSwitcher, Logo
├── i18n/                   # Language context + translations
├── assets/                 # Hero & truck images
└── styles.css              # Tailwind + design tokens
```
