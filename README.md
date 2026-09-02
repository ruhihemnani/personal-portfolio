# Ruhi Hemnani — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Framework:** Next.js 16, App Router
- **Styling:** Tailwind CSS v4, custom design tokens in `app/globals.css`
- **Fonts:** Fraunces (display serif) + Inter (body sans), self-hosted via `@fontsource-variable`
- **Animation:** framer-motion
- **Icons:** lucide-react

## Structure

```
app/            Pages, layout, metadata, favicon
components/     Nav, Hero, Projects, Experience, Contact, Reveal, icons/
data/           Site content — profile.ts, projects.ts, experience.ts
public/         Static assets, resume.pdf, images/
```

Content (bio, project write-ups, experience entries) lives in `data/` so it can
be edited without touching component code.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deployment

Deployed on [Vercel](https://vercel.com), connected to this repository's
`main` branch for automatic deploys on push.
