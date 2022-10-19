import { defineConfig } from 'vite'

import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  isCustomElement: (tag) => tag.includes('-'),  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
