import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import ActivityPhotoGrid from "@/components/ui/ActivityPhotoGrid";
import { ArrowLeft, CalendarBlank, Images } from "@phosphor-icons/react/dist/ssr";
import { galeri } from "@/dictionaries/galeri";

const asset = (name) => `/brand_assets/${encodeURIComponent(name)}`;

export default function GaleriDetailPage({ locale, slug }) {
  const t = galeri[locale];
  const base = locale === "en" ? "/en" : "";

  const item = t.items.find((entry) => entry.slug === slug);
  if (!item) notFound();

  const breadcrumb = [
    { label: locale === "en" ? "Home" : "Beranda", href: base || "/" },
    { label: t.title, href: `${base}/galeri` },
    { label: item.title },
  ];

  const related = t.items.filter((entry) => entry.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader breadcrumb={breadcrumb} eyebrow={item.category} title={item.title} subtitle={item.excerpt} />

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="flex items-center gap-1.5 text-xs text-ink/40">
          <CalendarBlank size={14} aria-hidden="true" />
          {item.date}
        </div>

        <div className="mt-6">
          <ActivityPhotoGrid photos={item.photos} />
        </div>

        <div className="mt-8 flex flex-col gap-5">
          {item.body.map((paragraph, index) => (
            <p key={index} className="text-[15px] leading-7 text-ink/70">
              {paragraph}
            </p>
          ))}
        </div>

        <Link
          href={`${base}/galeri`}
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
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={asset(entry.photos[0].file)}
                      alt={entry.photos[0].caption}
                      fill
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 font-heading text-xs font-bold text-white">
                      {entry.category}
                    </span>
                    {entry.photos.length > 1 && (
                      <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-ink-deep/70 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                        <Images size={13} aria-hidden="true" />
                        {t.photoCountLabel(entry.photos.length)}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-1.5 text-xs text-ink/50">
                      <CalendarBlank size={14} aria-hidden="true" />
                      {entry.date}
                    </div>
                    <h3 className="mt-2.5 font-heading text-[15px] font-extrabold leading-snug text-ink">
                      <Link
                        href={`${base}/galeri/${entry.slug}`}
                        className="rounded transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {entry.title}
                      </Link>
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-6 text-ink/60">{entry.excerpt}</p>
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
