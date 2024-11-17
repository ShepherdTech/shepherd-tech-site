import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const createDeviceStore = (breakpoint: number) => {
  const store = writable(false);

  if (browser) {
    const handleResize = () => {
      store.set(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return {
      ...store,
      destroy() {
        window.removeEventListener('resize', handleResize);
      }
    };
  }

  return store;
};

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export const isMobile = createDeviceStore(MOBILE_BREAKPOINT);
export const isTablet = createDeviceStore(TABLET_BREAKPOINT);
export const deviceTranslationKey = derived(isMobile, ($isMobile) =>
  $isMobile ? 'mobile' : 'desktop'
);
