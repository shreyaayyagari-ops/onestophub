export default defineConfig({
  server: {
    fs: {
      strict: false,
    },
  },
  build: {
    sourcemap: false, // Disable sourcemaps if they cause issues
  },
});
