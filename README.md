# Shepherd Tech UI

A website to explain the mission statement of Shepherd Tech and the services we offer.

## Tooling

- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Skeleton](https://www.skeleton.dev/)

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

## Localization

This project uses [sveltekit-i18n](https://github.com/sveltekit-i18n/lib) for internationalization and localization.

### Adding a New Language

1. Create a new locale folder under `src/lib/translations/` using the locale code (e.g., `es` for Spanish, `fr` for French)
2. Add the following JSON translation files to your new locale folder:
    ```
    src/lib/translations/[locale]/
    ├── common.json     # Shared translations across all pages
    ├── home.json       # Homepage translations
    ├── services.json   # Services page translations
    ├── so_what.json    # "So What?" page translations
    └── team.json       # Team page translations
    ```
3. Update `src/lib/translations/index.ts`:
    ```typescript
    export const supportedLocales = ['en', 'your-new-locale'];
    ```
