import PageHeader from "@/components/layout/PageHeader";
import SectionTabs from "@/components/layout/SectionTabs";
import { CalendarBlank, FileText, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { rektorWarek } from "@/dictionaries/rektor-warek";
import { NAV_ITEMS, common } from "@/dictionaries/common";

export default function RektorWarekPage({ locale }) {
  const t = rektorWarek[locale];
  const nav = common[locale].nav;
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

  return (
    <>
      <PageHeader breadcrumb={breadcrumb} eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <SectionTabs items={tabs} />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface shadow-card">
          {t.items.map((item) => (
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
                      {item.issuer}
                    </span>
                    <span className="text-xs text-ink/40">{item.docNumber}</span>
                  </div>
                  <h3 className="mt-1.5 font-heading text-base font-extrabold text-ink">{item.title}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-ink/40">
                    <CalendarBlank size={13} aria-hidden="true" />
                    {t.updatedLabel} {item.date}
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="flex shrink-0 cursor-pointer items-center justify-center gap-1.5 self-start rounded-full border border-border-strong px-5 py-2.5 font-heading text-sm font-bold text-ink transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:self-center"
              >
                {t.viewLabel}
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
