import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Permite imports como: import Button from '@/components/common/Button/Button'
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
})

