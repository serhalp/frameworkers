/** @type {import("prettier").Config} */
export default {
  plugins: [import.meta.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
