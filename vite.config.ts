import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isUiBuild = mode === "ui";

  return {
    build: {
      outDir: "dist",
      rollupOptions: {
        input: isUiBuild ? "index.html" : "src/plugin/plugin.ts",
        output: isUiBuild
          ? {
              dir: "dist/ui",
              
            }
          : {
              entryFileNames: `[name].js`,
            },
      },
      emptyOutDir: false,
    },
  };
});
