import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import jest from "eslint-plugin-jest"


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {settings:{react: {version: "999.999.999"}}},
  {ignores:["src/e2e/",".eslintrc.js","webpack.prod.js","webpack.common.js","webpack.dev.js","dist"
    ]},
  {files: ['**/*.test.js'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,

    }
  }


];
