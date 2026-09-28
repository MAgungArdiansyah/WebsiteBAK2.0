"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import SectionTabs from "@/components/layout/SectionTabs";
import { CalendarBlank, ArrowRight } from "@phosphor-icons/react";
import { berita } from "@/dictionaries/berita";
import { NAV_ITEMS, common } from "@/dictionaries/common";

export default function BeritaPage({ locale }) {
  const t = berita[locale];
  const nav = common[locale].nav;
  const [activeCategory, setActiveCategory] = useState(t.filterAll);
  const base = locale === "en" ? "/en" : "";

  const breadcrumb = [
    { label: nav.beranda, href: base || "/" },
    { label: nav.pengumuman, href: `${base}/pengumuman/berita` },
    { label: t.title },
  ];

  const pengumumanChildren = NAV_ITEMS.find((item) => item.key === "pengumuman").children;
  const tabs = pengumumanChildren.map((child) =>
    child.external
      ? { label: nav[child.key], href: child.href, external: true }
      : { label: nav[child.key], href: `${base}${child.href}` }
  );

  const filters = [t.filterAll, ...t.categories];
  const items = activeCategory === t.filterAll ? t.items : t.items.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHeader breadcrumb={breadcrumb} eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <SectionTabs items={tabs} />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
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

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={`https://placehold.co/640x400/25283d/ffffff.png?text=${encodeURIComponent(item.category)}`}
                  alt=""
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 font-heading text-xs font-bold text-white">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1.5 text-xs text-ink/50">
                  <CalendarBlank size={14} aria-hidden="true" />
                  {item.date}
                </div>
                <h3 className="mt-2.5 font-heading text-[15px] font-extrabold leading-snug text-ink">
                  <Link
                    href={`${base}/pengumuman/berita/${item.slug}`}
                    className="rounded transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-6 text-ink/60">{item.excerpt}</p>
                <Link
                  href={`${base}/pengumuman/berita/${item.slug}`}
                  className="group/link mt-4 flex w-fit cursor-pointer items-center gap-1.5 font-heading text-sm font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {t.readMore}
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
