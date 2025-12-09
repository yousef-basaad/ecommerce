import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(),svgr(), tsconfigPaths()],
  server: {
    proxy: {
      '/api-image': {
        target: 'https://eg.hm.com',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api-image/, '')
      }
    }
  }
})

