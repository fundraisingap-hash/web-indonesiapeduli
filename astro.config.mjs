// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Adapter only active during production build (npm run build)
// Dev mode skips the adapter to avoid Vite/Cloudflare conflicts
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  output: 'static',
  adapter: isProd ? cloudflare() : undefined,
  site: 'https://indonesiapedulisesama.org',
});
