# Ranvier Monorepo (Bun Edition)

This repository contains the Ranvier MUD engine and related packages, configured for development using [Bun](https://bun.com).

## Prerequisites

- **Bun**: v1.0.0 or higher (Tested with v1.3.3)
  - Install: `curl -fsSL https://bun.sh/install | bash`

## Getting Started

1.  **Install Dependencies**:
    ```bash
    bun install
    ```
    This installs dependencies for all packages in the monorepo and links workspaces.

2.  **Build Packages**:
    ```bash
    bun run build
    ```
    Builds `ranvier-core-ts` and `RanvierMud-TS`.

3.  **Start the Game Server**:
    ```bash
    bun run start
    ```
    Starts the MUD server on port 4000 (Telnet) and 4001 (WebSocket).

4.  **Development Mode**:
    ```bash
    bun run dev
    ```
    Starts the server in watch mode. It will automatically restart when you make changes to the source code.

## Available Commands

Run these commands from the root directory:

| Command | Description |
| :--- | :--- |
| `bun run build` | Builds all packages in topological order. |
| `bun run test` | Runs tests for all packages (`ranvier-core-ts`, `axolemma`, etc.). |
| `bun run start` | Starts the `RanvierMud-TS` game server. |
| `bun run dev` | Starts the game server with hot-reloading (watch mode). |
| `bun run clean` | Removes `node_modules` and `dist` folders across the monorepo. |

## Packages

- **[ranvier-core-ts](./packages/ranvier-core-ts)**: The core game engine (TypeScript rewrite).
- **[RanvierMud-TS](./packages/RanvierMud-TS)**: The main game implementation / example bundle.
- **[axolemma](./packages/axolemma)**: Procedural area generator.
- **[axon-olc](./packages/axon-olc)**: Online Creation editor.
- **[ranvier-core](./packages/ranvier-core)**: Legacy JavaScript core (reference).

## Development Notes

- **Workspaces**: This project uses Bun workspaces. Packages are automatically linked.
- **Testing**: Tests are run using `bun test`.
- **TypeScript**: `ranvier-core-ts` and `RanvierMud-TS` are written in TypeScript and compiled using `tsc` (via `bun run build`).
