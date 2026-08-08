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

The entry point is `public/index.html`; supporting files are in `public/assets/`.
