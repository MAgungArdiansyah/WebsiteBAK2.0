import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarBlank, Clock, Images } from "@phosphor-icons/react/dist/ssr";
import Accordion from "@/components/ui/Accordion";
import { beranda } from "@/dictionaries/beranda";
import { berita } from "@/dictionaries/berita";
import { galeri } from "@/dictionaries/galeri";

const asset = (name) => `/brand_assets/${encodeURIComponent(name)}`;

export default function BerandaPage({ locale }) {
  const t = beranda[locale];
  const base = locale === "en" ? "/en" : "";
  const latestBerita = berita[locale].items.slice(0, 3);
  const g = galeri[locale];
  const latestGaleri = g.items.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-grain relative overflow-hidden bg-ink-deep">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="font-heading text-sm font-bold text-accent">{t.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-xl font-heading text-[2.15rem] font-extrabold leading-[1.15] text-white sm:text-5xl sm:leading-[1.1]">
              {t.hero.headline}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/70">{t.hero.subcopy}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={t.hero.ctaPrimary.href}
                className="cursor-pointer rounded-full bg-primary px-6 py-3 font-heading text-sm font-bold text-white shadow-card transition-[background-color,transform] duration-200 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 active:bg-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep"
              >
                {t.hero.ctaPrimary.label}
              </Link>
              <Link
                href={t.hero.ctaSecondary.href}
                className="cursor-pointer rounded-full border border-white/25 px-6 py-3 font-heading text-sm font-bold text-white transition-colors duration-200 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-deep"
              >
                {t.hero.ctaSecondary.label}
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {t.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-xl font-extrabold text-white sm:text-2xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-white/55">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-floating">
              <Image
                src={asset("Hero section.jpg")}
                alt={t.hero.photoAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[59%_50%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-ink-deep/0 to-ink-deep/0 mix-blend-multiply" aria-hidden="true" />
            </div>

            <div className="absolute -bottom-6 left-4 right-4 flex flex-col gap-2.5 rounded-lg bg-surface-floating p-4 shadow-floating sm:left-6 sm:right-auto sm:min-w-[15rem]">
              {t.hero.chips.map((chip) => (
                <div key={chip.label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock size={17} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading text-xs font-bold text-ink">{chip.label}</p>
                    <p className="text-xs text-ink/60">{chip.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sambutan Kepala BAK */}
      <section className="bg-surface-elevated">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-card">
              <Image
                src={asset("Kepala BAK - Dr Atti Herawati.png")}
                alt={t.sambutan.photoAlt}
                fill
                sizes="(min-width: 1024px) 30vw, 70vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-lg border-4 border-surface-elevated bg-primary sm:block" aria-hidden="true" />
          </div>

          <div>
            <p className="font-heading text-sm font-bold text-secondary">{t.sambutan.eyebrow}</p>
            <p className="mt-5 max-w-xl text-2xl font-light leading-[1.5] text-ink sm:text-[1.75rem]">
              “{t.sambutan.quote}”
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-ink/70">{t.sambutan.body}</p>
            <div className="mt-6">
              <p className="font-heading text-base font-extrabold text-ink">{t.sambutan.name}</p>
              <p className="text-sm text-ink/60">{t.sambutan.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Berita & Pengumuman */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-sm font-bold text-secondary">{t.berita.eyebrow}</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
              {t.berita.heading}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-ink/60">{t.berita.subcopy}</p>
          </div>
          <Link
            href={t.berita.viewAll.href}
            className="group flex w-fit cursor-pointer items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 font-heading text-sm font-bold text-ink transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {t.berita.viewAll.label}
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestBerita.map((item) => (
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
                  {locale === "en" ? "Read more" : "Baca Selengkapnya"}
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Galeri */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-heading text-sm font-bold text-secondary">{t.galeri.eyebrow}</p>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-ink sm:text-3xl">{t.galeri.heading}</h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-ink/60">{t.galeri.subcopy}</p>
            </div>
            <Link
              href={t.galeri.viewAll.href}
              className="group flex w-fit cursor-pointer items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 font-heading text-sm font-bold text-ink transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {t.galeri.viewAll.label}
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestGaleri.map((item) => (
              <article
                key={item.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
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
                      {g.photoCountLabel(item.photos.length)}
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
                    {g.readMore}
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-elevated">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <div className="text-center">
            <p className="font-heading text-sm font-bold text-secondary">{t.faq.eyebrow}</p>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-ink sm:text-3xl">
              {t.faq.heading}
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink/60">{t.faq.subcopy}</p>
          </div>
          <div className="mt-10 rounded-xl border border-border bg-surface px-6 shadow-card sm:px-8">
            <Accordion items={t.faq.items} />
          </div>
        </div>
      </section>
    </>
  );
}
