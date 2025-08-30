# Publishing nxHuman to npm

**Evidence > Assumptions • Ship > Polish**

## Pre-Publish Checklist

- [ ] Verify you're logged in as the package owner:
  ```bash
  npm whoami
  # Should return: prajjwaldatir
  ```

- [ ] Ensure clean working directory:
  ```bash
  git status
  # No uncommitted changes
  ```

- [ ] Test the package locally:
  ```bash
  npm test
  npm link
  npx nxhuman --dry-run
  npm unlink
  ```

- [ ] Verify package contents:
  ```bash
  npm pack --dry-run
  # Should include: index.js, README.md, LICENSE, package.json
  # Should be ~50KB unpacked
  ```

## Version Management

Current: `1.2.0` (The Simplification Release)
Previous: `1.1.0` (The Consciousness Update)

### Semantic Versioning Philosophy
- **Major (1.x.x)**: Narrative structure changes
- **Minor (x.1.x)**: New specialist behaviors or principles
- **Patch (x.x.1)**: Fixes that don't alter the narrative

## Publishing Commands

### Standard Release
```bash
# From the command directory
cd command

# Publish to npm
npm publish

# Verify publication
npm view nxhuman@latest
```

### Beta/Preview Release
```bash
# For testing narrative changes
npm publish --tag beta

# Users can install with:
# npx nxhuman@beta
```

### Rollback (if needed)
```bash
# Deprecate broken version
npm deprecate nxhuman@1.2.0 "Narrative inconsistency detected"

# Cannot unpublish after 72 hours, but can deprecate
```

## Post-Publish Verification

1. **Test global installation:**
   ```bash
   npm install -g nxhuman@latest
   nxhuman --version
   # Should show: nxHuman v1.2.0
   ```

2. **Test npx execution:**
   ```bash
   cd /tmp
   mkdir test-nxhuman && cd test-nxhuman
   npx nxhuman --dry-run
   ```

3. **Verify Cursor compatibility:**
   ```bash
   npx nxhuman
   ls -la .rules .cursorrules
   # Should show symlink on Unix systems
   ```

4. **Check npm page:**
   ```
   https://www.npmjs.com/package/nxhuman
   ```

## GitHub Release

After npm publish:

```bash
git tag v1.2.0
git push origin v1.2.0

# Create GitHub release with CHANGELOG content
# Title: "v1.2.0 - The Simplification Release"
# Description: Copy from CHANGELOG.md
```

## Common Issues

### Permission Denied
```bash
# Ensure you're logged in as package owner
npm login
# Username: prajjwaldatir
```

### Version Already Exists
```bash
# Bump version first
npm version patch  # or minor/major
# This updates package.json and creates git tag
```

### File Missing in Package
Check `.npmignore` and `files` in package.json
- Only include essential files
- Keep package minimal (~50KB unpacked)

## The Publishing Philosophy

**Ship > Polish**: Don't wait for perfection. The ~250 lines aspiration while having ~300 lines reality? Ship it. That tension IS the product.

**Evidence > Assumptions**: Test locally before publishing. Verify after publishing. Measure impact through downloads and issues.

**Narrative Consistency**: Every publish should maintain the core narrative tensions:
- Minimalism vs Completeness
- Agnosticism vs Opinion
- Idealism vs Pragmatism

## Quick Publish (for the experienced)

```bash
cd command
npm test && npm publish && npm view nxhuman@latest
```

---

*Remember: The narrative structure IS the product. Don't sanitize the contradictions.*