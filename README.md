# Puffer Panic Website

The marketing site for [Puffer Panic](https://app.pufferpanic.com), an
ad-free sight words game for kids. Built with [Astro](https://astro.build)
and Tailwind CSS v4 — a single static site, no framework, no backend.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Deploys to AWS Amplify Hosting via `amplify.yml` (static output from
`npm run build`, artifacts in `dist/`).
