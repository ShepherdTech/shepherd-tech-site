// src/stores/path.js
import { writable } from 'svelte/store';

// Create a store with initial value from window.location.pathname
const createPathStore = () => {
  const { subscribe, set } = writable(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  if (typeof window !== 'undefined') {
    // Update on popstate (back/forward navigation)
    window.addEventListener('popstate', () => {
      set(window.location.pathname);
    });

    // Update on pushstate/replacestate
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      set(window.location.pathname);
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      set(window.location.pathname);
    };

    // Update on initial load
    window.addEventListener('load', () => {
      set(window.location.pathname);
    });
  }

  return {
    subscribe,
    navigate: (path) => {
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', path);
        set(path);
      }
    }
  };
};

export const currentPath = createPathStore();
