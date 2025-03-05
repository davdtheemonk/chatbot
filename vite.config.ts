import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: [
      "react-redux",
      "react-stacked-toast",
      "chunk-RLJ2RCJQ.js",
      "chunk-6LRINAN2.js",
    ],
  },
});
