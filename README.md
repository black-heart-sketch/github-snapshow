# GitHub Snapshow

A modern, multilingual developer portfolio built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. It features theme switching (light/dark/system), localized content (EN/FR/IT), project highlights, and a clean, accessible UI.

## Features

- **Modern stack**: Vite, React 18, TypeScript
- **UI**: Tailwind CSS + shadcn/ui components
- **Theming**: Dark/Light/System via `next-themes`
- **i18n**: `react-i18next` with JSON locales in `public/locales/`
- **Routing**: React Router v6
- **Data**: TanStack Query (React Query)
- **Feedback**: Sonner toasts
- **Charts**: Recharts
- **Animations**: Tailwind + small utilities

## Getting Started

- **Requirements**
  - Node.js (LTS recommended). Install via nvm: https://github.com/nvm-sh/nvm

- **Install**
  - Clone the repo and install dependencies:

```sh
git clone <YOUR_GIT_URL>
cd github-snapshow
npm install
```

- **Run**

```sh
npm run dev
```

- **Build**

```sh
npm run build
```

- **Preview production build**

```sh
npm run preview
```

## Scripts

- **dev**: Start Vite dev server
- **build**: Create production build
- **build:dev**: Development-mode build (useful for inspecting)
- **preview**: Preview the production build
- **lint**: Run ESLint

## Project Structure

- `src/main.tsx`: App entry, imports global styles `src/index.css`
- `src/App.tsx`: App providers and router. Wraps with `ThemeProvider`
- `src/pages/Index.tsx`: Landing page; composes sections
- `src/components/`: UI sections and reusable components
- `src/components/Hero.tsx`: Hero section (uses `public/moi.jpg`)
- `src/components/Header.tsx`: Header with `ThemeToggle` and language switcher
- `public/locales/{en,fr,it}/translation.json`: i18n resources
- `tailwind.config.ts`: Tailwind config (`darkMode: ['class']`)
- `src/index.css`: Global CSS variables and Tailwind layers

## Theming (Light/Dark/System)

- Tailwind is configured with `darkMode: ['class']` in `tailwind.config.ts`.
- The provider in `src/App.tsx` applies the `dark` class to the document:

```tsx
<ThemeProvider attribute="class" defaultTheme="dark" storageKey="vite-ui-theme">
  {/** ... */}
</ThemeProvider>
```

- Optional (recommended):

```tsx
<ThemeProvider attribute="class" enableSystem defaultTheme="system" storageKey="vite-ui-theme" />
```

- CSS variables for light are declared under `:root` and for dark under `.dark` in `src/index.css`.
- Use Tailwind tokens like `bg-background` and `text-foreground` to inherit theme.

## Internationalization (i18n)

- Uses `react-i18next` and `i18next`.
- Translations live in:
  - `public/locales/en/translation.json`
  - `public/locales/fr/translation.json`
  - `public/locales/it/translation.json`
- Components read strings via the `useTranslation()` hook, e.g. `t('hero.title')`.
- A `LanguageSwitcher` component is available in the header.

## Environment & Configuration

- No required environment variables by default.
- If adding API calls, place keys in `.env` and access via Vite `import.meta.env`.

## Deployment

- The app builds to static assets in `dist/` and can be hosted on any static host.
- Popular options: Netlify, Vercel, GitHub Pages, Cloudflare Pages.
- Generic steps:

```sh
npm run build
# Deploy the contents of the dist/ directory to your hosting provider
```

## Troubleshooting

- **Dark mode not applying**
  - Ensure `ThemeProvider` includes `attribute="class"` in `src/App.tsx`.
  - Clear `localStorage` key `vite-ui-theme` and retry.
  - Verify `<html>` has `class="dark"` when dark is active.

- **Translations not showing**
  - Confirm locale files exist under `public/locales/<lang>/translation.json`.
  - Ensure `useTranslation()` keys match the JSON paths.

- **Styles missing**
  - Check `src/index.css` includes `@tailwind base; @tailwind components; @tailwind utilities;`.
  - Verify `tailwind.config.ts` `content` paths include `./src/**/*.{ts,tsx}`.

## License

This project is provided as-is for personal portfolio use. Add your preferred license if you plan to distribute.
