import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pufferpower.com',
  server: { port: 4321 },
  vite: { plugins: [tailwindcss()] },
});
