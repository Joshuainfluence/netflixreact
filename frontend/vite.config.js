import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      // when we use /api in the project, it will create this target in front before calling the /api
      "/api": {
        target: "http://localhost:5000"
      }
    }
  }
})
