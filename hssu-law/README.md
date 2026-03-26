This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This app lives in the **`hssu-law`** folder when the Git repository root is the parent directory.

1. Import the GitHub repo in [Vercel](https://vercel.com/new).
2. Open **Project → Settings → General**.
3. Set **Root Directory** to **`hssu-law`** (click Edit, choose the folder, save).
4. Redeploy (**Deployments → … → Redeploy**).

If **Root Directory** is left as the repository root, Vercel will not find `package.json` and the deployment will fail or show the wrong site.

**Important:** The app must be committed as **normal files** inside `hssu-law`, not only as a Git submodule pointer. Submodules often clone empty on Vercel unless everything is configured with extra URLs and access.

**Contact form email:** set `RESEND_API_KEY` in Vercel (see `.env.example`). Messages are delivered to `contact@angelahssulawfirm.pro`. After verifying your domain in [Resend](https://resend.com), set `CONTACT_FROM_EMAIL` to an address on that domain.

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
