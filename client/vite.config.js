import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "https://167.172.109.166.nip.io/",
  server: {
    port: "5000",
    // host: true,
    // https: true,
  },
});
