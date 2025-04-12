# utkash.dubey.cloud

1. Create a repository on GitHub
2. Setup `nvm` on your machine
3. In repository, `npm create vite@latest website -- --template react-ts`
    1. Follow the instructions: `cd website && npm install && npm run dev`
4. In Cloudflare, `Workers & Pages` --> `Import a Repository` --> Select only
   this repo --> Authorize
5. Configure project:
    1. Name: `utkash-dubey-cloud`
    2. Build command `npm run build`
    3. Deploy command `npx wrangler deploy` ?
    4. Root directory `/website`
6.
