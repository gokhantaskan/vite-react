# Vite-React

[![CI](https://github.com/gokhantaskan/vite-react/actions/workflows/ci.yml/badge.svg)](https://github.com/gokhantaskan/vite-react/actions/workflows/ci.yml)

A production-ready React scaffold built with Vite, featuring Material-UI, Tailwind CSS, twin.macro, and a comprehensive development toolkit. Designed as a starting point for medium to large React applications with emphasis on developer experience and code quality.

**Demo:** https://extraordinary-meerkat-398bc9.netlify.app

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Testing](#testing)
- [Environment Variables](#environment-variables)
- [Path Aliases](#path-aliases)
- [Known Issues](#known-issues)

## Tech Stack

### Core

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **TypeScript 5** - Type safety

### Routing & State

- **React Router DOM 7** - Client-side routing
- **Jotai** - Primitive atomic state management with DevTools
- **@loadable/component** - Code splitting and lazy loading

### UI & Styling

- **Material-UI (MUI) 7** - Component library
- **Tailwind CSS 3** - Utility-first CSS framework
- **twin.macro** - Tailwind CSS in JS with Emotion
- **Emotion** - CSS-in-JS styling
- **SASS** - Extended styling capabilities

### Forms & Validation

- **Formik** - Form state management
- **Yup** - Schema-based validation

### Internationalization

- **i18next** - i18n framework with English and Turkish support

### Testing

- **Vitest** - Unit testing with coverage
- **Testing Library** - React component testing
- **Playwright** - E2E testing across multiple browsers

### Code Quality

- **ESLint 9** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Lint-staged** - Pre-commit linting
- **Commitlint** - Conventional commits enforcement

## Features

- Pre-configured Vite for fast development and optimized builds
- Integrated styling solution using TailwindCSS, MUI, and twin.macro
- Multi-language support (English, Turkish) using i18next
- Light/Dark theme switching with persistence
- Centralized theme configuration
- Type checking throughout development and build processes
- Authentication flow with protected routes
- Toast notifications via React Hot Toast
- Document head management with React Helmet
- SVG as React components via @svgr/rollup
- Path aliases (`~`, `@`, `@img`)

## Project Structure

```
vite-react/
├── src/
│   ├── api/services/        # API service modules (e.g., auth.ts)
│   ├── assets/              # Static assets (SVG, images, styles)
│   ├── components/          # React components
│   │   ├── Navbar/          # Feature components
│   │   ├── loaders/         # Loading UI components
│   │   └── shared/          # Reusable UI (Button, Dialog, InputField, etc.)
│   ├── helpers/             # Utility helpers (e.g., form handling)
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Layout wrappers (AuthLayout, RestrictedLayout)
│   ├── locales/             # i18n translations (en, tr)
│   ├── pages/               # Page components (app/*, auth/*)
│   ├── plugins/             # Provider configs (i18n, MUI theme, toast)
│   ├── router/              # React Router configuration
│   ├── store/               # Jotai atoms (appStore, authStore)
│   ├── styles/              # Global SCSS styles
│   ├── utils/               # Utility functions
│   ├── Root.tsx             # Root component with providers
│   └── main.tsx             # Application entry point
├── config/                  # Design system defaults (colors, breakpoints)
├── tests/e2e/               # Playwright E2E tests
├── types/                   # TypeScript declarations
└── [config files]           # Vite, TypeScript, ESLint, Prettier, Tailwind, etc.
```

## Routes

| Path                    | Component      | Description                |
| ----------------------- | -------------- | -------------------------- |
| `/`                     | Dashboard      | Main dashboard (protected) |
| `/settings`             | Settings       | User settings (protected)  |
| `/auth/login`           | Login          | Sign in page               |
| `/auth/signup`          | Register       | Sign up page               |
| `/auth/forgot-password` | ForgotPassword | Password recovery          |

## Requirements

- Node.js >= 20
- pnpm (recommended)

## Getting Started

```sh
# Install dependencies
pnpm install

# Start development server (opens http://localhost:9090)
pnpm dev

# Build for production
pnpm build
```

## Scripts

| Script            | Description                                 |
| ----------------- | ------------------------------------------- |
| `dev`             | Start development server                    |
| `dev:force`       | Clear cache and start development server    |
| `build`           | Type check and build for production         |
| `build:staging`   | Type check and build for staging            |
| `build-only`      | Build with Vite (used internally)           |
| `preview`         | Preview production build                    |
| `type-check`      | Check TypeScript types                      |
| `lint`            | Lint and fix with ESLint                    |
| `format`          | Format code with Prettier                   |
| `lf`              | Lint and format in parallel                 |
| `test:unit`       | Run unit tests with coverage                |
| `test:unit:watch` | Run unit tests with Vitest UI in watch mode |
| `test:e2e`        | Run E2E tests with Playwright               |
| `test:e2e:watch`  | Run E2E tests with Playwright UI            |
| `test:e2e:ci`     | Run E2E tests in CI environment             |
| `prepare`         | Install Husky for Git hooks                 |
| `clear`           | Remove build artifacts and test results     |

## Testing

### Unit Tests (Vitest)

```sh
# Run tests with coverage report
pnpm test:unit

# Interactive UI mode
pnpm test:unit:watch
```

Coverage includes `src/components/**`, `src/utils/**`, and `src/helpers/**`.

### E2E Tests (Playwright)

```sh
# Install browsers (first run)
npx playwright install --with-deps
npx playwright install msedge

# Run E2E tests
pnpm test:e2e

# Interactive UI mode
pnpm test:e2e:watch

# CI environment (requires build first)
pnpm build:staging
pnpm test:e2e:ci
```

**Supported browsers:** Chrome, Edge, Firefox, Safari, iPad, Pixel 5, iPhone 11

### Local CI Testing (act)

You can run GitHub Actions workflows locally using [act](https://github.com/nektos/act).

```sh
# Install act (macOS)
brew install act

# Run CI workflow locally
act

# For Apple Silicon Macs, use:
act --container-architecture linux/amd64
```

## Environment Variables

Environment-specific variables are managed via `.env.*` files:

- `.env.development` - Development environment
- `.env.staging` - Staging environment
- `.env.production` - Production environment

Access variables with `import.meta.env.VITE_*`.

## Path Aliases

| Alias  | Path              | Usage            |
| ------ | ----------------- | ---------------- |
| `~`    | `/`               | Project root     |
| `@`    | `/src`            | Source directory |
| `@img` | `/src/assets/img` | Image assets     |

## Known Issues

- Initial startup may be slow due to package compilation. Avoid using `--force` unless necessary.
- Playwright dependencies must be installed separately. Follow CLI instructions if errors occur.
- If Husky permission errors occur, run:

```sh
chmod ug+x .husky/*
```

## License

MIT
