# AGENTS.md

- In `utkash-dubey-cloud`, run `pnpm` commands and Vite commands with escalated sandbox permissions. In the managed
  sandbox they can hang silently before binding a port or printing output.
- When escalating, use a short justification and, when appropriate, a scoped prefix rule such as `["pnpm", "run", "dev"]`,
  `["pnpm", "run", "build"]`, or `["pnpm", "exec"]`.
