import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import netlify from "@netlify/vite-plugin-react-router";
import path from "path";

export default defineConfig({
  plugins: [reactRouter(), netlify()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
});