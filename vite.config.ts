import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.sambanova.ai", // URL del API
        changeOrigin: true, // Cambia el origen para evitar problemas de CORS
        rewrite: path => path.replace(/^\/api/, ""), // Reescribe el prefijo '/api' en las rutas
      },
    },
  },
})
