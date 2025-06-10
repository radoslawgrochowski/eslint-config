// @ts-check
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier/recommended'

export default tseslint.config(prettier, {
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
  },
})
