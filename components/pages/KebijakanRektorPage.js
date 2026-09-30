"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SectionTabs from "@/components/layout/SectionTabs";
import FileNoticeModal from "@/components/ui/FileNoticeModal";
import { CalendarBlank, FileText, ArrowRight, Info } from "@phosphor-icons/react";
import { kebijakanRektor } from "@/dictionaries/kebijakan-rektor";
import { NAV_ITEMS, common } from "@/dictionaries/common";

function isFileAvailable(href) {
  return Boolean(href) && href !== "#";
}

export default function KebijakanRektorPage({ locale }) {
  const t = kebijakanRektor[locale];
  const nav = common[locale].nav;
  const notice = common[locale].fileNotice;
  const [noticeOpen, setNoticeOpen] = useState(false);
  const base = locale === "en" ? "/en" : "";

  const breadcrumb = [
    { label: nav.beranda, href: base || "/" },
    { label: nav.kebijakan, href: `${base}/kebijakan/kebijakan-rektor` },
    { label: t.title },
  ];

  const kebijakanChildren = NAV_ITEMS.find((item) => item.key === "kebijakan").children;
  const tabs = kebijakanChildren.map((child) => ({ label: nav[child.key], href: `${base}${child.href}` }));

  return (
    <>
      <PageHeader breadcrumb={breadcrumb} eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <SectionTabs items={tabs} />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        {t.items.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-6 py-16 text-center shadow-card">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Info size={28} weight="bold" aria-hidden="true" />
            </span>
            <p className="font-heading text-base font-extrabold text-ink">{t.emptyState.title}</p>
            <p className="max-w-sm text-sm leading-6 text-ink/60">{t.emptyState.message}</p>
          </div>
        ) : (
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
                  <span className="text-xs text-ink/40">{item.docNumber}</span>
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
