# Personal website rebuild

## Goals and decisions

- Rebuild the personal website with TanStack Start. Prefer its TypeScript and
  React development experience, and leave room for future interactive features.
- Make publishing posts simple: add a regular Markdown (`.md`) file with minimal
  frontmatter, commit, and deploy. Writing a post should not require React code
  or route edits.
- Separate post content from layouts and styling. Generate the writing index
  and an individual URL for each post from the Markdown files.
- Preserve existing writing and useful site content during migration. Review
  existing URLs and hash links before changing them so shared links keep working.
- Simplify the visual design, prioritizing readable typography, comfortable line
  lengths, mobile layouts, and accessible navigation. The palette and exact
  styling remain open.

## Rendering and hosting

- Prerender every public route, including every blog post, as static HTML at build time.
  Build-time prerendering is acceptable; request-time server-side rendering is not.
- Return a static 404 page for unknown URLs without falling back to server rendering
  or invoking a Worker.
- Deploy HTML, CSS, JavaScript, and images through Cloudflare static asset hosting.
  The initial site must not require a running Start server or Worker execution
  for page requests, navigation, or reading posts.
- Keep hosting costs minimal, targeting Cloudflare's free static hosting.
  Verify the actual deployment configuration rather than assuming Start's default
  Cloudflare setup is static-only.
- Future interactive features may run in the browser. Introduce APIs, server
  functions, databases, or other billable services only when a feature needs them
  and their cost implications have been discussed.

## Handoff and completion checks

- The owner will set up TanStack Start and prepare the starting codebase.
  Build on that setup; this document does not request a competing scaffold.
- Confirm that adding a Markdown file produces a post and index entry after a
  build, without application code changes.
- Confirm that direct visits and refreshes work for every generated post URL,
  and that post text is present in the generated HTML.
- Confirm that the deployed site serves static assets without invoking a Worker,
  including a static 404 response for unknown URLs.
- RSS, a sitemap, and richer metadata are useful follow-ups, not initial blockers.
