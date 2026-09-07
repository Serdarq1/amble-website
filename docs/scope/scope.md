# Scope: Amble website

Amble is a warm, playful website for an iPhone and Apple Watch movement companion. It introduces Lumi and helps people who want gentle, sustainable everyday movement find the app.

**Build approach:** Skateboard (ship the smallest polished website section first, then grow it one section at a time). (basis: your requested section by section workflow)
**Workflow:** Alpha (run `/check verify` after `/develop`). The project default level of rigor. `/architect` is the recommended first stop for a feature with a real decision, but skippable when you already know the build. Any feature can carry its own tier tag to do more or less. (basis: a low risk public page still benefits from real browser proof)

_These are recommendations to keep your build orderly, not requirements. Skip anything that does not fit. You decide when a feature is `done`._

## At a glance

| # | Feature | Phase | Status |
|---|---------|-------|--------|
| 1 | Next.js website foundation | Foundation | existing |
| 2 | Homepage hero and navigation | Release 1 | in-progress |
| 3 | Homepage feature showcase | Release 2 | in-progress |
| 4 | Apple Watch experience | Release 3 | in-progress |
| 5 | Legal and recovery pages | Release 4 | in-progress |

## Foundations

### 1. Next.js website foundation · existing
The runnable Next.js, TypeScript, Tailwind CSS, and ESLint scaffold that later website sections build on. Code in `./`.

## Release 1: Smallest polished website

### 2. Homepage hero and navigation · in-progress
Create a focused first impression with Amble branding, Lumi, concise movement focused copy, a simple brand plus action navbar, and a lively original hero scene. Use the real app as the source of truth and Finch, Unrot, and Brainrot as the main composition references.

**Done when:** the responsive hero explains Amble in one glance, uses an original brand faithful visual and real app captures if app UI appears, offers one accessible App Store action ready for the final URL, records lightweight traffic through Vercel Analytics, meets WCAG AA, and makes no App Store review, rating, award, or download count claims.

- [x] Design it (spec): `/architect homepage hero and navigation` · [0001](../specs/0001-homepage-hero-navigation.md)
- [x] Build it: `/develop homepage hero and navigation`
  - [x] Prepare real Amble brand, Lumi, app capture, and original park artwork (**AC-3**, **AC-4**, **AC-8**, **AC-9**, **AC-10**)
  - [x] Build the responsive navbar, copy, CTA, and layered hero scene (**AC-1**, **AC-2**, **AC-3**, **AC-5**, **AC-6**, **AC-8**, **AC-10**)
  - [x] Add analytics, click tracking, and metadata (**AC-7**, **AC-9**, **AC-11**)
  - [x] Run code and responsive visual checks (**AC-1** through **AC-11**)
- [ ] Verify it: `/check verify homepage hero and navigation`

## Release 2: Feature showcase

### 3. Homepage feature showcase · in-progress
Introduce Amble's core experience with a large, friendly feature section inspired by the supplied composition. Pair four concise product truths with three real simulator captures from Activity, Heart Moments, and Social.

**Done when:** the section follows naturally from the hero, explains Amble's main features without unsupported claims, uses real app screens in a responsive overlapping phone composition, remains readable and well composed on mobile, and meets WCAG AA.

- [x] Build it: `/develop homepage feature showcase`
  - [x] Capture truthful Activity, Heart Moments, and Social app screens
  - [x] Build responsive feature cards and overlapping phone composition
  - [x] Run code and responsive visual checks
- [ ] Verify it: `/check verify homepage feature showcase`

Code in `src/app/page.tsx`, `src/app/globals.css`, and `public/screens/`.

## Release 3: Apple Watch experience

### 4. Apple Watch experience · in-progress
Show how Amble moves from the phone to the wrist with a large Apple Watch product moment and a supporting card grid. Keep the story grounded in the real Watch app: quick activity starts, live workout metrics, daily wellbeing context, and configurable complications.

**Done when:** two responsive sections make the Watch experience easy to understand, use real Amble Watch simulator captures, stay visually consistent with the existing landing page, and avoid unsupported awards or App Store claims.

- [x] Build it: `/develop apple watch experience`
  - [x] Build the wrist first Apple Watch introduction
  - [x] Capture the real live session, heart-rate trend, HRV detail, and session summary screens
  - [x] Rebuild the Watch capability grid with neutral editorial panels and detailed hardware
  - [x] Run code and responsive visual checks
- [ ] Verify it: `/check verify apple watch experience`

Code in `src/app/page.tsx` and `src/app/globals.css`.

## Release 4: Legal and recovery pages

### 5. Legal and recovery pages · in-progress
Give visitors a clear, brand consistent place to understand Amble's privacy practices and terms, and a friendly way home when a route does not exist. The policies must reflect the app's implemented Apple Health, on device photo processing, account, social, subscription, notification, Supabase, and website analytics behavior without importing unrelated claims from reference apps.

**Done when:** `/privacy-policy` and `/terms-and-conditions` are readable, responsive, internally linked from the footer, and grounded in the real product; unknown routes return a branded 404 with Lumi and a working home action; metadata, keyboard focus, heading structure, contrast, and mobile layout are verified.

- [x] Build it: `/develop legal and recovery pages`
  - [x] Audit the app's actual data, payment, permission, and third party flows
  - [x] Build a shared legal document layout and both policies
  - [x] Build a dedicated branded 404 route
  - [x] Run code and responsive visual checks
- [ ] Verify it: `/check verify legal and recovery pages`

Code in `src/app/privacy-policy/`, `src/app/terms-and-conditions/`, `src/app/not-found.tsx`, `src/components/legal-page.tsx`, and `src/app/globals.css`.

## Deferred

- **Additional homepage sections:** benefits, pricing, FAQ, and footer will be designed one at a time after the Apple Watch experience.
- **Final App Store destination:** replace the temporary action target when the live URL is provided.
- **App Store social proof:** ratings, review quotes, awards, and download counts stay out until verified data is available.

## Legend

**Feature lifecycle:** `planned` becomes `in-progress` during design and build, then `done` when you choose after the Alpha browser verification.

**Next step:** the first unticked box is the recommended command to run.

**Needs a decision:** run `/architect` first because the page composition, copy, visual system, asset treatment, and analytics integration need one recorded direction.

## References

### Project sources

- The Amble iPhone and Apple Watch app, especially onboarding, home, activity, social, and shop surfaces.
- `BrandColor.swift`, Amble logo assets, Lumi pose assets, `MASCOT_ART.md`, and `PRODUCTION.md` in the Amble app repository.
- The attached Finch, Unrot, and Brainrot screenshots as the main visual and composition references.

### Practices and standards

- Smallest usable whole product slicing.
- WCAG AA accessible interaction and contrast.
- Responsive, performance conscious public page design.
