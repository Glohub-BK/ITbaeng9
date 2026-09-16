---
name: reference-style-audit
description: Analyze a supplied landing-page reference into observable visual patterns, named effects, and reusable rules before designing a new page; not for coding alone when no reference is involved.
---

# Reference style audit

Inspect the actual page at desktop and, when possible, mobile widths. Capture the hero, one middle section, a repeated content pattern, and the ending/CTA. If the user names a motion effect, scroll through its entry, settled, and exit states in small increments. A single screenshot of the settled section cannot establish how it moves. Check whether multiple panels overlap, whether a visual remains pinned while content changes, and whether entry motion repeats. When browser inspection allows it, sample element position, opacity, transform, and sticky/fixed state; otherwise report the visible behavior without claiming an implementation.

Produce a compact audit with: visual thesis, typography, palette, layout rhythm, evidence presentation, navigation/CTA, motion, responsive differences, and effects glossary. For each prominent motion, record trigger, moving element, direction, layering/pinning, visible start and end states, and mobile/reduced-motion differences when observable. Mark every item as **observed**, **inferred**, or **proposed**. Distinguish a pattern's design name from an unverified CSS/library implementation. Give priority to the specific effects the user highlighted; do not replace them with a generic animation summary.

Extract transferable principles, not the original brand assets, copy, wordmark, or exact composition. Record the source URL and observation date. If access fails, say what could and could not be seen.

For this repository's initial reference, use [the Paperlogy brief](../../../design_references/paperlogy_landing_brief.md) as a starting point, then re-check the live page if the task depends on current appearance. The brief records the observed card stack, rotating numbered marker, and right-side feature entry as separate effects; read those observations before implementing a page inspired by this reference.
