# utkash.dubey.cloud

1. Create a repository on GitHub
2. Setup `nvm` on your machine
3. In repository:

    ```zsh
    npm create cloudflare@latest my-react-app --
    --framework=react --platform=pages

    # select typescript + swc and follow the instructions
    ```

4. In Cloudflare, `Workers & Pages` --> `Import a Repository` --> Select only
   this repo --> Authorize 5. Configure project: 1. Name: `utkash-dubey-cloud` 2. Build command `npm run build` 3. Deploy command `npx wrangler deploy src/main.tsx` ? 4. Root directory `website` 6. Add to package.json: `"deploy": "wrangler deploy src/main.tsx"`
