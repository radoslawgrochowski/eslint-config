module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'prefer-arrow'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'all',
        singleQuote: true,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-arrow/prefer-arrow-functions': 'error',
  },
};
