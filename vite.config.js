import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/React_Vite_CI_CD_Github.git/",
  server: {
    open: true,
    port: 3001,
  },
});
