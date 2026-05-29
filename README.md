# Meridian Marketplace

A Bun-powered Next.js application scaffolded with:

```bash
npx create-next-app@latest meridian-marketplace --use-bun --yes
```

## Local development

```bash
bun install
bun dev
```

Open http://localhost:3000.

## Build

```bash
bun run build
```

The app is configured for static export and GitHub Pages deployment. On GitHub Actions it serves from the repository base path `/meridian-markdetplace` and deploys the generated `out/` directory with `.github/workflows/deploy.yml`.
