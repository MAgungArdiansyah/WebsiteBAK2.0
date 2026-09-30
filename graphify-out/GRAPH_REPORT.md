# Graph Report - claudewebtest  (2026-09-30)

## Corpus Check
- 121 files · ~7,697,156 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 677 nodes · 851 edges · 59 communities (51 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `006e6668`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Header.js
- BeritaPage.js
- RektorWarekPage.js
- GaleriDetailPage.js
- KebijakanRektorPage.js
- package.json
- BerandaPage.js
- HubungiKamiPage.js
- common.js
- PageHeader.js
- LayananAdministratifPage
- RektorWarekPage
- Universitas Pakuan Logo (App Icon)
- CLAUDE.md — Frontend Website Rules
- FormulirPage
- SopPage
- compilerOptions
- serve.mjs
- next.config.mjs
- BeritaDetailPage.js
- KebijakanWarekPage.js
- Expo Animation Recipes
- Animation Recipes
- Animation Standards Reference
- Animation Audit Playbook
- Write Swift
- Apple Design
- Appendix B - Canonical Sources (read these before reinventing)
- The Fixes
- Prototyping Variants
- Glossary
- Finding Animation Opportunities
- Working With Sonner
- 4. DESIGN ENGINEERING DIRECTIVES (Bias Correction)
- The list
- 10. REFERENCE VOCABULARY (Pattern Names the Agent Should Know)
- Design Engineering
- 9. AI TELLS (Forbidden Patterns)
- Component Building Principles
- 11. REDESIGN PROTOCOL
- 3. DEFAULT ARCHITECTURE & CONVENTIONS
- 6. PERFORMANCE & ACCESSIBILITY GUARDRAILS
- tasteskill: Anti-Slop Frontend Skill
- The Animation Decision Framework
- clip-path for Animation
- Performance Rules
- Gesture and Drag Interactions
- 0. BRIEF INFERENCE (Read the Room Before Anything Else)
- 12. THE BLOCK LIBRARY (Contract - Implementations Land Here Iteratively)
- 5. CONTEXT-AWARE PROACTIVITY
- 8. DARK MODE PROTOCOL
- CSS Transform Mastery
- The Sonner Principles (Building Loved Components)
- Spring Animations
- 1. THE THREE DIALS (Core Configuration)
- 7. DIAL DEFINITIONS (Technical Reference)
- Core Philosophy
- Debugging Animations

## God Nodes (most connected - your core abstractions)
1. `Apple Design` - 21 edges
2. `Write Swift` - 19 edges
3. `@phosphor-icons/react` - 17 edges
4. `tasteskill: Anti-Slop Frontend Skill` - 16 edges
5. `Design Engineering` - 16 edges
6. `Animation Standards Reference` - 16 edges
7. `PageHeader()` - 15 edges
8. `react` - 15 edges
9. `Animation Recipes` - 15 edges
10. `Appendix B - Canonical Sources (read these before reinventing)` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Footer()` --calls--> `formatPhoneDisplay()`  [EXTRACTED]
  components/layout/Footer.js → lib/contact.js
- `Footer()` --calls--> `waLink()`  [EXTRACTED]
  components/layout/Footer.js → lib/contact.js
- `HubungiKamiPage()` --calls--> `formatPhoneDisplay()`  [EXTRACTED]
  components/pages/HubungiKamiPage.js → lib/contact.js
- `HubungiKamiPage()` --calls--> `waLink()`  [EXTRACTED]
  components/pages/HubungiKamiPage.js → lib/contact.js

## Import Cycles
- None detected.

## Communities (59 total, 7 thin omitted)

### Community 0 - "Header.js"
Cohesion: 0.33
Nodes (5): counterpartPath(), getLocale(), Header(), localizeHref(), MobileNavItem()

### Community 2 - "RektorWarekPage.js"
Cohesion: 0.24
Nodes (9): PageHeader(), SectionTabs(), FileNoticeModal(), formulir, layananAdministratif, rektorWarek, sop, @phosphor-icons/react (+1 more)

### Community 3 - "GaleriDetailPage.js"
Cohesion: 0.14
Nodes (7): asset(), GaleriDetailPage(), asset(), GaleriPage(), ActivityPhotoGrid(), asset(), galeri

### Community 4 - "KebijakanRektorPage.js"
Cohesion: 0.33
Nodes (3): isFileAvailable(), KebijakanRektorPage(), kebijakanRektor

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (34): author, dependencies, next, @phosphor-icons/react, puppeteer, react, react-dom, description (+26 more)

### Community 6 - "BerandaPage.js"
Cohesion: 0.15
Nodes (8): asset(), BerandaPage(), asset(), PersonCard(), SIZES, TentangKamiPage(), beranda, tentangKami

### Community 7 - "HubungiKamiPage.js"
Cohesion: 0.13
Nodes (12): dmSans, metadata, nunito, Footer(), getLocale(), localizeHref(), CopyButton(), HubungiKamiPage() (+4 more)

### Community 8 - "common.js"
Cohesion: 0.23
Nodes (5): KodeEtikPage(), Accordion(), common, NAV_ITEMS, kodeEtik

### Community 9 - "PageHeader.js"
Cohesion: 0.25
Nodes (3): Breadcrumb(), TataTertibPage(), tataTertib

### Community 13 - "CLAUDE.md — Frontend Website Rules"
Cohesion: 0.17
Nodes (11): Always Do First, Anti-Generic Guardrails, Brand Assets, CLAUDE.md — Frontend Website Rules, graphify, Hard Rules, Local Server, Output Defaults (+3 more)

### Community 16 - "compilerOptions"
Cohesion: 0.50
Nodes (3): compilerOptions, baseUrl, paths

### Community 17 - "serve.mjs"
Cohesion: 0.50
Nodes (3): __dirname, MIME, server

### Community 20 - "BeritaDetailPage.js"
Cohesion: 0.33
Nodes (3): asset(), BeritaDetailPage(), berita

### Community 21 - "KebijakanWarekPage.js"
Cohesion: 0.33
Nodes (3): isFileAvailable(), KebijakanWarekPage(), kebijakanWarek

### Community 22 - "Expo Animation Recipes"
Cohesion: 0.06
Nodes (33): Bottom sheet you can drag to dismiss, Collapsing header on scroll, Expo Animation Recipes, Firing something once at a threshold, Keyboard-synced UI, List entrances, Press feedback, Screen transitions (Expo Router) (+25 more)

### Community 23 - "Animation Recipes"
Cohesion: 0.06
Nodes (31): Accordion / collapse, Animation Recipes, Button press, Drag to dismiss, Drawer / sheet, Dropdown, popover, menu, select, Hold to confirm, Masking a crossfade that won't settle (+23 more)

### Community 24 - "Animation Standards Reference"
Cohesion: 0.07
Nodes (26): Aggressive Escalation Triggers, Guidelines, Initial Response, Operating Posture, Part 1 — Findings table (REQUIRED), Part 2 — Verdict (REQUIRED), Remedial Preference Hierarchy, Required Output Format (+18 more)

### Community 25 - "Animation Audit Playbook"
Cohesion: 0.08
Nodes (22): 1. Purpose & frequency, 2. Easing & duration, 3. Physicality & origin, 4. Interruptibility, 5. Performance, 6. Accessibility, 7. Cohesion & tokens, 8. Missed opportunities (+14 more)

### Community 26 - "Write Swift"
Cohesion: 0.09
Nodes (22): 10. ARC and object lifetime, 11. Testing — Swift Testing by default, 12. Macros, 13. Logging and debugging, 14. Unsafe code and interop, 15. Modern syntax you should be using, 16. Migrating an existing codebase to Swift 6, 1. Model data with value types (+14 more)

### Community 27 - "Apple Design"
Cohesion: 0.09
Nodes (21): 10. Gesture design details (the "feel" checklist), 11. Frame-level smoothness, 12. Materials & depth — translucency conveys hierarchy, 13. Multimodal feedback — motion + sound + haptics, 14. Reduced motion & accessibility, 15. Typography — optical sizing, tracking, leading, 16. Design foundations — the eight principles, 17. Process (+13 more)

### Community 28 - "Appendix B - Canonical Sources (read these before reinventing)"
Cohesion: 0.09
Nodes (21): APPENDICES - Real Source-Backed Reference Material, Appendix A - Install Commands per Design System, Appendix B - Canonical Sources (read these before reinventing), Appendix C - Apple Liquid Glass: Honest Web Approximation, Apple Liquid Glass (Apple platforms only), Atlassian, Bootstrap, Carbon (+13 more)

### Community 29 - "The Fixes"
Cohesion: 0.09
Nodes (21): 10. Status bar color doesn't match, 11. Right in Chrome, wrong on phone, 1. Hover state stuck after tap, 2. Gray/blue flash on tap, 3. Layout has the wrong height, 4. Page zooms into the input, 5. Tap feels laggy, 6. Pull-to-refresh hijacks scroll (+13 more)

### Community 30 - "Prototyping Variants"
Cohesion: 0.10
Nodes (19): Behavior contract, Markup, Reference wiring, Rules, Styles, The Picker, Hard Rules, Initial Response (+11 more)

### Community 31 - "Glossary"
Cohesion: 0.11
Nodes (18): Animation Vocabulary, Easing — how speed changes over an animation, Entrances & Exits — how elements appear and disappear, Examples, Feedback & Interaction — responding to the user's actions, Glossary, Initial Response, Instructions (+10 more)

### Community 32 - "Finding Animation Opportunities"
Cohesion: 0.12
Nodes (16): 1. Frequency — how often will a user see this?, 2. Purpose — why does this animate?, 3. Speed — can it stay inside budget?, 4. Function — does motion help or hinder here?, Finding Animation Opportunities, Hard Rules, Initial Response, Operating Posture (+8 more)

### Community 33 - "Working With Sonner"
Cohesion: 0.15
Nodes (11): Functions, Sonner API Reference, `toast()` options, `<Toaster />`, Initial Response, Picking the right call, Recipes, Setup (+3 more)

### Community 34 - "4. DESIGN ENGINEERING DIRECTIVES (Bias Correction)"
Cohesion: 0.17
Nodes (12): 4.10 Quotes & Testimonials, 4.11 Page Theme Lock (Light / Dark Mode Consistency), 4.1 Typography, 4.2 Color Calibration, 4.3 Layout Diversification, 4.4 Materiality, Shadows, Cards, 4.5 Interactive UI States, 4.6 Data & Form Patterns (+4 more)

### Community 35 - "The list"
Cohesion: 0.18
Nodes (10): Charts, Common mismatches to catch, How to use this, Initial Response, Interaction & performance, Motion & visuals, Picking The Right Library, State & styling (+2 more)

### Community 36 - "10. REFERENCE VOCABULARY (Pattern Names the Agent Should Know)"
Cohesion: 0.20
Nodes (10): 10. REFERENCE VOCABULARY (Pattern Names the Agent Should Know), Animation Library Choice, Cards & Containers, Galleries & Media, Hero Paradigms, Layout & Grids, Micro-Interactions & Effects, Navigation & Menus (+2 more)

### Community 37 - "Design Engineering"
Cohesion: 0.22
Nodes (8): Accessibility, Design Engineering, Initial Response, prefers-reduced-motion, Review Checklist, Review Format (Required), Stagger Animations, Touch device hover states

### Community 38 - "9. AI TELLS (Forbidden Patterns)"
Cohesion: 0.25
Nodes (8): 9.A Visual & CSS, 9. AI TELLS (Forbidden Patterns), 9.B Typography, 9.C Layout & Spacing, 9.D Content & Data ("Jane Doe" Effect), 9.E External Resources & Components, 9.F Production-Test Tells (banned outright), 9.G EM-DASH BAN (the single most-violated Tell)

### Community 39 - "Component Building Principles"
Cohesion: 0.25
Nodes (8): Animate enter states with @starting-style, Buttons must feel responsive, Component Building Principles, Make popovers origin-aware, Never animate from scale(0), Tooltips: skip delay on subsequent hovers, Use blur to mask imperfect transitions, Use CSS transitions over keyframes for interruptible UI

### Community 40 - "11. REDESIGN PROTOCOL"
Cohesion: 0.29
Nodes (7): 11.A Detect the Mode (first action), 11.B Audit Before Touching, 11.C Preservation Rules, 11.D Modernisation Levers (priority order), 11.E Decision Tree: Targeted Evolution vs Full Redesign, 11.F What Never Changes Silently, 11. REDESIGN PROTOCOL

### Community 41 - "3. DEFAULT ARCHITECTURE & CONVENTIONS"
Cohesion: 0.29
Nodes (7): 3.A Stack, 3.B State, 3.C Icons, 3.D Emoji Policy, 3. DEFAULT ARCHITECTURE & CONVENTIONS, 3.E Responsiveness & Layout Mechanics, 3.F Dependency Verification (mandatory)

### Community 42 - "6. PERFORMANCE & ACCESSIBILITY GUARDRAILS"
Cohesion: 0.29
Nodes (7): 6.A Hardware Acceleration, 6.B Reduced Motion (mandatory), 6.C Dark Mode (mandatory for any consumer-facing page), 6.D Core Web Vitals Targets, 6.E DOM Cost, 6.F Z-Index Restraint, 6. PERFORMANCE & ACCESSIBILITY GUARDRAILS

### Community 43 - "tasteskill: Anti-Slop Frontend Skill"
Cohesion: 0.33
Nodes (6): 13. OUT OF SCOPE, 14. FINAL PRE-FLIGHT CHECK, 2.A When to reach for a real design system (use official packages), 2.B When the brief is an aesthetic, not a system, 2. BRIEF → DESIGN SYSTEM MAP, tasteskill: Anti-Slop Frontend Skill

### Community 44 - "The Animation Decision Framework"
Cohesion: 0.33
Nodes (6): 1. Should this animate at all?, 2. What is the purpose?, 3. What easing should it use?, 4. How fast should it be?, Perceived performance, The Animation Decision Framework

### Community 45 - "clip-path for Animation"
Cohesion: 0.33
Nodes (6): clip-path for Animation, Comparison sliders, Hold-to-delete pattern, Image reveals on scroll, Tabs with perfect color transitions, The inset shape

### Community 46 - "Performance Rules"
Cohesion: 0.33
Nodes (6): CSS animations beat JS under load, CSS variables are inheritable, Framer Motion hardware acceleration caveat, Only animate transform and opacity, Performance Rules, Use WAAPI for programmatic CSS animations

### Community 47 - "Gesture and Drag Interactions"
Cohesion: 0.33
Nodes (6): Damping at boundaries, Friction instead of hard stops, Gesture and Drag Interactions, Momentum-based dismissal, Multi-touch protection, Pointer capture for drag

### Community 48 - "0. BRIEF INFERENCE (Read the Room Before Anything Else)"
Cohesion: 0.40
Nodes (5): 0.A Read these signals first, 0.B Output a one-line "Design Read" before generating, 0. BRIEF INFERENCE (Read the Room Before Anything Else), 0.C If the brief is ambiguous, ask one question, do not guess, 0.D Anti-Default Discipline

### Community 49 - "12. THE BLOCK LIBRARY (Contract - Implementations Land Here Iteratively)"
Cohesion: 0.40
Nodes (5): 12.A File Location, 12.B Required Frontmatter, 12.C Required Body Sections, 12.D Block-Library Discipline, 12. THE BLOCK LIBRARY (Contract - Implementations Land Here Iteratively)

### Community 50 - "5. CONTEXT-AWARE PROACTIVITY"
Cohesion: 0.40
Nodes (5): 5.A Sticky-Stack - Canonical Skeleton, 5.B Horizontal-Pan - Canonical Skeleton, 5.C Scroll-Reveal Stagger - Canonical Skeleton (lighter alternative), 5. CONTEXT-AWARE PROACTIVITY, 5.D Forbidden Animation Patterns

### Community 51 - "8. DARK MODE PROTOCOL"
Cohesion: 0.40
Nodes (5): 8.A Token Strategy (pick one, stick to it), 8.B Do Not Prescribe Specific Colors Here, 8.C Default Mode, 8.D Test in Both Modes Before Finishing, 8. DARK MODE PROTOCOL

### Community 52 - "CSS Transform Mastery"
Cohesion: 0.40
Nodes (5): 3D transforms for depth, CSS Transform Mastery, scale() scales children too, transform-origin, translateY with percentages

### Community 53 - "The Sonner Principles (Building Loved Components)"
Cohesion: 0.40
Nodes (5): Asymmetric enter/exit timing, Cohesion matters, Review your work the next day, The opacity + height combination, The Sonner Principles (Building Loved Components)

### Community 54 - "Spring Animations"
Cohesion: 0.40
Nodes (5): Interruptibility advantage, Spring Animations, Spring-based mouse interactions, Spring configuration, When to use springs

### Community 55 - "1. THE THREE DIALS (Core Configuration)"
Cohesion: 0.50
Nodes (4): 1.A Dial Inference (design read → dial values), 1.B Use-Case Presets, 1.C How the Dials Drive Output, 1. THE THREE DIALS (Core Configuration)

### Community 56 - "7. DIAL DEFINITIONS (Technical Reference)"
Cohesion: 0.50
Nodes (4): 7. DIAL DEFINITIONS (Technical Reference), DESIGN_VARIANCE (Level 1-10), MOTION_INTENSITY (Level 1-10), VISUAL_DENSITY (Level 1-10)

### Community 57 - "Core Philosophy"
Cohesion: 0.50
Nodes (4): Beauty is leverage, Core Philosophy, Taste is trained, not innate, Unseen details compound

### Community 58 - "Debugging Animations"
Cohesion: 0.50
Nodes (4): Debugging Animations, Frame-by-frame inspection, Slow motion testing, Test on real devices

## Knowledge Gaps
- **410 isolated node(s):** `nunito`, `dmSans`, `metadata`, `SOCIALS`, `SIZES` (+405 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 459 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@phosphor-icons/react` connect `RektorWarekPage.js` to `Header.js`, `BeritaPage.js`, `GaleriDetailPage.js`, `KebijakanRektorPage.js`, `package.json`, `HubungiKamiPage.js`, `common.js`, `PageHeader.js`, `KebijakanWarekPage.js`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `tasteskill: Anti-Slop Frontend Skill` connect `tasteskill: Anti-Slop Frontend Skill` to `4. DESIGN ENGINEERING DIRECTIVES (Bias Correction)`, `10. REFERENCE VOCABULARY (Pattern Names the Agent Should Know)`, `9. AI TELLS (Forbidden Patterns)`, `11. REDESIGN PROTOCOL`, `3. DEFAULT ARCHITECTURE & CONVENTIONS`, `6. PERFORMANCE & ACCESSIBILITY GUARDRAILS`, `0. BRIEF INFERENCE (Read the Room Before Anything Else)`, `12. THE BLOCK LIBRARY (Contract - Implementations Land Here Iteratively)`, `5. CONTEXT-AWARE PROACTIVITY`, `8. DARK MODE PROTOCOL`, `1. THE THREE DIALS (Core Configuration)`, `7. DIAL DEFINITIONS (Technical Reference)`, `Appendix B - Canonical Sources (read these before reinventing)`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `react` connect `RektorWarekPage.js` to `Header.js`, `BeritaPage.js`, `GaleriDetailPage.js`, `KebijakanRektorPage.js`, `package.json`, `HubungiKamiPage.js`, `common.js`, `PageHeader.js`, `KebijakanWarekPage.js`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `nunito`, `dmSans`, `metadata` to the rest of the system?**
  _410 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `GaleriDetailPage.js` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Should `HubungiKamiPage.js` be split into smaller, more focused modules?**
  _Cohesion score 0.13405797101449277 - nodes in this community are weakly interconnected._