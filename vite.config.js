import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["advance-k-filtering.onrender.com"], // Add your Render URL here
  },
});
