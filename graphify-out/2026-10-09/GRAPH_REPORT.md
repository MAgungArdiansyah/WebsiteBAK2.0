# Graph Report - claudewebtest  (2026-10-02)

## Corpus Check
- 78 files · ~5,827,825 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 242 nodes · 438 edges · 20 communities (17 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fa2a754e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Header.js
- KodeEtikPage.js
- GaleriDetailPage.js
- KebijakanRektorPage.js
- package.json
- PageHeader.js
- HubungiKamiPage.js
- TataTertibPage.js
- LayananAdministratifPage.js
- RektorWarekPage.js
- Universitas Pakuan Logo (App Icon)
- CLAUDE.md — Frontend Website Rules
- FormulirPage.js
- SopPage.js
- compilerOptions
- serve.mjs
- next.config.mjs
- BeritaPage.js
- KebijakanWarekPage.js

## God Nodes (most connected - your core abstractions)
1. `@phosphor-icons/react` - 18 edges
2. `react` - 16 edges
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

## Communities (20 total, 2 thin omitted)

### Community 0 - "Header.js"
Cohesion: 0.20
Nodes (8): dmSans, metadata, nunito, counterpartPath(), getLocale(), Header(), localizeHref(), MobileNavItem()

### Community 2 - "KodeEtikPage.js"
Cohesion: 0.16
Nodes (9): isFileAvailable(), KodeEtikPage(), Accordion(), ActivityPhotoGrid(), asset(), FileNoticeModal(), kodeEtik, @phosphor-icons/react (+1 more)

### Community 3 - "GaleriDetailPage.js"
Cohesion: 0.15
Nodes (8): asset(), GaleriDetailPage(), asset(), GaleriPage(), galeri, MONTHS, parseActivityDate(), sortByDateDesc()

### Community 4 - "KebijakanRektorPage.js"
Cohesion: 0.33
Nodes (3): isFileAvailable(), KebijakanRektorPage(), kebijakanRektor

### Community 5 - "package.json"
Cohesion: 0.06
Nodes (34): author, dependencies, next, @phosphor-icons/react, puppeteer, react, react-dom, description (+26 more)

### Community 6 - "PageHeader.js"
Cohesion: 0.20
Nodes (7): Breadcrumb(), PageHeader(), asset(), PersonCard(), SIZES, TentangKamiPage(), tentangKami

### Community 7 - "HubungiKamiPage.js"
Cohesion: 0.16
Nodes (11): Footer(), getLocale(), localizeHref(), CopyButton(), HubungiKamiPage(), SOCIALS, common, NAV_ITEMS (+3 more)

### Community 9 - "TataTertibPage.js"
Cohesion: 0.33
Nodes (3): isFileAvailable(), TataTertibPage(), tataTertib

### Community 10 - "LayananAdministratifPage.js"
Cohesion: 0.17
Nodes (6): SectionTabs(), asset(), BeritaDetailPage(), isLinkAvailable(), LayananAdministratifPage(), layananAdministratif

### Community 11 - "RektorWarekPage.js"
Cohesion: 0.33
Nodes (3): isFileAvailable(), RektorWarekPage(), rektorWarek

### Community 13 - "CLAUDE.md — Frontend Website Rules"
Cohesion: 0.17
Nodes (11): Always Do First, Anti-Generic Guardrails, Brand Assets, CLAUDE.md — Frontend Website Rules, graphify, Hard Rules, Local Server, Output Defaults (+3 more)

### Community 14 - "FormulirPage.js"
Cohesion: 0.33
Nodes (3): FormulirPage(), isFileAvailable(), formulir

### Community 15 - "SopPage.js"
Cohesion: 0.33
Nodes (3): isFileAvailable(), SopPage(), sop

### Community 16 - "compilerOptions"
Cohesion: 0.50
Nodes (3): compilerOptions, baseUrl, paths

### Community 17 - "serve.mjs"
Cohesion: 0.50
Nodes (3): __dirname, MIME, server

### Community 20 - "BeritaPage.js"
Cohesion: 0.17
Nodes (6): asset(), BerandaPage(), asset(), BeritaPage(), beranda, berita

### Community 21 - "KebijakanWarekPage.js"
Cohesion: 0.33
Nodes (3): isFileAvailable(), KebijakanWarekPage(), kebijakanWarek

## Knowledge Gaps
- **52 isolated node(s):** `nunito`, `dmSans`, `metadata`, `SOCIALS`, `SIZES` (+47 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 94 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@phosphor-icons/react` connect `KodeEtikPage.js` to `Header.js`, `GaleriDetailPage.js`, `KebijakanRektorPage.js`, `package.json`, `HubungiKamiPage.js`, `TataTertibPage.js`, `LayananAdministratifPage.js`, `RektorWarekPage.js`, `FormulirPage.js`, `SopPage.js`, `BeritaPage.js`, `KebijakanWarekPage.js`?**
  _High betweenness centrality (0.199) - this node is a cross-community bridge._
- **Why does `react` connect `KodeEtikPage.js` to `Header.js`, `GaleriDetailPage.js`, `KebijakanRektorPage.js`, `package.json`, `HubungiKamiPage.js`, `TataTertibPage.js`, `LayananAdministratifPage.js`, `RektorWarekPage.js`, `FormulirPage.js`, `SopPage.js`, `BeritaPage.js`, `KebijakanWarekPage.js`?**
  _High betweenness centrality (0.164) - this node is a cross-community bridge._
- **Why does `PageHeader()` connect `PageHeader.js` to `KodeEtikPage.js`, `GaleriDetailPage.js`, `KebijakanRektorPage.js`, `HubungiKamiPage.js`, `TataTertibPage.js`, `LayananAdministratifPage.js`, `RektorWarekPage.js`, `FormulirPage.js`, `SopPage.js`, `BeritaPage.js`, `KebijakanWarekPage.js`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **What connects `nunito`, `dmSans`, `metadata` to the rest of the system?**
  _52 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `GaleriDetailPage.js` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._