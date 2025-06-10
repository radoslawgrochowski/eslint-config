// @ts-check
import tseslint from 'typescript-eslint'
import * as eslintParser from '@typescript-eslint/parser'

export default tseslint.config({
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: eslintParser,
    parserOptions: {
      project: true,
    },
  },
})
