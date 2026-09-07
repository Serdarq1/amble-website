# 0001 · Homepage hero and navigation

**Status**: In Progress
**Date**: 2026-09-05

## Summary

Build one polished homepage hero that introduces Amble as a gentle everyday movement companion. The page is one centered illustrated world, with the promise above an upright phone that continues into a lively neighborhood park. Real Lumi artwork and a real simulator capture keep the product truthful.

## Context

The website currently contains only the generated Next.js starter. Amble already has a distinct visual system and product voice in its iPhone and Apple Watch app. The first website release should carry that identity into a small, shippable public page without making unverified App Store claims or expanding into later marketing sections.

## Requirements

- **AC-1**: The opening view centers the Amble mark and wordmark above the hero message. The App Store badge sits below the supporting copy, not in a conventional split navigation bar.
- **AC-2**: The hero headline reads “Make movement feel like something to look forward to.” and the supporting copy reads “Your steps, walks, and workouts become a daily rhythm worth showing up for.”
- **AC-3**: The desktop hero is one tall full width composition. Centered copy leads into a quiet skyline, an upright phone enters from the first fold, and the same phone continues into a sunny neighborhood park below.
- **AC-4**: The simulator capture shows the real completed Daily Win celebration with demo data and no personal information.
- **AC-5**: On small screens, the same vertical order remains intact: centered brand, copy, App Store action, upright phone, then the continuing park scene. Nothing causes horizontal overflow.
- **AC-6**: Motion is gentle and decorative. Visitors who prefer reduced motion receive a stable static composition with no loss of content.
- **AC-7**: The App Store action remains visually active and temporarily targets `#`. It has a descriptive accessible name and records an `app_store_cta_click` event without sending user or health data.
- **AC-8**: The page meets WCAG AA contrast and keyboard requirements. All meaningful images have useful alternative text and decorative art is hidden from assistive technology.
- **AC-9**: The page ships a title, description, crawl metadata, and a social sharing image based on the hero. Canonical URL waits for the final domain.
- **AC-10**: The page contains no ratings, review quotes, awards, download counts, or other App Store social proof.
- **AC-11**: Vercel Analytics records page views and does not block the page if analytics fails.

## Decision

Use a light only, static first Next.js App Router page with one small client island for analytics. Keep copy and controls as semantic HTML. Build the hero as one continuous layered scene so the phone visually connects the opening promise to the park below. Use one generated park and skyline environment, then layer the real app and Lumi assets above it.

Use the native rounded system font stack from the app. Use Amble’s existing coral, mint, amber, slate, ink, off white, border, and white values as CSS tokens. Do not add a font package.

**Implementation skills**: `imagegen` for the original hero scene · `browser:control-in-app-browser` for responsive visual verification

## Options considered

### Layered illustrated hero, chosen

Generate the park world, then layer real Amble assets and a real app capture. This keeps the product trustworthy and makes later asset changes inexpensive. It requires careful responsive composition.

### One generated hero image

Generate the scene, mascot, and device as one bitmap. This is quick to place but risks inaccurate branding and fabricated app UI.

### Existing assets and CSS shapes only

Use only repository assets and code drawn scenery. This is deterministic but gives the first release less visual richness than the chosen references.

## Rationale

The layered approach combines the strongest qualities of Finch, Unrot, and Brainrot while preserving Amble’s identity. Real product UI and real mascot art create trust. A generated background provides the entertaining setting without asking the image model to reproduce branded details or interface text. The Skateboard approach keeps this first release small and genuinely presentable.

## Feature design

**Page composition**:

1. Centered Amble mark and wordmark at the top of a warm coral sky.
2. Centered headline, supporting line, and official App Store badge.
3. Low contrast skyline and clouds behind an upright phone that enters from the bottom of the opening view.
4. One connected park continuation with curved paths, trees, small props, and real Lumi poses around the same phone.
5. Large rounded lower corners that reveal the white page beneath. No additional homepage section in this release.

**Component inventory**:

- `SiteHeader`: centered Amble mark and wordmark.
- `AppStoreBadge`: shared accessible action and analytics hook.
- `HeroCopy`: centered semantic heading, supporting text, and App Store action.
- `HeroWorld`: generated skyline and park background, real Lumi poses, upright phone frame, and real app capture.
- `Analytics`: Vercel page view integration at the root layout.

**Data model sketch**:

No database or persisted browser state. Copy and asset paths are local constants. The future App Store URL is one replaceable constant.

