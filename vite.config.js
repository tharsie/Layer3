import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
  },
})
