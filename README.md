# Astana International University — Landing Page

A clean, modern landing page for **Astana International University (AIU)**, built with React and styled after the [shadcn/ui](https://ui.shadcn.com/) design language — neutral zinc palette, subtle borders, soft shadows, and the Inter typeface.

![Homepage screenshot](docs/screenshot.png)

## ✨ Features

- **Hero section** with a full-screen backdrop and smooth-scroll navigation
- **Programs showcase** — bachelor's, master's, and postgraduate degrees with hover overlays
- **About section** with an embedded campus video player
- **Campus gallery** and a **student testimonials slider**
- **Contact form** wired to [Web3Forms](https://web3forms.com/) — no backend required
- Fully **responsive**: sticky navbar, mobile slide-in menu, adaptive layouts

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI components |
| [Vite 5](https://vitejs.dev/) | Dev server & build |
| [react-scroll](https://www.npmjs.com/package/react-scroll) | Smooth section navigation |
| CSS custom properties | shadcn/ui-style design tokens |

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# lint
npm run lint

# production build
npm run build
```

The dev server runs at `http://localhost:5173`.

To use your own Web3Forms key for the contact form, create a `.env` file:

```
VITE_WEB3FORMS_KEY=your-access-key
```

## 📁 Project Structure

```
src/
├── App.jsx                # Page composition
├── index.css              # Design tokens & base styles
└── Components/
    ├── Navbar/            # Sticky nav + mobile menu
    ├── Hero/              # Full-screen intro
    ├── Programs/          # Degree program cards
    ├── About/             # Mission & video trigger
    ├── Campus/            # Photo gallery
    ├── Testimonials/      # Student reviews slider
    ├── Contact/           # Web3Forms contact form
    ├── VideoPlayer/       # Modal video overlay
    ├── Title/             # Reusable section heading
    └── Footer/
```

---

© 2024 Kuanysh. All rights reserved.
