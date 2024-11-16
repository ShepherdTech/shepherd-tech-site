import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const MOBILE_BREAKPOINT = 768;

function createMobileStore() {
  const store = writable(false);

  if (browser) {
    // Create ResizeObserver to watch document body
    const resizeObserver = new ResizeObserver((entries) => {
      // We only observe the body, so there's only one entry
      const bodyWidth = entries[0].contentRect.width;
      store.set(bodyWidth < MOBILE_BREAKPOINT);
    });

    // Start observing
    resizeObserver.observe(document.body);

    // Set initial value
    store.set(window.innerWidth < MOBILE_BREAKPOINT);

    // Cleanup
    return store;
  }

  return store;
}

export const isMobile = createMobileStore();
export const deviceTranslationKey = derived(isMobile, ($isMobile) =>
  $isMobile ? 'mobile' : 'desktop'
);
