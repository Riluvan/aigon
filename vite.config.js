import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { historyApiFallback: true },
  preview: { historyApiFallback: true },
  build: {
    // Raise warning threshold slightly to avoid noise from AOS
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          aos: ['aos'],
        },
      },
    },
  },
})
