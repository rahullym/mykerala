// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      // Without this the CSS pipeline emits modern media-range syntax
      // (`@media (width>=900px)`), which older Safari/Chrome ignore outright —
      // silently dropping every responsive rule.
      cssTarget: ['chrome90', 'safari14', 'firefox90', 'edge90'],
    },
  },
});
