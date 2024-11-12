import { loadTranslations } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
  const { pathname } = url;
  
  const initLocale = 'en'; // or get from browser/cookie/store
  await loadTranslations(initLocale, pathname);

  return {};
};
export const prerender = true;