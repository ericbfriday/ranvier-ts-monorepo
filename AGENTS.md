# Agent Guidelines for Ranvier MUD Engine

## Build & Test Commands
- `bun test` - Run all tests across packages
- `bun test <filename>` - Run single test file
- `bun run build` - Build all packages
- `bun run watch` - Build in watch mode
- `bun run project` - Build with project references
- `bun run clean` - Clean all node_modules and dist folders

## Code Style Guidelines
- Use Bun instead of Node.js for all operations
- Import style: ES6 imports with `import` statements, prefer named exports
- Formatting: Prettier with tabs (2 spaces), single quotes, semicolons, trailing commas (ES5)
- TypeScript: Strict mode enabled, noUncheckedIndexedAccess, noImplicitOverride
- File structure: One class/interface per file, matching filename to export
- Dependencies: Use built-in Bun APIs where possible (Bun.serve, bun:sqlite, etc.)