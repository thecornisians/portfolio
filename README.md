This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![my-portfolio](https://user-images.githubusercontent.com/84820874/196273949-5a7245ae-c42a-4dd7-94a5-30e35db68ea4.gif)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Contact form spam check

The contact form asks visitors to copy six characters from a noisy PNG image.
The answer is never returned as page text, SVG text, or plaintext API data.
The API verifies
the signed answer, rejects submissions made within two seconds or after ten
minutes, and checks a hidden honeypot field. Visitors can request a new code
without losing their message. This deters basic bots; bots that use OCR
can still submit, and tokens are reusable until they expire.

Set `CONTACT_CHALLENGE_SECRET` to a long random secret on the server if desired.
Otherwise, verification uses the existing `RESEND_KEYS` or `RESEND_API_KEY`, so
no extra configuration is required for an already configured deployment.

## Next.js resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
