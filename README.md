# how I think I set this up

1. create a git repository
1. in cloudflare, create a worker from an existing repository
1. `wrangler init`, add the custom domain to `wrangler.jsonc`
1. code away I think?
1. why is their documentation so gd out of date
1. change `main` in the wrangler config file to `src/main.tsx` because we don't
   need the worker

## setup

```sh
pnpm dlx @tanstack/cli create --router-only
```

## checks

This repo uses [`prek`](https://github.com/j178/prek) for pre-commit checks.

```sh
prek install
prek run --all-files
```

The hooks cover TypeScript, Prettier, ESLint, Markdown, YAML, EOF fixes, and
large-file checks.
