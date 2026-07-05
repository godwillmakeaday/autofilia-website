# Autofilia Website

Autofilia is a premium automotive culture website for people who love cars before they own them, while they own them, and even after they outgrow them.

It is built as a Next.js App Router project with TypeScript and Tailwind CSS.

## Brand position

**Autofilia** is not a dealership, repair shop, or generic review blog. It is a car-love magazine and cultural platform for dreamers, owners, observers, collectors, former owners, and future owners.

Core line:

> Autofilia is for people who love cars before they own them, while they own them, and even after they outgrow them.

## Pages included

- `/` — polished homepage with hero, manifesto, car categories, before ownership, during ownership, beyond ownership, editorial pillars, articles, dream garage, and community section.
- `/about` — about page explaining the philosophy behind Autofilia.
- `/articles` — starter editorial archive with article cards.

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Build test

```bash
npm run build
```

## Termux to GitHub to Vercel workflow

After unzipping this project in Termux:

```bash
cd autofilia-website
npm install
npm run build
```

Then initialize Git:

```bash
git init
git add .
git commit -m "Initial Autofilia website"
```

Create a new GitHub repository named `autofilia-website`, then connect and push:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/autofilia-website.git
git push -u origin main
```

Then deploy through Vercel by importing the GitHub repository.

## Notes for expansion

Possible next additions:

- Real article pages with slugs.
- Car profile pages for the Dream Garage.
- Beginner car dictionary.
- SUV explainer section.
- African roads and used-car wisdom section.
- Newsletter form or waitlist.
- Image replacement using local files in `/public/images`.

## Important

This project uses placeholder visual blocks instead of copyrighted car photos. Add your own images later under `public/images` and update the components if needed.
