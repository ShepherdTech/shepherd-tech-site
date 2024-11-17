import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const MOBILE_BREAKPOINT = 768;

function createMobileStore() {
  const store = writable(false);

  if (browser) {
    // Handle window resize events
    const handleResize = () => {
      store.set(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Set initial value
    handleResize();

    // Cleanup on destroy
    return {
      ...store,
      destroy() {
        window.removeEventListener('resize', handleResize);
      }
    };
  }

  return store;
}

export const isMobile = createMobileStore();
export const deviceTranslationKey = derived(isMobile, ($isMobile) =>
  $isMobile ? 'mobile' : 'desktop'
);
