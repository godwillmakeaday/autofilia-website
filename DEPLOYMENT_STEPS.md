# Deploy Autofilia v3 from Termux

These steps assume your existing live project folder is `~/autofilia-website` and your GitHub/Vercel project is already connected.

## 1. Unzip v3 from Downloads

```bash
cd /sdcard/Download
unzip autofilia-website-v3.zip -d ~/autofilia-v3-temp
```

## 2. Copy v3 files into the existing live project

```bash
cp -r ~/autofilia-v3-temp/autofilia-website-v3/* ~/autofilia-website/
cd ~/autofilia-website
rm -f package-lock.json
```

## 3. Commit and push

```bash
git status
git add .
git commit -m "Upgrade Autofilia to automotive affection platform"
git push
```

## 4. Deploy on Vercel

```bash
vercel --prod
```

When asked about environment variables, answer:

```text
no
```

## 5. Test important routes

```text
/
/start-here
/dream-garage-builder
/car-type-finder
/car-meaning-library
/garage
/car-categories
/before-ownership
/during-ownership
/beyond-ownership
/african-roads
/tools
/manifesto
/articles
/articles/the-first-car-is-never-just-a-car
/articles/why-people-love-suvs
/articles/pride-without-arrogance
```

## If npm is slow on Termux

Do not fight the phone network. Commit the package files and let Vercel install in the cloud.
