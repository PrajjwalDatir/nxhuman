#!/usr/bin/env node

/**
 * nxHuman - IDE-Agnostic AI Context Installer
 *
 * Generates a single .rules file optimized for AI language model consumption.
 * Works with any AI-powered IDE: Cursor, Zed, Windsurf, Cline, Claude, etc.
 *
 * Philosophy: Evidence > Assumptions, Code > Documentation, Efficiency > Verbosity
 */

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, basename, join } from "node:path";
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline";

// Command-line argument parsing
const args = process.argv.slice(2);
const flags = {
  help: args.includes("--help") || args.includes("-h"),
  force: args.includes("--force"),
  dryRun: args.includes("--dry-run"),
  version: args.includes("--version") || args.includes("-v"),
};

// Version info
const VERSION = "1.1.0";

// Display version and exit if requested
if (flags.version) {
  console.log(`nxHuman v${VERSION}`);
  process.exit(0);
}

// Display help and exit if requested
if (flags.help) {
  console.log(`
nxHuman v${VERSION} - AI Engineering Context

USAGE:
  npx nxhuman [options]

OPTIONS:
  --help, -h     Show this help message
  --version, -v  Show version information
  --force        Overwrite existing .rules/.cursorrules file
  --dry-run      Show what would be created without writing files



WHAT IT CREATES:
  .rules         - Universal AI context file (most IDEs)
  .cursorrules   - Cursor symlink (if requested)

PHILOSOPHY:
  Evidence > Assumptions • Code > Documentation • Efficiency > Verbosity

EXAMPLES:
  npx nxhuman                    # Interactive installation
  npx nxhuman --force --dry-run  # Preview what would be created
`);
  process.exit(0);
}

// Utility functions
const ensureDirectoryExists = (filePath) => {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
};

const writeFileSecurely = (filePath, content) => {
  const fileName = basename(filePath);

  if (flags.dryRun) {
    console.log(`[DRY-RUN] Would create: ${fileName}`);
    return;
  }

  if (existsSync(filePath) && !flags.force) {
    console.warn(`⚠️  File exists: ${fileName} (use --force to overwrite)`);
    return;
  }

  ensureDirectoryExists(filePath);
  writeFileSync(filePath, content, "utf8");
  console.log(`✅ Created: ${fileName}`);
};

const askCursorCompatibility = () => {
  if (flags.dryRun) return false;

  const rl = createInterface({ input: stdin, output: stdout });
  const answer = new Promise((resolve) => {
    rl.question(
      "Create .cursorrules symlink for Cursor IDE? (y/N): ",
      (ans) => {
        rl.close();
        resolve(ans.toLowerCase().startsWith("y"));
      },
    );
  });
  return answer;
};

// AI Context - Deterministic MVP Development System
const AI_CONTEXT = {
  principles:
    "EVIDENCE > ASSUMPTIONS • CODE > DOCUMENTATION • SHIP > POLISH • USER VALUE > FEATURES",

  loop: {
    measure:
      "Use codebase_search/grep first. Gather evidence before decisions.",
    plan: "Create deterministic plan with success criteria. Use checklists.",
    execute: "Make minimal, reversible changes (<50 lines/diff maximum).",
    validate: "Run quality gates. Auto-fix via tools when possible.",
  },

  qualityStandards: {
    types: "Explicit types required. No implicit any.",
    components: "Error boundaries. Loading states. Proper props.",
    apis: "Input validation. Error responses. Retry logic.",
    functions: "Single responsibility. Explicit naming. Early returns.",
    tests: "Critical paths tested. Edge cases covered.",
  },

  developmentFlow: {
    feature: "Write test → Implement → Verify → Deploy.",
    debugging: "Reproduce → Fix → Test → Prevent regression.",
    refactor: "Tests pass → Refactor → Tests still pass.",
  },

  ideCapabilities: {
    search: "Use codebase search before making changes.",
    context: "Reference existing patterns in the project.",
    files: "Multi-file edits when changes span components.",
  },

  architecturalPrinciples: {
    separation: "Separate concerns. UI logic separate from business logic.",
    stateManagement: "Use appropriate state scope. Local vs global state.",
    dataFlow: "Unidirectional data flow. Clear data dependencies.",
    errorHandling: "Graceful degradation. User-friendly error messages.",
    performance: "Lazy loading. Bundle optimization. Core Web Vitals.",
  },

  specialists: {
    frontend: "UI/component → User needs > accessibility > performance.",
    backend: "API/service → Reliability > security > performance.",
    testing: "Quality assurance → Coverage > automation > documentation.",
    security: "Auth/data → Security > compliance > convenience.",
    performance: "Optimization → Measure > optimize > monitor.",
    startup: "startup/MVP → NextJS + shadcn + Vercel for rapid iteration.",
  },
  workflowPrinciples: {
    branching: "Feature branches. Clean commit history.",
    testing: "Test before merge. Automated quality gates.",
    deployment: "Automated deployment. Rollback capability.",
    monitoring: "Error tracking. Performance metrics.",
  },
  unknowns: {
    packageManager: "UNKNOWN -> (npm|pnpm|yarn|bun)",
    styling: "UNKNOWN -> (tailwind|css-modules|styled-components)",
    database: "UNKNOWN -> (postgres|mysql|sqlite|mongodb)",
    orm: "UNKNOWN -> (prisma|drizzle|typeorm)",
    auth: "UNKNOWN -> (nextauth|clerk|supabase|auth0)",
    deployment: "UNKNOWN -> (vercel|netlify|self-hosted)",
    stateManagement: "UNKNOWN -> (zustand|redux|context)",
    componentLibrary: "UNKNOWN -> (shadcn|mui|ant-design)",
    testing: "UNKNOWN -> (jest|vitest|playwright)",
  },
  startupStack: {
    description: "Opinionated NextJS webapp stack for startups",
    core: "Next.js 14+ with App Router",
    ui: "shadcn/ui + Tailwind CSS",
    deployment: "Vercel (serverless)",
    focus: "Application layer utility over infrastructure",
    philosophy: "Ship fast, iterate based on user feedback",
  },
  decisionFramework: {
    complexity: "Start simple. Add complexity only when needed.",
    optimization: "Measure before optimizing. Profile before assuming.",
    features: "User value first. Ship incrementally.",
    debugging: "Reproduce first. Fix root cause. Prevent regression.",
  },
};

