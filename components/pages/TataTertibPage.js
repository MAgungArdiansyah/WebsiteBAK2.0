"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SectionTabs from "@/components/layout/SectionTabs";
import FileNoticeModal from "@/components/ui/FileNoticeModal";
import { CalendarBlank, ArrowRight, FileText } from "@phosphor-icons/react";
import { tataTertib } from "@/dictionaries/tata-tertib";
import { NAV_ITEMS, common } from "@/dictionaries/common";

function isFileAvailable(href) {
  return Boolean(href) && href !== "#";
}

export default function TataTertibPage({ locale }) {
  const t = tataTertib[locale];
  const nav = common[locale].nav;
  const notice = common[locale].fileNotice;
  const [activeCategory, setActiveCategory] = useState(t.filterAll);
  const [noticeOpen, setNoticeOpen] = useState(false);
  const base = locale === "en" ? "/en" : "";

  const breadcrumb = [
    { label: nav.beranda, href: base || "/" },
    { label: nav.kebijakan, href: `${base}/kebijakan/kebijakan-rektor` },
    { label: t.title },
  ];

  const kebijakanChildren = NAV_ITEMS.find((item) => item.key === "kebijakan").children;
  const tabs = kebijakanChildren.map((child) => ({ label: nav[child.key], href: `${base}${child.href}` }));

  const filters = [t.filterAll, ...t.categories];
  const items = activeCategory === t.filterAll ? t.items : t.items.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHeader breadcrumb={breadcrumb} eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <SectionTabs items={tabs} />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
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

        <div className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface shadow-card">
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
                    <span className="text-xs text-ink/40">{item.docNumber}</span>
                  </div>
                  <h3 className="mt-1.5 font-heading text-base font-extrabold text-ink">{item.title}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-ink/40">
                    <CalendarBlank size={13} aria-hidden="true" />
                    {t.updatedLabel} {item.updated}
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
