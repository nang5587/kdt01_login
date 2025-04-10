import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      // src/db/db.json 파일의 변경은 무시하도록 설정
      ignored: ['**/src/db/db.json'],
      // 또는 특정 파일/패턴을 무시하고 싶다면 아래처럼 사용 가능
      // ignored: ['**/*.my-ignored-filetype', '**/specific-folder/**']
    }
  },
  assetsInclude: ['**/*.JPG'],
  // server: {
  //   host: '0.0.0.0',
  //   port: 5173,
  // },
})
