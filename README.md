# irfannazar.com

Static portfolio website for Irfan Nazar.

## Structure

```text
irfannazar.com
├── public
│   ├── index.html
│   └── assets
└── wrangler.jsonc
```

## Deploy

This repository is a plain static site. Deploy `public/` to any static host:

- Vercel
- Cloudflare Pages
- Netlify
- GitHub Pages
- Any cPanel/static web hosting

For Cloudflare Workers static assets, deploy with Wrangler from the repository root:

```powershell
npx wrangler deploy
```

For GitHub Pages, this repository publishes `public/` with the workflow in `.github/workflows/pages.yml`.

Custom domain:

```text
www.irfannazar.com
```

DNS record required at your domain provider:

```text
Type:  CNAME
Name:  www
Value: irfannazar35.github.io
```

The entry point is `public/index.html`; supporting files are in `public/assets/`.
