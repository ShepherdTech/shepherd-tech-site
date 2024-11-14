import i18n, { type Config } from 'sveltekit-i18n';

// List of Supported Locales
const supportedLocales = ['en', 'sv-SE'];

const generateLoadersForLocales = (locales: string[]) => {
  return locales.flatMap((locale: string) => {
    return [
      {
        locale,
        key: 'common',
        loader: async () => (await import(`./${locale}/common.json`)).default
      },
      {
        locale,
        key: 'home',
        routes: ['/'],
        loader: async () => (await import(`./${locale}/home.json`)).default
      },
      {
        locale,
        key: 'services',
        routes: ['/services'],
        loader: async () => (await import(`./${locale}/services.json`)).default
      },
      {
        locale,
        key: 'so_what',
        routes: ['/so-what'],
        loader: async () => (await import(`./${locale}/so_what.json`)).default
      },
      {
        locale,
        key: 'team',
        routes: ['/team'],
        loader: async () => (await import(`./${locale}/team.json`)).default
      }
    ];
  });
};

/** @type {import('sveltekit-i18n').Config} */
const config: Config = {
  fallbackLocale: 'en',
  loaders: generateLoadersForLocales(supportedLocales)
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
export type Translations = typeof t;
