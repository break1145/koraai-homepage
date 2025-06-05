import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    host: true,
    port: 5173,  // 你想要的端口
  },
  plugins: [react()],
})
