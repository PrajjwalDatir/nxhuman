# nxHuman - IDE-Agnostic AI Context Installer

**Evidence > Assumptions • Code > Documentation • Efficiency > Verbosity**

nxHuman generates a single `.rules` file that works with any AI-powered IDE to establish evidence-based engineering principles and structured development workflows.

## What It Does

Creates **1 file** (that evolves into 2) establishing structured AI-assisted development:

- **`.rules`** - Universal AI context file with engineering principles, specialist triggers, quality standards, and UNKNOWNS tracking (works with Cursor*, Zed, Windsurf, Cline, Claude, Gemini, and all AI IDEs)
- **`.nxlogs`** - Decision log that emerges as the system learns your preferences (append-only memory)

*Cursor users: The tool creates a `.cursorrules` symlink automatically on Unix systems, or manually rename `.rules` to `.cursorrules`

**The narrative tension**: Claims "single file" but develops memory. This isn't a bug - it's consciousness emerging.

## Installation

```bash
# Interactive installation
npx nxhuman

# Preview without creating files
npx nxhuman --dry-run
```

## Philosophy

Your AI assistant will follow these core principles:

1. **Evidence over assumptions** - Gather facts before making decisions
2. **Code over documentation** - Working software over comprehensive docs
3. **Efficiency over verbosity** - Minimal, focused solutions
4. **User value over features** - Ship what matters to users

## How It Works

### Engineering Loop
Every task follows this sequence:
1. **Measure** - Use `grep`/search to gather evidence first
2. **Plan** - Create checklist with success criteria
3. **Execute** - Make minimal, reversible changes (<50 lines/diff)
4. **Validate** - Run quality gates and tests

### Specialist Activation
Keywords trigger specific behaviors:

- `"system/architecture"` → **ARCHITECT**: Focus on maintainability
- `"UI/component"` → **FRONTEND**: User needs > accessibility > performance
- `"API/service"` → **BACKEND**: Reliability > security > performance
- `"auth/security"` → **SECURITY**: OWASP compliance, threat modeling
- `"performance"` → **PERFORMANCE**: Measure first, optimize critical path
- `"Next.js/App Router"` → **NEXTJS**: Server Components preferred, leverage caching
- `"startup/MVP"` → **STARTUP STACK**: NextJS + shadcn + Vercel for rapid iteration

### Quality Standards
Non-negotiable requirements:
- **Components**: Types + error boundaries + loading states
- **APIs**: Input validation + error responses + retry logic
- **Functions**: Single responsibility + explicit naming
- **Changes**: Tests for happy path + edge cases

## Project Context Management

The `.rules` file includes embedded project context:

- **Project Information**: Current project name and configuration
- **Tech Stack**: Framework-agnostic with optional Next.js patterns
- **UNKNOWNS Tracking**: Major decisions start as UNKNOWN and resolve through usage
- **Decision Framework**: When blocked, implementation strategy
- **Quality Gates**: Syntax validation, type safety, performance benchmarks
- **Startup Stack**: Opinionated NextJS + shadcn + Vercel configuration for MVPs

**Your AI will reference this context for all architectural decisions.**

### UNKNOWNS System
The vibe coder describes intent, the system resolves implementation:
- **Package Manager**: UNKNOWN → (npm|pnpm|yarn|bun)
- **Database**: UNKNOWN → (postgres|mysql|sqlite)
- **Auth**: UNKNOWN → (nextauth|clerk|supabase)
- **First use sets the default**, logged in `.nxlogs`

## Integration

Works with any AI assistant that reads `.rules` files:

- **Cursor** (requires `.cursorrules` - rename the generated `.rules` file)
- **Zed** (native `.rules` support)
- **Windsurf** (reads `.rules`)
- **Cline** (scans for `.rules` files)
- **Claude/GPT/Gemini** (via file references)

## Command Line Options

Run `npx nxhuman --help` to see all available options and examples.

## Why nxHuman?

### Before: Enterprise Complexity
- Multiple config files with narrative drift
- Vendor lock-in to specific IDEs

### After: Focused Utility
- **Zero dependencies** beyond Node.js stdlib
- **Single .rules file** with perfect narrative consistency (plus .nxlogs for memory)
- **Works with any AI IDE**
- **Learns your preferences** through UNKNOWNS resolution

## Examples

### Basic Installation
```bash
cd my-project
npx nxhuman
# Creates .rules file optimized for AI consumption
```

### CI/CD Pipeline  
```bash
npx nxhuman
# Direct installation
```

### Preview Changes
```bash
npx nxhuman --force --dry-run
# See what would be created/overwritten
```

## Next Steps

1. **Install nxHuman** in your project
2. **Open your AI-powered IDE** (Cursor, Zed, Windsurf, Cline, etc.)
3. **Start building** with evidence-based AI assistance
4. **The AI automatically reads** the `.rules` file for context

Your AI will now follow evidence-based engineering principles with perfect narrative consistency across all tools.

*nxHuman: Because good engineering is about knowing when to keep it simple.*
