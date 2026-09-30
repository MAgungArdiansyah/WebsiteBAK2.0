"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SectionTabs from "@/components/layout/SectionTabs";
import FileNoticeModal from "@/components/ui/FileNoticeModal";
import { CalendarBlank, FileText, ArrowRight, MagnifyingGlass, X, FileX, Info } from "@phosphor-icons/react";
import { kebijakanWarek } from "@/dictionaries/kebijakan-warek";
import { NAV_ITEMS, common } from "@/dictionaries/common";

function isFileAvailable(href) {
  return Boolean(href) && href !== "#";
}

export default function KebijakanWarekPage({ locale }) {
  const t = kebijakanWarek[locale];
  const nav = common[locale].nav;
  const notice = common[locale].fileNotice;
  const [activeCategory, setActiveCategory] = useState(t.filterAll);
  const [searchQuery, setSearchQuery] = useState("");
  const [noticeOpen, setNoticeOpen] = useState(false);
  const base = locale === "en" ? "/en" : "";

  const breadcrumb = [
    { label: nav.beranda, href: base || "/" },
    { label: nav.kebijakan, href: `${base}/kebijakan/kebijakan-rektor` },
    { label: t.title },
  ];

  const kebijakanChildren = NAV_ITEMS.find((item) => item.key === "kebijakan").children;
  const tabs = kebijakanChildren.map((child) => ({ label: nav[child.key], href: `${base}${child.href}` }));

  const hasData = t.items.length > 0;
  const filters = [t.filterAll, ...t.categories];
  const query = searchQuery.trim().toLowerCase();
  const items = t.items.filter((item) => {
    const matchesCategory = activeCategory === t.filterAll || item.category === activeCategory;
    const matchesQuery =
      !query || item.title.toLowerCase().includes(query) || item.docNumber.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <PageHeader breadcrumb={breadcrumb} eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <SectionTabs items={tabs} />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        {hasData && (
          <>
            <div className="relative">
              <MagnifyingGlass
                size={18}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/35"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label={t.searchPlaceholder}
                className="w-full rounded-full border border-border-strong bg-surface py-3 pl-11 pr-11 font-heading text-sm text-ink placeholder:text-ink/35 transition-colors duration-200 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear"
                  className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-ink/40 transition-colors duration-200 hover:bg-surface-elevated hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <X size={14} aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => {
                  const active = filter === activeCategory;
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveCategory(filter)}
                      aria-pressed={active}
                      className={`cursor-pointer rounded-full border px-4 py-2 font-heading text-sm font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                        active
                          ? "border-primary bg-primary text-white"
                          : "border-border-strong text-ink/70 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs font-bold text-ink/40">{t.searchResultsLabel(items.length)}</p>
            </div>
          </>
        )}

        {!hasData ? (
          <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-6 py-16 text-center shadow-card">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Info size={28} weight="bold" aria-hidden="true" />
            </span>
            <p className="font-heading text-base font-extrabold text-ink">{t.emptyState.title}</p>
            <p className="max-w-sm text-sm leading-6 text-ink/60">{t.emptyState.message}</p>
          </div>
        ) : items.length === 0 ? (
          <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-6 py-16 text-center shadow-card">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <FileX size={28} weight="bold" aria-hidden="true" />
            </span>
            <p className="font-heading text-base font-extrabold text-ink">{t.noResults.title}</p>
            <p className="max-w-sm text-sm leading-6 text-ink/60">{t.noResults.message}</p>
          </div>
        ) : (
          <div className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface shadow-card">
            {items.map((item) => (
              <article
                key={item.docNumber}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
              >
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileText size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 font-heading text-xs font-bold text-secondary">
                        {item.category}
                      </span>
                    </div>
                    <span className="mt-1 block text-xs text-ink/40">{item.docNumber}</span>
                    <h3 className="mt-1 font-heading text-base font-extrabold text-ink">{item.title}</h3>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-ink/40">
                      <CalendarBlank size={13} aria-hidden="true" />
                      {t.issuedLabel} {item.date}
                    </div>
                  </div>
                </div>
                {isFileAvailable(item.href) ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 cursor-pointer items-center justify-center gap-1.5 w-full sm:w-auto rounded-full border border-border-strong px-5 py-2.5 font-heading text-sm font-bold text-ink transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:self-center"
                  >
                    {t.viewLabel}
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setNoticeOpen(true)}
                    className="flex shrink-0 cursor-pointer items-center justify-center gap-1.5 w-full sm:w-auto rounded-full border border-border-strong px-5 py-2.5 font-heading text-sm font-bold text-ink transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:self-center"
                  >
                    {t.viewLabel}
                    <ArrowRight size={14} aria-hidden="true" />
                  </button>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      <FileNoticeModal
        open={noticeOpen}
        onClose={() => setNoticeOpen(false)}
        title={notice.title}
        message={notice.message}
        closeLabel={notice.closeLabel}
      />
    </>
  );
}
