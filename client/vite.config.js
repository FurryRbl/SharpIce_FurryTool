import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: '8080',
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        secure: false, // 如果是https接口，需要这个参数为true
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
