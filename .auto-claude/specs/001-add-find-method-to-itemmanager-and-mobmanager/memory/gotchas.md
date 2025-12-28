# Gotchas & Pitfalls

Things to watch out for in this codebase.

## [2025-12-28 11:13]
Both JS (ranvier-core) and TS (ranvier-core-ts) versions must be updated together for any Manager changes

_Context: The codebase has parallel JavaScript and TypeScript implementations that must stay in sync_

## [2025-12-28 11:27]
TypeScript build in this worktree fails due to missing node_modules (pre-existing dependency issue). The type errors are in files like AreaFactory.ts, Character.ts, etc. and are NOT related to the find() method changes in ItemManager.ts and MobManager.ts.

_Context: Subtask 3.1 - Verify TypeScript compilation. The worktree does not have node_modules installed, causing missing type definition errors. However, manual verification confirms the find() implementations are type-correct and follow the established patterns from SkillManager, ChannelManager, CommandManager, and HelpManager._
