import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 Global shim plugin to fix `global is not defined` issue in Vite
const globalShim = {
  name: 'vite-plugin-global-shim',
  enforce: 'pre',
  resolveId(id: string) {
    if (id === 'global') return id;
  },
  load(id: string) {
    if (id === 'global') return 'export default window;';
  }
};

export default defineConfig({
  plugins: [react(), globalShim],
  server: {
    host: true,
    port: 5173,
    strictPort: true
  }
});