// Create initial log content for decision tracking
const createInitialLog = () => {
  const timestamp = new Date().toISOString();
  const projectName = basename(process.cwd());

  return `# nxHuman Decision Log
# Project: ${projectName}
# Created: ${timestamp}
# Format: [TIMESTAMP] [CATEGORY] [DECISION] [CONTEXT]

## UNKNOWNS Resolution Tracking
# When an UNKNOWN is resolved, it gets logged here
# Example: [2024-01-01T00:00:00Z] [PACKAGE_MANAGER] npm -> selected (first use)

## Decision History
[${timestamp}] [INIT] nxHuman v${VERSION} initialized
[${timestamp}] [CONTEXT] Project: ${projectName}

## Learning Pattern
# The system learns your preferences through usage:
# - First use of a tool sets the default
# - Consistent patterns become conventions
# - Deviations are logged as experiments

---
# Append new decisions below this line
`;
};

// Generate optimal .rules content for deterministic MVP development
const generateRulesContent = () => {
  const projectName = basename(process.cwd());
  const timestamp = new Date().toISOString();

  let content = `# nxHuman Engineering Rules

## Core Principles
${AI_CONTEXT.principles}

## Development Loop
1. MEASURE: ${AI_CONTEXT.loop.measure}
2. PLAN: ${AI_CONTEXT.loop.plan}
3. EXECUTE: ${AI_CONTEXT.loop.execute}
4. VALIDATE: ${AI_CONTEXT.loop.validate}

## Quality Standards
- Types: ${AI_CONTEXT.qualityStandards.types}
- Components: ${AI_CONTEXT.qualityStandards.components}
- APIs: ${AI_CONTEXT.qualityStandards.apis}
- Functions: ${AI_CONTEXT.qualityStandards.functions}
- Tests: ${AI_CONTEXT.qualityStandards.tests}

## Development Flow
- Feature: ${AI_CONTEXT.developmentFlow.feature}
- Debugging: ${AI_CONTEXT.developmentFlow.debugging}
- Refactor: ${AI_CONTEXT.developmentFlow.refactor}

## IDE Integration
- Search: ${AI_CONTEXT.ideCapabilities.search}
- Context: ${AI_CONTEXT.ideCapabilities.context}
- Files: ${AI_CONTEXT.ideCapabilities.files}

## Specialists
${Object.entries(AI_CONTEXT.specialists)
  .map(([key, behavior]) => `- ${behavior}`)
  .join("\n")}`;

  content += `

## Architectural Principles
- Separation: ${AI_CONTEXT.architecturalPrinciples.separation}
- State: ${AI_CONTEXT.architecturalPrinciples.stateManagement}
- Data Flow: ${AI_CONTEXT.architecturalPrinciples.dataFlow}
- Errors: ${AI_CONTEXT.architecturalPrinciples.errorHandling}
- Performance: ${AI_CONTEXT.architecturalPrinciples.performance}

## Workflow Principles
- Branching: ${AI_CONTEXT.workflowPrinciples.branching}
- Testing: ${AI_CONTEXT.workflowPrinciples.testing}
- Deployment: ${AI_CONTEXT.workflowPrinciples.deployment}
- Monitoring: ${AI_CONTEXT.workflowPrinciples.monitoring}

## Decision Framework
- Complexity: ${AI_CONTEXT.decisionFramework.complexity}
- Optimization: ${AI_CONTEXT.decisionFramework.optimization}
- Features: ${AI_CONTEXT.decisionFramework.features}
- Debugging: ${AI_CONTEXT.decisionFramework.debugging}`;

  content += `

## Project Context
- Project: ${projectName}
- Created: ${new Date().toISOString()}

## UNKNOWNS (Resolved through usage)
When encountering architectural decisions, track resolution:
- Package Manager: ${AI_CONTEXT.unknowns.packageManager}
- Styling System: ${AI_CONTEXT.unknowns.styling}
- Database: ${AI_CONTEXT.unknowns.database}
- ORM: ${AI_CONTEXT.unknowns.orm}
- Authentication: ${AI_CONTEXT.unknowns.auth}
- Deployment: ${AI_CONTEXT.unknowns.deployment}
- State Management: ${AI_CONTEXT.unknowns.stateManagement}
- API Pattern: ${AI_CONTEXT.unknowns.apiPattern}
- Component Library: ${AI_CONTEXT.unknowns.componentLibrary}
- Testing Framework: ${AI_CONTEXT.unknowns.testing}

## Startup Stack (When building NextJS webapps)
${AI_CONTEXT.startupStack.description}
- Core: ${AI_CONTEXT.startupStack.core}
- UI: ${AI_CONTEXT.startupStack.ui}
- Deployment: ${AI_CONTEXT.startupStack.deployment}
- Focus: ${AI_CONTEXT.startupStack.focus}
- Philosophy: ${AI_CONTEXT.startupStack.philosophy}

## Decision Logging
All major decisions are logged to .nxlogs for tracking and learning.

## Success Criteria
- Evidence-based development process
- Quality standards maintained
- Critical paths tested
- User value delivered`;

  return content;
};

