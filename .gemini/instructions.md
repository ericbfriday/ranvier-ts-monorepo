# Gemini CLI Instructions for Ranvier Monorepo

This monorepo contains the Ranvier MUD engine and related packages.

## Packages

### `ranvier-core`
- **Path**: `packages/ranvier-core`
- **Description**: The original JavaScript implementation of the Ranvier MUD engine.
- **Status**: Reference implementation.
- **Language**: JavaScript
- **Key Scripts**:
  - `test`: `nyc --reporter=html --reporter=text --include=src --all mocha --recursive`

### `RanvierMud-TS`
- **Path**: `packages/RanvierMud-TS`
- **Description**: A TypeScript implementation of Ranvier MUD.
- **Status**: Active development.
- **Language**: TypeScript
- **Key Scripts**:
  - `start`: `ts-node ./ranvier.ts`
  - `build`: `tsc`

### `ranvier-core-ts`
- **Path**: `packages/ranvier-core-ts`
- **Description**: A TypeScript rewrite of the `ranvier-core` package.
- **Status**: TypeScript Core Library.
- **Language**: TypeScript
- **Key Scripts**:
  - `build`: `tsc`
  - `test`: `nyc --reporter=html --reporter=text --include=src --all mocha --recursive`
  - `watch`: `tsc --watch --project tsconfig.json`

## General Instructions
- When working on `RanvierMud-TS`, refer to `ranvier-core` for original logic if needed.
- `ranvier-core-ts` is the library that `RanvierMud-TS` likely depends on or is related to as the core engine rewrite.
