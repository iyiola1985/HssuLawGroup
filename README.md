This is a [Next.js](https://nextjs.org) project for **Angela W Hssu & Associates Immigration Law**.

## Getting Started

From the repository root:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Edit `src/app/page.tsx` and files under `src/components/site/` to change the site.

## Deploy on Vercel

The Next.js app is at the **repository root** (`package.json` is here). Vercel’s **Root Directory** can stay **empty** (default).

1. Import this repo at [vercel.com/new](https://vercel.com/new).
2. Deploy — Vercel should detect **Next.js** automatically.
3. Optional: **Settings → Environment Variables** — set `RESEND_API_KEY` (and `CONTACT_FROM_EMAIL` after domain verification). See `.env.example`.

**Contact form:** messages go to `contact@angelahssulawfirm.pro` when Resend is configured.

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
