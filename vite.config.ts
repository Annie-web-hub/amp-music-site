import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves this project from /amp-music-site/.
  base: process.env.GITHUB_ACTIONS ? '/amp-music-site/' : '/',
  plugins: [react(), tailwindcss()],
})
