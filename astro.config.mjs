// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://justcabyr.com',
  output: 'static',
  outDir: 'dist',
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  }
});