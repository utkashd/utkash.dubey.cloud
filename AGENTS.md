# AGENTS.md

- In `utkash-dubey-cloud`, run `pnpm` and Vite commands with escalated sandbox permissions. In the managed sandbox
  they can hang silently before binding a port or printing output.
- When escalating those commands, use a short justification and a scoped prefix rule when appropriate, such as `["pnpm",
  "run", "dev"]`, `["pnpm", "run", "build"]`, or `["pnpm", "exec"]`.
