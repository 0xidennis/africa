import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1s linear infinite', // 1 rotation per second
      },
    },
  },
  plugins: [
    tailwindcss(),
    react()]
})
