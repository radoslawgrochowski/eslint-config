// @ts-check
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier/recommended'
import prettierConfig from '../prettier.config.mjs'

export default tseslint.config(prettier, {
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
})
