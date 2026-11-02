// @ts-check

/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  printWidth: 100,
  singleQuote: false,
  trailingComma: "all",
  bracketSameLine: false,
  htmlWhitespaceSensitivity: "ignore",
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
    {
      files: ["*.md", "*.mdx"],
      options: { proseWrap: "preserve" },
    },
  ],
};
