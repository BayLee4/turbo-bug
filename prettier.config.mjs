/**
 * A shared Prettier configuration for the repository.
 *
 * @type {import("prettier").Config}
 */
export default {
  printWidth: 120,
  bracketSameLine: true,
  semi: false,
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn", "cva"],
}
