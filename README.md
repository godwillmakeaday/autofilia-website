# Autofilia Website v2

Autofilia is a premium car-culture platform for people who love cars before they own them, while they own them, and even after they outgrow them.

## What is included

- Next.js App Router
- TypeScript
- Tailwind CSS
- Premium dark/gold editorial design
- Functional navigation menu
- Functional homepage CTA buttons
- Homepage
- About page
- Manifesto page
- Car Categories page
- Dream Garage page
- Articles page
- Six article cards
- Six article detail pages
- SEO metadata for core pages

## Main routes

- `/`
- `/about`
- `/manifesto`
- `/car-categories`
- `/garage`
- `/articles`
- `/articles/the-first-car-is-never-just-a-car`
- `/articles/why-people-love-suvs`
- `/articles/the-shame-of-not-owning-a-car`

## Termux update steps for an existing GitHub/Vercel repo

Unzip the project, copy it into your existing `~/autofilia-website` folder, then commit and push.

```bash
cd ~
unzip /sdcard/Download/autofilia-website-v2.zip
cp -r autofilia-website-v2/* ~/autofilia-website/
cd ~/autofilia-website
git add .
git commit -m "Expand Autofilia platform structure"
git push
vercel --prod
```

If npm install is slow on Termux, do not fight it. Push the code and allow Vercel to install dependencies in the cloud.

## Local development

```bash
npm install --no-audit --no-fund
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build test

```bash
npm run build
```
