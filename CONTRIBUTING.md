# Contributing to Gaystory

## Project structure

- `apps`
  - `web` - the website and client
  - `kitstory-lite` - Lite version of the desktop client

- `schema` - shared schema/types from a custom language

- `packages`
  - `shared` - shared frontend code
  - `shared-rs` - shared Rust code
  - `tsconfig` - shared base tsconfig config
  - `ui` - shared UI components and CSS

## Setup and configuration

This project already assumes you have the following prerequisites after
cloning or forking the repository:

- Rust 1.93.x or higher
- Node.js 22.x or higher

### Ports

| App     | NPM command         | Port |
| ------- | ------------------- | ---- |
| Web app | `pnpm run dev:web`  | 5173 |
| Lite    | `pnpm run dev:lite` | 1320 |