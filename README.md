# Vite-React

Vite-React is a scaffold project for quickly setting up a React application with Vite, providing an integrated solution for using Tailwind CSS, Material-UI theme, twin.macro, and other essential libraries.

https://astounding-toffee-68b49b.netlify.app/

## Features

- Pre-configured with Vite for fast development and optimized builds
- Integrated styling solution using Tailwind CSS, Material-UI theme, and twin.macro
- Integrated multi-language solution using i18n-next
- Centralized theme configuration for both Tailwind and Material-UI
- Type checking with TypeScript throughout development and build processes
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
- Code quality tools: ESLint, Prettier, Husky, Lint Staged, and Commitlint
- SASS support for extended styling capabilities

## Requirements

- Node.js >=16.0.0
- npm

## Usage

### Scripts

`dev`: Start the development server with the `--force` flag.

`build`: Run type checking and build the project for production.

`build:staging`: Run type checking and build the project for the staging environment.

`build-only`: Build the project with Vite (used internally by `build` and `build:staging`).

`preview`: Preview the production build.

`type-check`: Check TypeScript types with `tsc --noEmit`.

`lint`: Lint and fix issues with ESLint.

`format`: Format the code using Prettier.

`test:unit`: Run unit tests with Vitest and generate coverage report.

`test:e2e:development`: Run end-to-end tests with Playwright in the development environment.

`test:e2e:staging`: Run end-to-end tests with Playwright in the staging environment.

`prepare`: Install Husky for Git hooks.

`clear:ignored`: Remove ignored files and folders, such as test results, reports, and build artifacts.

### Development

```sh
$ npm run dev
```

### Build

To build the project for production, run:

```sh
$ npm run build
```

To build the project for staging, run:

```sh
$ npm run build:staging
```

### Running Tests

#### Unit Tests

```sh
$ npm run test:unit
```

#### E2E Tests

```sh
$ npm run test:e2e:development
```

To run end-to-end tests in the staging environment, use:

```sh
$ npm run test:e2e:staging
```

## Known Issues

`Playwright` dependencies should be installed if you encounter a problem.

If you get an issue about `husky`, use the code below to give it an access to the file system.

```sh
$ npx playwright install
$ npx playwright install-deps
$ chmod ug+x .husky/*
```

## E2E Testing with Playwright

`env-cmd` is used for environment variables depending on the stages.

If you need to change the related environment variables, change the related `.env` files.

More details [here](https://www.digitalocean.com/community/tutorials/nodejs-take-command-with-env-cmd#step-2-using-env-cmd).

There are development and staging environments and related scripts. Use `npm run test:${mode}`:

```json
{
  ...,
  "scripts": {
    ...,
    "test:e2e:development": "env-cmd -f .env.development --no-override playwright test",
    "test:e2e:staging": "env-cmd -f .env.staging --no-override playwright test"
  }
}
```

There are several [flags in Playwright](https://playwright.dev/docs/test-cli).

If you want to use flags, add double dash after the script and the flag:

```sh
$ npm run test:development -- --headed --debug
```
