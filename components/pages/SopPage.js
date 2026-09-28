"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SectionTabs from "@/components/layout/SectionTabs";
import { CalendarBlank, DownloadSimple, FileText } from "@phosphor-icons/react";
import { sop } from "@/dictionaries/sop";
import { common } from "@/dictionaries/common";

export default function SopPage({ locale }) {
  const t = sop[locale];
  const nav = common[locale].nav;
  const [activeCategory, setActiveCategory] = useState(t.filterAll);
  const base = locale === "en" ? "/en" : "";

  const breadcrumb = [
    { label: nav.beranda, href: base || "/" },
    { label: nav.pelayanan, href: `${base}/pelayanan/sop` },
    { label: t.title },
  ];

  const tabs = [
    { label: nav.sop, href: `${base}/pelayanan/sop` },
    { label: nav.formulir, href: `${base}/pelayanan/formulir` },
  ];

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
            <article key={item.docNumber} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
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
                  <p className="mt-1 max-w-xl text-sm leading-6 text-ink/60">{item.description}</p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-ink/40">
                    <CalendarBlank size={13} aria-hidden="true" />
                    {t.updatedLabel} {item.updated}
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="flex shrink-0 cursor-pointer items-center justify-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-white shadow-card transition-[background-color,transform] duration-200 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 active:bg-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:self-center"
              >
                <DownloadSimple size={16} aria-hidden="true" />
                {t.downloadLabel}
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
