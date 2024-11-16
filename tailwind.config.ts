import { join } from 'path';
import type { Config } from 'tailwindcss';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
  // 2. Opt for dark mode to be handled via the class method
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // 3. Append the path to the Skeleton package
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      fontFamily: {
        squil: ['Squil', 'sans-serif'],
        lowdrag: ['Lowdrag', 'sans-serif']
      },
      colors: {
        // Previous colors remain the same
        black: '#000000',
        void: '#000505',
        fangorn: '#001410',
        shire: '#02512D',
        goblin: '#00DD8D',
        footerbg: '#091210',
        sandcastle: '#FFEED6',
        iceknife: '#06ABFD',
        wizard: '#8B4EE5',
        fairie: '#F3477D',
        fireball: '#FF7430',
        dragon: '#FFBE00',
        somerandomgreen: '#71D595',

        // New green shades
        green: {
          3: '#00301B',
          5: '#08693B',
          6: '#058A40',
          7: '#3A8560'
        }
      }
    }
  },
  plugins: [
    // 4. Append the Skeleton plugin (after other plugins)
    skeleton
  ]
} satisfies Config;

export default config;
