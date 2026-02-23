import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Raise warning threshold slightly to avoid noise from AOS
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React into its own chunk for better caching
          vendor: ['react', 'react-dom'],
          // AOS animation library in its own chunk
          aos: ['aos'],
        },
      },
    },
  },
})
