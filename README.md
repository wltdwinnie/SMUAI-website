# SMUAI Website Handover Guide

This README is for future ExCo members who need to update the site quickly (events, team, membership link, etc.).

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful checks:

```bash
npm run lint
npx tsc --noEmit
```

## Main Content Files (Most Important)

- Home content: `src/content/home.ts`
- Events data: `src/content/events.ts`
- Team/ExCo/Advisors data: `src/content/team.ts`
- Partners data: `src/content/partners.ts`

Page UIs:

- Home page: `src/app/page.tsx` + `src/components/home/*`
- Events page: `src/app/events/page.tsx`
- Team page: `src/app/team/page.tsx`
- Partners page: `src/app/partners/page.tsx`

Global layout/navigation:

- Navbar: `src/components/navbar.tsx`
- Footer (membership section): `src/components/footer.tsx`
- App layout (header spacing): `src/app/layout.tsx`

## 1) Update Membership Form Link

Currently membership CTA is in the footer.

Edit: `src/components/footer.tsx`

- Find the Membership CTA `<a>` (currently mailto/TBC).
- Replace `href` with your live form link (Google Form / Typeform / etc).
- Update button text from `Membership Registration (TBC)` to something like `Join SMUAI`.
- Optional: update the short paragraph above it.

If you also want a top-nav join link:

- Edit `src/components/navbar.tsx`
- Update the `Join SMUAI` button `href` (currently points to `/events`).

## 2) Update Events

Edit: `src/content/events.ts`

Each event should include:

- `title`
- `dateLabel` (display text)
- `timeLabel` (display text)
- `startAt` (ISO datetime, SG timezone)
- `endAt` (ISO datetime, SG timezone)
- `poster` (optional image path)
- `lumaLink` (signup link)

Important behavior on events page (`src/app/events/page.tsx`):

- Events are auto-sorted by `startAt` (latest first).
- Luma button is primary.
- Button auto-disables after `endAt`.

ISO datetime format example:

```ts
startAt: "2026-02-03T19:00:00+08:00",
endAt: "2026-02-03T21:30:00+08:00",
```

### Event Poster Naming Convention

Use:

- Folder: `public/events/25-26/` (or matching AY folder)
- Filename: `YYYY-MM-DD-short-slug.jpg`

Example:

- `2025-10-01-networking-night.jpg`
- `2025-10-29-code-with-manusai.jpg`

Then in `events.ts`:

```ts
poster: "/events/25-26/2025-10-01-networking-night.jpg"
```

## 3) Update Team / ExCo / Advisors

Edit: `src/content/team.ts`

### ExCo by Academic Year

Structure:

- `executiveCommitteeByYear["25/26"]`
- `excoNumber` (e.g. `7th ExCo`)
- `leadership` (Big 4)
- `departments` with:
  - `leads` (array, supports 1 or 2 leads)
  - `executives` (array, can be empty)

For each person:

- `name`
- `position`
- `photo`
- `linkedin` (optional but recommended)

### Advisor Section

Also in `src/content/team.ts`:

- `advisors`
- `advisorsIntro`
- `advisorsProfileSummary`

## 4) Team Image Locations

Advisors:

- `public/team/advisors/yasi.jpg`
- `public/team/advisors/naz.jpg`
- `public/team/advisors/luyi.jpg`

ExCo example folders:

- `public/team/exco/25-26/`
- `public/team/exco/24-25/`

Use lowercase filenames with hyphens (no spaces).

## 5) Update Home Page

Edit: `src/content/home.ts`

- `heroGalleryImages`: rotating hero images (paths in `public/gallery`)
- `testimonials`: quote cards and marquee text

Home section styling/components:

- `src/components/home/hero-section.tsx`
- `src/components/home/mission-vision-section.tsx`
- `src/components/home/testimonials-section.tsx`

## 6) Update Partners

Edit: `src/content/partners.ts`

Each partner:

- `name`
- `website`
- `tagline` (optional)
- `logo` (optional, if later used in UI)

## 7) Before You Deploy

Run:

```bash
npm run lint
npx tsc --noEmit
```

Then deploy as usual.

## Quick Monthly Checklist

1. Add latest event with `startAt/endAt` and `lumaLink`.
2. Upload event poster and set `poster` path.
3. Check Team page for latest ExCo updates and LinkedIn links.
4. Update membership form link if intake opens/closes.
5. Run lint + typecheck before push.
