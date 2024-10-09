# @radoslawgrochowski/eslint-config

Default Eslint configuration for my personal projects.

## Quick start

1. Install packages and dependencies using your favorite manager

```sh
$ pnpm i -D @radoslawgrochowski/eslint-config eslint prettier
```

2. Setup `eslint.config.mjs`:

```mjs
// @ts-check
import config from "@radoslawgrochowski/eslint-config";
export default [
  // add project rules
  { ignores: ["**/.next"] },

  ...config,
];
```

3. Update `package.json`'s scripts:

```json
{
  "scripts": {
    "lint": "eslint . --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "pnpm lint --fix"
  }
}
```

4. Setup CI

See [this project's lint workflow](./.github/workflows/lint.yml) as an example.
Don't forget to set up "Require status checks to pass before merging".
