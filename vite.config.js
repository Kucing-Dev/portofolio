import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.js.org/config/
export default defineConfig({
  plugins: [react()],
  base: "/portofolio/",
  server: {
    watch: {
      usePolling: true, // Memaksa Vite untuk terus mengecek perubahan file
    },
  },
})
