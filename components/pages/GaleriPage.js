"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { ArrowRight, CalendarBlank, Images, FileX } from "@phosphor-icons/react";
import { galeri } from "@/dictionaries/galeri";

const asset = (name) => `/brand_assets/${encodeURIComponent(name)}`;

export default function GaleriPage({ locale }) {
  const t = galeri[locale];
  const base = locale === "en" ? "/en" : "";
  const [activeCategory, setActiveCategory] = useState(t.filterAll);

  const breadcrumb = [{ label: locale === "en" ? "Home" : "Beranda", href: base || "/" }, { label: t.title }];

  const filters = [t.filterAll, ...t.categories];
  const items = activeCategory === t.filterAll ? t.items : t.items.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHeader breadcrumb={breadcrumb} eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

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

        {items.length === 0 ? (
          <div className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-6 py-16 text-center shadow-card">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <FileX size={28} weight="bold" aria-hidden="true" />
            </span>
            <p className="font-heading text-base font-extrabold text-ink">{t.noResults.title}</p>
            <p className="max-w-sm text-sm leading-6 text-ink/60">{t.noResults.message}</p>
          </div>
        ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={asset(item.photos[0].file)}
                  alt={item.photos[0].caption}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-ink-deep/0 to-ink-deep/0 mix-blend-multiply"
                  aria-hidden="true"
                />
                <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 font-heading text-xs font-bold text-white">
                  {item.category}
                </span>
                {item.photos.length > 1 && (
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-ink-deep/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                    <Images size={13} aria-hidden="true" />
                    {t.photoCountLabel(item.photos.length)}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1.5 text-xs text-ink/50">
                  <CalendarBlank size={14} aria-hidden="true" />
                  {item.date}
                </div>
                <h3 className="mt-2.5 font-heading text-[15px] font-extrabold leading-snug text-ink">
                  <Link
                    href={`${base}/galeri/${item.slug}`}
                    className="rounded transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-6 text-ink/60">{item.excerpt}</p>
                <Link
                  href={`${base}/galeri/${item.slug}`}
                  className="group/link mt-4 flex w-fit cursor-pointer items-center gap-1.5 font-heading text-sm font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {t.readMore}
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
        )}
      </section>
    </>
  );
}
