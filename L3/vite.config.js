import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './src/homepage/homepage.html', // Point to the main entry HTML
      },
    },
  },
})