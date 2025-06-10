// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from './configurations/prettier.mjs'
import react from './configurations/react.mjs'
import typescript from './configurations/typescript.mjs'

export default tseslint.config(
  eslint.configs.recommended,
  react,
  typescript,
  prettier,
)
