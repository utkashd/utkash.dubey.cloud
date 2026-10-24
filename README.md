## Deploy with Cloudflare Pages Git integration

The build prerenders public routes as static HTML. In the existing Cloudflare Pages project's build settings, use:

- Root directory: the repository root (clear the old `utkash-dubey-cloud` value).
- Framework preset: None.
- Build command: `pnpm run build`.
- Build output directory: `dist/client`.

Cloudflare installs dependencies and builds on Git pushes. Only `dist/client` is published; `dist/server` is used
for build-time prerendering and must not be deployed. No Worker or Pages Function is required.

`public/404.html` is copied to the output root so unknown URLs receive a static 404 rather than Pages' SPA fallback.
See [Cloudflare's serving behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/).

Static routes are discovered automatically, and links are crawled during prerendering. For future dynamic routes
(such as blog posts), link every public URL from a prerendered page or list it in TanStack Start's `pages` configuration.
See [TanStack's prerendering documentation](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering).

The server-function and API examples below require a server deployment and are not available on this static host.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from
`@tanstack/react-router`.

```tsx
import { Link } from "@tanstack/react-router";
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link
documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).
