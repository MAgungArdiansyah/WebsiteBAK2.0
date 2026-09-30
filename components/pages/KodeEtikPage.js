"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SectionTabs from "@/components/layout/SectionTabs";
import Accordion from "@/components/ui/Accordion";
import FileNoticeModal from "@/components/ui/FileNoticeModal";
import { DownloadSimple, FileText } from "@phosphor-icons/react";
import { kodeEtik } from "@/dictionaries/kode-etik";
import { NAV_ITEMS, common } from "@/dictionaries/common";

function isFileAvailable(href) {
  return Boolean(href) && href !== "#";
}

export default function KodeEtikPage({ locale }) {
  const t = kodeEtik[locale];
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

  const accordionItems = t.chapters.map((chapter) => ({ q: chapter.title, a: chapter.body }));

  return (
    <>
      <PageHeader breadcrumb={breadcrumb} eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      <SectionTabs items={tabs} />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-start gap-4 rounded-xl border border-border bg-surface-elevated p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileText size={24} aria-hidden="true" />
            </span>
            <div>
              <span className="text-xs text-ink/40">{t.document.docNumber}</span>
              <h2 className="mt-1 font-heading text-lg font-extrabold text-ink">{t.document.title}</h2>
              <p className="mt-1 text-xs text-ink/40">{t.document.updated}</p>
            </div>
          </div>
          {isFileAvailable(t.document.href) ? (
            <a
              href={t.document.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-white shadow-card transition-[background-color,transform] duration-200 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 active:bg-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
            >
              <DownloadSimple size={16} aria-hidden="true" />
              {t.downloadLabel}
            </a>
          ) : (
            <button
              type="button"
              onClick={() => setNoticeOpen(true)}
              className="flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-white shadow-card transition-[background-color,transform] duration-200 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 active:bg-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
            >
              <DownloadSimple size={16} aria-hidden="true" />
              {t.downloadLabel}
            </button>
          )}
        </div>

        <h2 className="mt-12 font-heading text-xl font-extrabold text-ink">{t.chaptersHeading}</h2>
        <div className="mt-5 rounded-xl border border-border bg-surface px-6 shadow-card sm:px-8">
          <Accordion items={accordionItems} defaultOpenIndex={0} />
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
