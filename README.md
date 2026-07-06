# Autofilia v3 — Automotive Affection Platform

Autofilia is a premium automotive affection platform for people who love cars before they own them, while they own them, and even after they outgrow them.

## What this version adds

- `/start-here`
- `/dream-garage-builder`
- `/car-type-finder`
- `/car-meaning-library`
- `/garage`
- `/car-categories`
- `/before-ownership`
- `/during-ownership`
- `/beyond-ownership`
- `/african-roads`
- `/tools`
- `/manifesto`
- `/articles`
- 8 article detail pages
- mobile-friendly navigation
- SEO metadata
- client-side tools with no database and no external API

## Core doctrine

You do not need to own a car before you love cars. Ownership is only one chapter of automotive affection.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React client components for interactive tools
- Vercel-ready

## Local setup

```bash
npm install --no-audit --no-fund
npm run build
npm run dev
```

Open:

```text
http://localhost:3000
```

## Important Termux note

Do not install/build inside `/sdcard/Download`. Copy the project into Termux home first:

```bash
cp -r /sdcard/Download/autofilia-website-v3 ~/autofilia-website-v3
cd ~/autofilia-website-v3
npm install --no-audit --no-fund
npm run build
```

## Deployment

This package uses modern dependency ranges and no lock file so Vercel can perform a fresh cloud install. If your phone network is weak, push the code to GitHub and let Vercel install dependencies in the cloud.
