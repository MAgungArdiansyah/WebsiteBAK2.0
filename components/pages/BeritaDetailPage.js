import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import SectionTabs from "@/components/layout/SectionTabs";
import { ArrowLeft, ArrowRight, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { berita } from "@/dictionaries/berita";
import { NAV_ITEMS, common } from "@/dictionaries/common";

const asset = (name) => `/brand_assets/${encodeURIComponent(name)}`;

export default function BeritaDetailPage({ locale, slug }) {
  const t = berita[locale];
  const nav = common[locale].nav;
  const base = locale === "en" ? "/en" : "";

  const item = t.items.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const breadcrumb = [
    { label: nav.beranda, href: base || "/" },
    { label: nav.pengumuman, href: `${base}/pengumuman/berita` },
    { label: nav.berita, href: `${base}/pengumuman/berita` },
    { label: item.title },
  ];

  const pengumumanChildren = NAV_ITEMS.find((navItem) => navItem.key === "pengumuman").children;
  const tabs = pengumumanChildren.map((child) =>
    child.external
      ? { label: nav[child.key], href: child.href, external: true }
      : { label: nav[child.key], href: `${base}${child.href}` }
  );

  const related = t.items.filter((entry) => entry.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader breadcrumb={breadcrumb} eyebrow={item.category} title={item.title} subtitle={item.excerpt} />
      <SectionTabs items={tabs} />

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="flex items-center gap-1.5 text-xs text-ink/40">
          <CalendarBlank size={14} aria-hidden="true" />
          {item.date}
        </div>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl shadow-card">
          {item.images?.[0] ? (
            <Image
              src={asset(item.images[0])}
              alt=""
              fill
              sizes="(min-width: 1024px) 60vw, 90vw"
              className="object-cover"
              priority
            />
          ) : (
            <Image
              src={`https://placehold.co/1200x675/25283d/ffffff.png?text=${encodeURIComponent(item.category)}`}
              alt=""
              fill
              unoptimized
              sizes="(min-width: 1024px) 60vw, 90vw"
              className="object-cover"
            />
          )}
        </div>

        <div className="mt-8 flex flex-col gap-5">
          {item.body.map((paragraph, index) => (
            <p key={index} className="text-[15px] leading-7 text-ink/70">
              {paragraph}
            </p>
          ))}
        </div>

        {item.images?.length > 1 && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {item.images.slice(1).map((image) => (
              <div key={image} className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-card">
                <Image src={asset(image)} alt="" fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover" />
              </div>
            ))}
          </div>
        )}

        <Link
          href={`${base}/pengumuman/berita`}
          className="group/back mt-10 flex w-fit cursor-pointer items-center gap-1.5 rounded font-heading text-sm font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-200 group-hover/back:-translate-x-0.5"
            aria-hidden="true"
          />
          {t.backLabel}
        </Link>
      </article>

      {related.length > 0 && (
        <section className="bg-surface-elevated">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="font-heading text-xl font-extrabold text-ink">{t.relatedHeading}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((entry) => (
                <article
                  key={entry.slug}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {entry.images?.[0] ? (
                      <Image
                        src={asset(entry.images[0])}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 30vw, 90vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={`https://placehold.co/640x400/25283d/ffffff.png?text=${encodeURIComponent(entry.category)}`}
                        alt=""
                        fill
                        unoptimized
                        sizes="(min-width: 1024px) 30vw, 90vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 font-heading text-xs font-bold text-white">
                      {entry.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-1.5 text-xs text-ink/50">
                      <CalendarBlank size={14} aria-hidden="true" />
                      {entry.date}
                    </div>
                    <h3 className="mt-2.5 font-heading text-[15px] font-extrabold leading-snug text-ink">
                      <Link
                        href={`${base}/pengumuman/berita/${entry.slug}`}
                        className="rounded transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {entry.title}
                      </Link>
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-6 text-ink/60">{entry.excerpt}</p>
                    <Link
                      href={`${base}/pengumuman/berita/${entry.slug}`}
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
          </div>
        </section>
      )}
    </>
  );
}