**API surface**:

| Surface | Method | Key inputs | Key outputs | Auth | Key errors |
|---|---|---|---|---|---|
| `/` | GET | none | static HTML, optimized assets, metadata | public | missing local asset fails the build |
| App Store action | click | temporary `#` target | navigation attempt and analytics event | public | analytics failure is ignored |

**Value sourcing**:

| Action | Value produced or displayed | Source |
|---|---|---|
| Render brand | Amble mark and name | `amble_original_mark` from the Amble asset catalog plus the literal product name |
| Render hero copy | headline and supporting line | AC-2 |
| Render hero scene | skyline and park world | a new generated panorama using Amble colors and the Brainrot references as art direction |
| Render Lumi | mascot appearances | production walking, waving, sleeping, and encouraging poses from the Amble asset catalog |
| Render phone | completed goal interface | simulator screenshot from the real Amble app using its debug mock data path |
| Activate App Store action | destination | temporary literal `#`, replaced by the final URL later |
| Record conversion | event name | literal `app_store_cta_click`, with placement only and no identity payload |
| Render metadata | title and description | product name plus AC-2 copy |
| Render social card | simplified hero artwork | generated park, Lumi, phone, headline, and no social proof |

**Key invariants**:

- Product UI and Lumi are always sourced from real Amble assets or a real simulator run.
- Image generation never produces interface text, the Amble logo, Lumi, ratings, reviews, awards, or download claims.
- Core copy and the App Store action remain usable without motion or analytics JavaScript.
- No analytics event contains a user identifier, HealthKit value, device health value, or free text.
- Responsive layout never hides the headline or main action.

**Security model**:

The page is public and read only. It collects no form data and reads no health data. Vercel Analytics receives only its standard traffic data and the named action event with nonpersonal placement metadata.

**Critical test scenarios**:

- Happy path: open `/` on desktop and mobile, understand the product, see the real completed goal screen, and activate the App Store action, verifies **AC-1** through **AC-7**.
- Accessibility: navigate the page by keyboard and with reduced motion enabled, then inspect names and contrast, verifies **AC-6** and **AC-8**.
- Failure case: block analytics and confirm the page and App Store action still render and respond, verifies **AC-7** and **AC-11**.
- Content audit: inspect visible copy, metadata, and social image for prohibited proof claims, verifies **AC-9** and **AC-10**.

## Build plan

1. [x] Add the selected real Lumi poses and generate the wide flat park panorama, satisfies **AC-3**, **AC-4**, **AC-8**, **AC-10**.
2. [x] Update `design.md` and rebuild the hero as one centered continuous world, satisfies **AC-1**, **AC-2**, **AC-3**, **AC-5**, **AC-6**, **AC-8**, **AC-10**.
3. [x] Preserve the real Daily Win capture, App Store action, analytics, and page metadata, satisfies **AC-4**, **AC-7**, **AC-9**, **AC-11**.
4. [x] Run lint and production build, then render desktop and mobile screenshots and fix visual, responsive, accessibility, and claim issues, satisfies **AC-1** through **AC-11**.

## Consequences

**Positive**:

- The first release is small, distinctive, and grounded in the real product.
- Layered assets stay replaceable when the app UI or App Store destination changes.
- Static first rendering keeps the page fast and resilient.

**Negative and tradeoffs**:

- The tall continuous hero uses more vertical space and needs careful breakpoint tuning.
- The temporary `#` destination looks active before it can complete a download journey.
- A light only release does not adapt its visual palette to dark system preferences.

**Neutral**:

- The official App Store badge and final destination remain launch assets that must be maintained.
- Later sections should extend the tokens and composition rules established here.

## Follow-up

- [ ] Replace `#` with the verified App Store URL when it is available.
- [ ] Add ratings, review quotes, awards, or download counts only after their values and permission to publish are verified.
- [ ] Consider the discovered Vercel React and analytics skills later if the website grows beyond this small release. No optional skill is installed for this build.

## References

**Project sources**:

- The Amble app’s `BrandColor.swift`, onboarding, home, Daily Win, logo, Lumi, and production assets.
- The local Next.js 16 App Router, image, CSS, font, metadata, and accessibility guides under `node_modules/next/dist/docs/`.
- The attached Finch, Unrot, and Brainrot screenshots.

**Practices and standards**:

- Smallest usable whole product slicing.
- Static first public page rendering.
- WCAG AA contrast, keyboard access, reduced motion, and meaningful image alternatives.
