import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/products': 'http://localhost:3000',
      '/products/:id': 'http://localhost:3000'

    },
  }
})
