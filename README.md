# how I think I set this up

1. create a git repository
2. in cloudflare, create a worker from an existing repository
3. `wrangler init`, add the custom domain to `wrangler.jsonc`
4. code away I think?
5. why is their documentation so gd out of date
6. change `main` in the wrangler config file to `src/main.tsx` because we don't
   need the worker
