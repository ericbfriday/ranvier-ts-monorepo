# Agent Guidelines for Ranvier MUD Engine

## Build & Test Commands
- `bun test` - Run all tests
- `bun test <filename>` - Run single test file
- `bun run build` - Build TypeScript to JavaScript
- `bun run watch` - Build in watch mode
- `bun run project` - Build with project references

## Code Style Guidelines
- Use Bun instead of Node.js for all operations
- Import style: ES6 imports with `import` statements, prefer named exports
- Formatting: Prettier with tabs (2 spaces), single quotes, semicolons, trailing commas
- TypeScript: Strict mode enabled, interfaces prefixed with `I`, camelCase variables
- Error handling: Custom error classes for domain-specific errors
- File structure: One class/interface per file, matching filename to export
- Dependencies: Use built-in Bun APIs where possible (Bun.serve, bun:sqlite, etc.)