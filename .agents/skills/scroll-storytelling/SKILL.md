---
name: scroll-storytelling
description: Plan and implement restrained scroll-linked transitions, overlapping panels, and persistent wayfinding for narrative landing pages when motion supports the content.
---

# Scroll storytelling

Map the narrative before animating: claim → proof → implication → action. Identify the exact comprehension benefit of each transition. Prefer native scrolling and lightweight CSS for static rhythm; add sticky/overlap or scroll-linked animation where the scene change clarifies a relationship. When a reference's identified signature is motion, treat that motion as part of the requested visual design and verify it in the running page.

Name mechanisms accurately: `position: sticky` for a sticky element, `fixed` for viewport-pinned UI, overlap/card stacking for visual layering, reveal for entry animation, and scroll-linked animation only when progress truly follows scroll position. Do not label a merely large headline as animated kinetic typography.

For a Paperlogy-inspired scene, distinguish these effects and adapt their content and palette to the new product:

- **Rising panel stack:** viewport-height panels in normal scroll flow use `position: sticky; top: 0` and increasing paint order so each incoming rounded color field rises over the held previous panel. Keep native scroll and a visible edge/gutter on wide screens.
- **Numbered feature rail:** a compact marker stays sticky while a sequence of claims passes beside it. The reference's rounded square rotates continuously behind an upright changing numeral; rotation is separate from scroll progress.
- **Flying proof cards:** each feature's right-side content starts translated right, slightly smaller, and transparent, then settles at its final size and position when it enters the reading area. The reference showed approximately `translateX(192px) scale(.9)` at opacity `0`; those are observations, not mandatory values for every project.

Use all three when the user asks for those specific reference effects. Use a clear trigger and completion state for each, and check the transition by scrolling through intermediate frames, not only viewing the final layout. On narrow screens, keep the numbered marker visible without covering the claim and let the proof card occupy the available width.

Keep anchors and CTA functional without JavaScript. Avoid scrolljacking, hidden essential content, and long delays. Restrict any continuous rotation to a small decorative marker and disable it under `prefers-reduced-motion`. Respect keyboard navigation, focus visibility, and touch scrolling. Test panel stacking and anchor targets at desktop and mobile sizes; sticky elements must not cover headings or controls. When JavaScript adds entry reveals, leave content visible if the script fails or reduced motion is requested.
