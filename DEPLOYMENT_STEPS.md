# Autofilia v2 Deployment Steps

## If you are updating the existing live site

```bash
cd ~
unzip /sdcard/Download/autofilia-website-v2.zip
cp -r autofilia-website-v2/* ~/autofilia-website/
cd ~/autofilia-website
git status
git add .
git commit -m "Expand Autofilia platform structure"
git push
vercel --prod
```

When Vercel asks to pull development environment variables, answer `no`.

## If package install fails on Termux

It is usually network timeout. Push the files to GitHub and let Vercel install dependencies in the cloud.

## If Vercel says package.json is invalid

Run:

```bash
node -e "JSON.parse(require('fs').readFileSync('package.json','utf8')); console.log('package.json OK')"
```

If it says OK, deploy again.
