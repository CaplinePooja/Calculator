import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      overlay: true, // Controls whether the Vite HMR (hot module replacement) overlay should be shown
    },
  },
});
