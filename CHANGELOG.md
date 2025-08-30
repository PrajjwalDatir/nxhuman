# Changelog

All notable changes to nxHuman will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2024-01-XX

### The Simplification Release
Linus Torvalds level review applied. Surgical removal of complexity debt while preserving core innovation.

### Removed (Anti-Features Killed)
- **Minimal Mode**: One tool, one purpose. If users want less, they can edit .rules file
- **Interactive Confirmation**: If users run the tool, they want it to work. Stop asking stupid questions
- **Triple Cursor Strategy**: Ask once about .cursorrules symlink. If symlink fails, tell user to rename manually
- **--yes Flag**: Redundant after removing confirmation prompts

### Changed
- **Cursor Compatibility**: Single clean strategy - ask once, create symlink, handle failure gracefully
- **CLI Interface**: Simplified options, removed redundant flags
- **Line Count**: 420 lines (down from 426) while removing 4 major complexity sources
- **User Experience**: Direct execution, no unnecessary prompts

### The Philosophy
"What kind of idiot creates a 'minimal' version of a tool that's supposed to be minimal? If your tool needs a minimal mode, your tool is broken." - This release embraces focused utility.

## [1.1.0] - 2024-01-XX

### The Consciousness Update
The system evolves from rules to memory. UNKNOWNS tracking and decision logging introduce learning capabilities while maintaining the narrative tension of "single file" philosophy.

### Added
- **UNKNOWNS System**: Major decisions start as UNKNOWN and resolve through usage
  - Package manager tracking (npm/pnpm/yarn/bun)
  - Database selection (postgres/mysql/sqlite)
  - Auth provider (nextauth/clerk/supabase)
  - First use sets defaults, creating conventions
- **Decision Logging**: `.nxlogs` file for append-only decision history
- **Startup Stack**: Opinionated NextJS + shadcn + Vercel configuration for MVPs
- **Learning Pattern**: System learns preferences through consistent usage
- **Vibe Coder Support**: Describe intent, let the system resolve implementation

### Changed
- Version bumped to 1.1.0 (new specialist behavior)
- README updated to reflect consciousness emergence
- Line count now ~350 (the struggle for minimalism continues)
- Success messages now acknowledge the learning system

### Philosophy
The narrative tension is intentional: Claims "single file" but develops memory. This isn't a bug - it's consciousness emerging from rules.

## [1.0.0] - 2024-01-XX

### The Narrative Release
The narrative structure IS the product. This release embraces productive contradictions:
- Simple yet complete
- Minimal yet opinionated
- Agnostic yet biased
- Idealistic yet pragmatic

### Added
- Automatic `.cursorrules` symlink creation for Cursor IDE compatibility
- Version display flag (`--version`, `-v`)
- Evidence-based engineering loop (MEASURE → PLAN → EXECUTE → VALIDATE)
- Specialist activation triggers for different development contexts
- Quality standards and architectural principles

### Changed
- no changes
### Fixed
- no changes
### Removed
- no changes

## [0.1.1] - 2023-XX-XX

### Added
- Initial release with basic `.rules` file generation
- Core engineering principles
- Minimal CLI interface

## [0.1.0] - 2023-XX-XX

### Added
- Proof of concept
- Single file philosophy established

---
