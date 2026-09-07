# Amble landing page visual direction

## Intent

The first screen should make everyday movement feel warm, possible, and worth looking forward to. The Brainrot screenshots are the primary composition reference. Finch and Unrot inform the friendliness, but not the page structure.

## Composition

The page is one tall centered poster. A head-only Amble lockup anchors the upper left while the promise, supporting copy, and App Store action stay centered. A quiet skyline rises behind an upright phone at the first fold. The same phone continues into a full width park below, surrounded by two café companions, a runner, and a cyclist. The park artwork fills the rounded lower edge without a detached color band.

The second section opens onto a quiet off-white canvas with an oversized centered promise. Four soft white feature cards form a steady column beside three overlapping iPhones. The middle phone leads the composition while the side phones lean inward, using real Activity, Heart Moments, and Social captures to make the product feel tangible.

The Apple Watch story follows as two connected editorial sections on a quiet white canvas. The first uses one generous pale gray panel, a front-facing Apple Watch, and concise wrist-first copy. The second is a restrained neutral grid that shows the real dashboard, live workout metrics, heart-rate infographic, HRV detail, and session summary. Watch hardware stays calm and realistic, while every screen inside it is captured directly from the Amble Watch app. Do not substitute illustrated or generated interfaces, colorful decorative backgrounds, or detached UI crops.

The page closes with a single open download moment. A custom transparent Lumi cutout skips toward the message and sits directly on the off white page beside a direct headline and the App Store action, with no card or scenic backdrop behind either column. This movement led pose is deliberately specific to Amble and avoids the seated sprout composition in the reference. A coral footer follows without a gap, using the real app icon, four compact white information groups, and an oversized low contrast white AMBLE wordmark. Keep this ending sparse and do not add ratings, extra navigation, or unverified social destinations.

## Secondary pages

Privacy and terms pages use the same rounded type, app icon, coral, mint, amber, ink, and off white palette as the landing page. Each opens with a warm coral and amber hero, Lumi as a reassuring guide, and a concise summary before moving into a restrained reading layout. On larger screens a sticky contents card supports scanning; on small screens it becomes an ordinary section above the document. Legal copy remains visually calm and should never be squeezed into decorative cards.

The 404 is a small Amble world rather than a generic error panel. Lumi walks along a curved path toward a home sign inside a simple mint landscape, while the message and return action remain immediately clear. The mascot is the visual focus, motion is subtle and removable, and no generated character variant is introduced.

## Character

Friendly, gently energetic, and noncompetitive. Use bold flat shapes, crisp silhouettes, strong color fields, and only restrained shading. The scene should feel like an entertaining mobile app world, not a watercolor wellness illustration or a software marketing card.

## Design tokens

The canonical implementation lives in `src/app/globals.css`.

- Coral `#FF6B6B`
- Dark coral `#E84A4A`
- Soft coral `#FFE8E8`
- Mint `#4FCCC4`
- Soft mint `#E0F7F5`
- Amber `#FFB347`
- Slate `#2E3561`
- Ink `#1A1A2E`
- Muted ink `#8787A8`
- Off white `#FAFAF7`
- Border `#E8E6E0`

## Product truth

The navbar uses the transparent head asset from the iOS catalog. The upright phone contains a simulator capture of the real Home screen. The park is one flattened illustration with four integrated Lumi characters, composed from the approved park and mascot artwork so their identity stays consistent. There are no generated logos, interfaces, reviews, ratings, awards, or download claims.

## Motion and access

Motion is decorative and uses transform only. It is removed when `prefers-reduced-motion` is enabled. Core copy, brand, and the App Store action remain semantic and usable without animation or analytics.
