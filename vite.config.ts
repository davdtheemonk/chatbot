import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["react-stacked-toast", "react-redux"],
  },
});
