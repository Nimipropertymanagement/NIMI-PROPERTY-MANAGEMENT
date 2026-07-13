# NIMI Property Management — website

Next.js (App Router) + TypeScript + Tailwind CSS marketing site for NIMI, a UK-wide residential property management company.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Almost all page copy — headings, the trust bar, service descriptions, the About story, contact copy, nav links, phone number — lives in one place:

```
src/content/site.ts
```

Edit that file to update text without touching components or page layout. It's typed, so incorrect edits (e.g. removing a required field) will show up as TypeScript errors.

## Project structure

```
src/app/            Routes: home (/), /services, /about, /contact, /api/contact
src/components/      Reusable UI: Header, Footer, TrustBar, ServiceCard, ContactForm, etc.
src/content/site.ts  All editable copy and structured content
public/images/       Stock photography (see public/images/CREDITS.md)
```

## Contact form

The form on `/contact` POSTs to `src/app/api/contact/route.ts`. Right now it validates the submission and logs it server-side (visible in your terminal / hosting provider's function logs) so nothing is lost, but it doesn't send an email yet.

Before launch, wire that route up to a real delivery method — e.g. [Resend](https://resend.com), Postmark, or a Formspree-style forwarding endpoint — and add any required API key as an environment variable in Vercel.

## Images

Photos in `public/images/` are placeholder stock photography of genuine UK residential streets (Unsplash License, free for commercial use — see `public/images/CREDITS.md` for sources). Swap these for licensed or commissioned photography before the site goes live for real.

## Honesty guardrails

The trust bar (`trustPoints`) and About page (`aboutContent`) are intentionally written to only state things that are true today — no fabricated reviews, client counts, or compliance badges. When NIMI has real accreditations, a track record, or genuine reviews, update `src/content/site.ts` directly; the `credentials` section on the About page and the trust bar are the two places designed to be extended first.

## Deploying

This is a standard Next.js app — deploy it to [Vercel](https://vercel.com/new) by connecting the repository, or run `vercel` from the project root under your own Vercel account. No environment variables are required until the contact form is wired up to a real email/forwarding service.
