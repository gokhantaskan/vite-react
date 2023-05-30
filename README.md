# Vite-React

[![CI](https://github.com/gokhantaskan/vite-react/actions/workflows/ci.yml/badge.svg)](https://github.com/gokhantaskan/vite-react/actions/workflows/ci.yml)

Vite-React is a scaffold project for quickly setting up a React application with Vite, providing an integrated solution for using Tailwind CSS, Material-UI theme, twin.macro, and other essential libraries.

https://astounding-toffee-68b49b.netlify.app/

## Features

- Pre-configured with Vite for fast development and optimized builds
- Integrated styling solution using TailwindCSS, MUI, and twin.macro
- Integrated multi-language solution using i18n-next
- Centralized theme configuration
- Type checking throughout development and build processes
- Essential libraries included:
  - Formik for form management
  - Yup for validation
  - Jotai for state management
  - React Router for navigation
  - React Helmet for managing document head
  - React-use for common hooks
  - @svgr/rollup for importing SVGs as React components
  - @loadable/component for lazy loading routes and components
- Testing setup with Playwright and Vitest
  - @testing-library with React and jsdom for unit tests
- Code quality tools: ESLint, Prettier, Husky, Lint Staged, and Commitlint
- SASS support for extended styling capabilities

## Requirements

- Node.js >=16.0.0

## Known Issues

- The initial takes a bit long time due to the packages and the configuration. Try not to use `--force` flag until it's not necessary.
- `Playwright` dependencies should be installed if you encounter a problem. Follow the command line for more details.
- If you get an issue about `husky`, use the code (in project root) below to give it an access to the file system.

```sh
$ chmod ug+x .husky/*
```

## Usage

### Scripts

`dev`: Start the development server.

`dev:force`: Clear cache and start the development server.

`build`: Run type checking and build the project for production.

`build:staging`: Run type checking and build the project for the staging environment.

`build-only`: Build the project with Vite (used internally by `build` and `build:staging`).

`preview`: Preview the build (either staging or production, it uses `dist`).

`type-check`: Check TypeScript types with `tsc --noEmit`.

`lint`: Lint and fix issues with ESLint.

`format`: Format the code using Prettier.

`lf`: Format and Lint in parallel.

`test:unit`: Run unit tests with Vitest and generate coverage report.

`test:unit:watch`: Run `test:unit` with Vitest **UI** in **watch** mode.

`test:e2e`: Run end-to-end tests with Playwright in the **development** environment.

`test:e2e:watch`: Run `test:e2e` with Playwright **UI** in the **development** environment.

`test:e2e:ci`: Run end-to-end tests with Playwright in the **staging** environment with CI.

`prepare`: Install Husky for Git hooks.

`clear`: Remove ignored files and folders, such as test results, reports, and build artifacts.

### About E2E Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install --with-deps
npx playwright install msedge

# When testing on CI, must build the project first
npm run build
# or
npm run build:staging
```

`env-cmd` is used for environment variables depending on the stages.

More details [here](https://www.digitalocean.com/community/tutorials/nodejs-take-command-with-env-cmd#step-2-using-env-cmd).
