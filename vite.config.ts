import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => {
  const isUiBuild = mode === "ui";

  return {
    build: {
      outDir: "dist",
      rollupOptions: {
        input: isUiBuild ? "index.html" : "src/plugin/plugin.ts",
        output: isUiBuild
          ? { dir: "dist/ui" }
          : { entryFileNames: `[name].js` },
      },
      emptyOutDir: false,
    },
    plugins: isUiBuild ? [viteSingleFile()] : undefined,
  };
});
