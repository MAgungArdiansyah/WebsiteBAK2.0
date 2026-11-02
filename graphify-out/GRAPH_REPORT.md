# Graph Report - claudewebtest  (2026-11-02)

## Corpus Check
- 80 files · ~6,096,784 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 250 nodes · 458 edges · 23 communities (11 shown, 11 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `805220df`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Header.js
- GaleriDetailPage.js
- KodeEtikPage.js
- GaleriPage.js
- KebijakanRektorPage
- package.json
- BerandaPage.js
- HubungiKamiPage.js
- KodeEtikPage
- TataTertibPage
- BeritaDetailPage.js
- RektorWarekPage
- Universitas Pakuan Logo (App Icon)
- CLAUDE.md — Frontend Website Rules
- FormulirPage
- SopPage
- compilerOptions
- serve.mjs
- next.config.mjs
- BeritaPage
- KebijakanWarekPage
- LayananAdministratifPage

## God Nodes (most connected - your core abstractions)
1. `@phosphor-icons/react` - 18 edges
2. `react` - 18 edges
3. `PageHeader()` - 15 edges
4. `common` - 14 edges
5. `SectionTabs()` - 11 edges
6. `FileNoticeModal()` - 10 edges
7. `NAV_ITEMS` - 10 edges
8. `CLAUDE.md — Frontend Website Rules` - 9 edges
9. `Header()` - 8 edges
10. `Footer()` - 6 edges

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

## Communities (23 total, 11 thin omitted)

### Community 0 - "Header.js"
Cohesion: 0.20
Nodes (8): dmSans, metadata, nunito, counterpartPath(), getLocale(), Header(), localizeHref(), MobileNavItem()

### Community 1 - "GaleriDetailPage.js"
Cohesion: 0.22
Nodes (6): asset(), GaleriDetailPage(), ActivityPhotoGrid(), asset(), asset(), PhotoLightbox()

### Community 2 - "KodeEtikPage.js"
Cohesion: 0.18
Nodes (16): Breadcrumb(), PageHeader(), SectionTabs(), FileNoticeModal(), common, NAV_ITEMS, formulir, kebijakanRektor (+8 more)

### Community 3 - "GaleriPage.js"
Cohesion: 0.22
Nodes (6): asset(), GaleriPage(), galeri, MONTHS, parseActivityDate(), sortByDateDesc()

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (34): author, dependencies, next, @phosphor-icons/react, puppeteer, react, react-dom, description (+26 more)

### Community 6 - "BerandaPage.js"
Cohesion: 0.13
Nodes (10): asset(), BerandaPage(), asset(), PersonCard(), SIZES, TentangKamiPage(), Accordion(), beranda (+2 more)

### Community 7 - "HubungiKamiPage.js"
Cohesion: 0.18
Nodes (9): Footer(), getLocale(), localizeHref(), CopyButton(), HubungiKamiPage(), SOCIALS, hubungiKami, formatPhoneDisplay() (+1 more)

### Community 10 - "BeritaDetailPage.js"
Cohesion: 0.30
Nodes (6): asset(), BeritaDetailPage(), asset(), BeritaHeroImage(), BeritaImageGrid(), toPhotos()

### Community 13 - "CLAUDE.md — Frontend Website Rules"
Cohesion: 0.17
Nodes (11): Always Do First, Anti-Generic Guardrails, Brand Assets, CLAUDE.md — Frontend Website Rules, graphify, Hard Rules, Local Server, Output Defaults (+3 more)

### Community 16 - "compilerOptions"
Cohesion: 0.50
Nodes (3): compilerOptions, baseUrl, paths

### Community 17 - "serve.mjs"
Cohesion: 0.50
Nodes (3): __dirname, MIME, server

## Knowledge Gaps
- **52 isolated node(s):** `nunito`, `dmSans`, `metadata`, `SOCIALS`, `SIZES` (+47 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 94 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `KodeEtikPage.js` to `Header.js`, `GaleriDetailPage.js`, `GaleriPage.js`, `package.json`, `BerandaPage.js`, `HubungiKamiPage.js`, `BeritaDetailPage.js`?**
  _High betweenness centrality (0.202) - this node is a cross-community bridge._
- **Why does `@phosphor-icons/react` connect `KodeEtikPage.js` to `Header.js`, `GaleriDetailPage.js`, `GaleriPage.js`, `package.json`, `BerandaPage.js`, `HubungiKamiPage.js`?**
  _High betweenness centrality (0.175) - this node is a cross-community bridge._
- **Why does `PageHeader()` connect `KodeEtikPage.js` to `GaleriDetailPage.js`, `GaleriPage.js`, `BerandaPage.js`, `HubungiKamiPage.js`, `BeritaDetailPage.js`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **What connects `nunito`, `dmSans`, `metadata` to the rest of the system?**
  _52 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Should `BerandaPage.js` be split into smaller, more focused modules?**
  _Cohesion score 0.12681159420289856 - nodes in this community are weakly interconnected._