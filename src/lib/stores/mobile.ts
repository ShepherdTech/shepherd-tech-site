import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const MOBILE_BREAKPOINT = 768;

function createMobileStore() {
  const { subscribe, set } = writable(false);

  if (browser) {
    // Create ResizeObserver to watch document body
    const resizeObserver = new ResizeObserver((entries) => {
      // We only observe the body, so there's only one entry
      const bodyWidth = entries[0].contentRect.width;
      set(bodyWidth < MOBILE_BREAKPOINT);
    });

    // Start observing
    resizeObserver.observe(document.body);

    // Set initial value
    set(window.innerWidth < MOBILE_BREAKPOINT);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }

  return {
    subscribe
  };
}

export const isMobile = createMobileStore();
