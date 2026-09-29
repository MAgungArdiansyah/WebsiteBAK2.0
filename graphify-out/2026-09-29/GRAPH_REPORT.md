# Graph Report - claudewebtest  (2026-09-29)

## Corpus Check
- 78 files · ~7,808,219 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 234 nodes · 414 edges · 21 communities (12 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e7eeb500`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Header.js
- en/pengumuman/berita/page.js
- PageHeader.js
- react
- KebijakanRektorPage
- package.json
- BerandaPage.js
- HubungiKamiPage.js
- en/kebijakan/kode-etik-mahasiswa/page.js
- en/kebijakan/tata-tertib/page.js
- LayananAdministratifPage.js
- en/pengumuman/rektor-warek/page.js
- Universitas Pakuan Logo (App Icon)
- CLAUDE.md — Frontend Website Rules
- FormulirPage.js
- SopPage.js
- compilerOptions
- serve.mjs
- next.config.mjs
- en/pengumuman/berita/[slug]/page.js

## God Nodes (most connected - your core abstractions)
1. `@phosphor-icons/react` - 16 edges
2. `PageHeader()` - 15 edges
3. `common` - 14 edges
4. `react` - 14 edges
5. `SectionTabs()` - 11 edges
6. `NAV_ITEMS` - 10 edges
7. `CLAUDE.md — Frontend Website Rules` - 9 edges
8. `Header()` - 8 edges
9. `FileNoticeModal()` - 7 edges
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

## Communities (21 total, 8 thin omitted)

### Community 0 - "Header.js"
Cohesion: 0.20
Nodes (8): dmSans, metadata, nunito, counterpartPath(), getLocale(), Header(), localizeHref(), MobileNavItem()

### Community 2 - "PageHeader.js"
Cohesion: 0.15
Nodes (14): Breadcrumb(), PageHeader(), SectionTabs(), isFileAvailable(), KebijakanWarekPage(), berita, common, NAV_ITEMS (+6 more)

### Community 3 - "react"
Cohesion: 0.14
Nodes (8): asset(), GaleriDetailPage(), asset(), GaleriPage(), ActivityPhotoGrid(), asset(), galeri, react

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (34): author, dependencies, next, @phosphor-icons/react, puppeteer, react, react-dom, description (+26 more)

### Community 6 - "BerandaPage.js"
Cohesion: 0.14
Nodes (9): asset(), BerandaPage(), asset(), PersonCard(), SIZES, TentangKamiPage(), Accordion(), beranda (+1 more)

### Community 7 - "HubungiKamiPage.js"
Cohesion: 0.18
Nodes (9): Footer(), getLocale(), localizeHref(), CopyButton(), HubungiKamiPage(), SOCIALS, hubungiKami, formatPhoneDisplay() (+1 more)

### Community 10 - "LayananAdministratifPage.js"
Cohesion: 0.33
Nodes (3): isLinkAvailable(), LayananAdministratifPage(), layananAdministratif

### Community 13 - "CLAUDE.md — Frontend Website Rules"
Cohesion: 0.17
Nodes (11): Always Do First, Anti-Generic Guardrails, Brand Assets, CLAUDE.md — Frontend Website Rules, graphify, Hard Rules, Local Server, Output Defaults (+3 more)

### Community 14 - "FormulirPage.js"
Cohesion: 0.24
Nodes (4): FormulirPage(), isFileAvailable(), FileNoticeModal(), formulir

### Community 15 - "SopPage.js"
Cohesion: 0.33
Nodes (3): isFileAvailable(), SopPage(), sop

### Community 16 - "compilerOptions"
Cohesion: 0.50
Nodes (3): compilerOptions, baseUrl, paths

### Community 17 - "serve.mjs"
Cohesion: 0.50
Nodes (3): __dirname, MIME, server

## Knowledge Gaps
- **51 isolated node(s):** `nunito`, `dmSans`, `metadata`, `SOCIALS`, `SIZES` (+46 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 93 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@phosphor-icons/react` connect `PageHeader.js` to `Header.js`, `react`, `package.json`, `BerandaPage.js`, `HubungiKamiPage.js`, `LayananAdministratifPage.js`, `FormulirPage.js`, `SopPage.js`?**
  _High betweenness centrality (0.197) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `Header.js`, `PageHeader.js`, `package.json`, `BerandaPage.js`, `HubungiKamiPage.js`, `LayananAdministratifPage.js`, `FormulirPage.js`, `SopPage.js`?**
  _High betweenness centrality (0.149) - this node is a cross-community bridge._
- **Why does `PageHeader()` connect `PageHeader.js` to `react`, `BerandaPage.js`, `HubungiKamiPage.js`, `LayananAdministratifPage.js`, `FormulirPage.js`, `SopPage.js`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **What connects `nunito`, `dmSans`, `metadata` to the rest of the system?**
  _51 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.13852813852813853 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Should `BerandaPage.js` be split into smaller, more focused modules?**
  _Cohesion score 0.13852813852813853 - nodes in this community are weakly interconnected._