# adnb.dev

My personal site: portfolio and projects. The blog lives on [Hashnode](https://adnb.hashnode.dev) and is linked from the nav. Built with Next.js (App Router), TypeScript and Tailwind.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Content

- **Home page copy and status words:** `src/app/page.tsx`, `src/components/Status.tsx`.
- **Stack icons:** `src/lib/stack.ts`.
- **Projects:** edit the list in `src/lib/projects.tsx`.
- **Header links:** `src/lib/nav.ts`.

## CI

`.github/workflows/ci.yml` runs lint and build on pushes to `main` and on pull requests.

## Note

This uses a recent Next.js version with breaking changes. See `node_modules/next/dist/docs/` before relying on older conventions.
