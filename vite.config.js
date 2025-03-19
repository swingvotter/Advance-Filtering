import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Ensure it binds to all network interfaces
    port: 3000, // Use port 3000 explicitly
  },
  preview: {
    host: "0.0.0.0",
    port: 3000, // Use the same port for preview mode
  },
});
