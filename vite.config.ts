import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    dts: {
      tsgo: true,
    },
    exports: true,
  },
  lint: {
    ignorePatterns: ["dist/**"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      // TypeScript
      "typescript/array-type": ["error", { default: "array-simple" }],
      "typescript/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
      "typescript/restrict-template-expressions": ["error", { allowNumber: true }],
      "typescript/consistent-type-assertions": ["error", { assertionStyle: "never" }],
      "typescript/no-unnecessary-condition": "error",
      "typescript/no-misused-promises": ["error", { checksVoidReturn: { attributes: false } }],
      "typescript/strict-boolean-expressions": ["error", { allowString: false }],

      // General
      "eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true, varsIgnorePattern: "^[A-Z_]" },
      ],
      "eslint/no-shadow": "error",
      "eslint/complexity": ["error", { max: 20 }],
      "eslint/eqeqeq": ["error", "smart"],
      "eslint/no-empty": "error",
      "eslint/no-nested-ternary": "error",
      "eslint/no-plusplus": "error",
      "eslint/no-useless-computed-key": "error",
      "eslint/radix": "error",

      // React
      "react/self-closing-comp": "error",
      "react/style-prop-object": "error",
    },
  },
  fmt: {},
});
