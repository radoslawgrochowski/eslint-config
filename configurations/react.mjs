// @ts-check
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default tseslint.config({
  files: ['**/*.{jsx,tsx}'],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    react,
    'react-hooks': reactHooks,
  },
  rules: {
    ...react.configs.flat.recommended.rules,
    ...reactHooks.configs['recommended-latest'].rules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
})
