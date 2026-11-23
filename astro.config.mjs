// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pourya-shahverdi.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  image: { service: passthroughImageService() },
  vite: { plugins: [tailwindcss()] },
});
