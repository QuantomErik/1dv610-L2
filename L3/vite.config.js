import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        /* main: './index.html', */
        main: './src/homepage/homepage.html',
       /*  homepage: './src/homepage/homepage.html', */
        register: './src/registerform/registerform.html',
        login: './src/login/login.html',
        userpage: './src/userpage/userpage.html',  // Add all your component HTML files
      },
    },
  },
  publicDir: 'module-L2',
})