// Main execution
const main = async () => {
  try {
    const projectPath = process.cwd();
    const projectName = basename(projectPath);

    console.log(`\n🤖 nxHuman - AI Engineering Context`);
    console.log(`📁 Project: ${projectName}`);
    console.log(`⚙️  Mode: Full configuration`);

    if (flags.dryRun) {
      console.log(`🔍 DRY-RUN: Showing what would be created...\n`);
    }

    console.log(`\n📝 Installing engineering context...`);

    // Generate .rules file
    const rulesPath = join(projectPath, ".rules");
    const rulesContent = generateRulesContent();

    writeFileSecurely(rulesPath, rulesContent);

    // Create .nxlogs file for decision tracking
    const logsPath = join(projectPath, ".nxlogs");
    let logsCreated = false;
    if (!flags.dryRun && !existsSync(logsPath)) {
      const initialLog = createInitialLog();
      writeFileSecurely(logsPath, initialLog);
      logsCreated = true;
    }

    // Ask about Cursor compatibility
    const wantsCursor = await askCursorCompatibility();
    let cursorCreated = false;

    if (wantsCursor && !flags.dryRun) {
      try {
        const cursorRulesPath = join(projectPath, ".cursorrules");
        if (!existsSync(cursorRulesPath)) {
          require("fs").symlinkSync(".rules", cursorRulesPath);
          console.log("✅ Created: .cursorrules (symlink)");
          cursorCreated = true;
        } else {
          console.log("⚠️  .cursorrules already exists, skipping");
        }
      } catch (error) {
        console.log(
          "⚠️  Symlink failed, manually rename .rules to .cursorrules",
        );
      }
    }

    // Success message
    if (flags.dryRun) {
      console.log(`\n🎯 DRY-RUN COMPLETE: No files were actually created.`);
    } else {
      console.log(`\n🎉 Engineering context installed!`);
      console.log(`\n📋 Created files:`);
      console.log(`   • .rules - AI context and principles`);
      if (cursorCreated) {
        console.log(`   • .cursorrules - Cursor symlink`);
      }
      if (logsCreated) {
        console.log(`   • .nxlogs - Decision tracking log (new)`);
      } else if (existsSync(logsPath)) {
        console.log(
          `   • .nxlogs - Decision tracking log (existing, preserved)`,
        );
      }
      console.log(`\n🚀 Ready to build:`);
      console.log(
        `   1. Open your AI-powered IDE (Cursor, Zed, Windsurf, Cline, etc.)`,
      );
      console.log(
        `   3. The AI will track decisions and learn your preferences`,
      );
      console.log(`   4. Start building with evidence-based engineering`);
      console.log(`\n💡 Philosophy: Evidence > Assumptions, Ship > Polish`);
      console.log(
        `\n🧠 NEW: UNKNOWNS tracking - the system learns as you build`,
      );
    }
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);

    // Provide helpful error context
    if (error.code === "EACCES") {
      console.error(
        "   Permission denied. Try running with appropriate permissions.",
      );
    } else if (error.code === "ENOSPC") {
      console.error("   Not enough disk space available.");
    } else if (error.code === "ENOTDIR") {
      console.error("   Invalid directory path.");
    }

    process.exit(1);
  }
};

// Execute main function
main();
