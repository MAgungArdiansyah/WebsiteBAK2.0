"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SectionTabs from "@/components/layout/SectionTabs";
import FileNoticeModal from "@/components/ui/FileNoticeModal";
import { Certificate, PaperPlaneTilt } from "@phosphor-icons/react";
import { layananAdministratif } from "@/dictionaries/layanan-administratif";
import { common } from "@/dictionaries/common";

function isLinkAvailable(href) {
  return Boolean(href) && href !== "#";
}

export default function LayananAdministratifPage({ locale }) {
  const t = layananAdministratif[locale];
  const nav = common[locale].nav;
  const notice = common[locale].serviceNotice;
  const [noticeOpen, setNoticeOpen] = useState(false);
  const base = locale === "en" ? "/en" : "";

  const breadcrumb = [
    { label: nav.beranda, href: base || "/" },
    { label: nav.pelayanan, href: `${base}/pelayanan/sop` },
    { label: t.title },
  ];

  const tabs = [
    { label: nav.sop, href: `${base}/pelayanan/sop` },
    { label: nav.formulir, href: `${base}/pelayanan/formulir` },
    { label: nav.layananAdministratif, href: `${base}/pelayanan/layanan-administratif` },
  ];

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
                  <Certificate size={22} aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs text-ink/40">{item.docNumber}</span>
                  <h3 className="mt-1 font-heading text-base font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-1 max-w-xl text-sm leading-6 text-ink/60">{item.description}</p>
                </div>
              </div>
              {isLinkAvailable(item.href) ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 cursor-pointer items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-white shadow-card transition-[background-color,transform] duration-200 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 active:bg-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:self-center"
                >
                  <PaperPlaneTilt size={16} aria-hidden="true" />
                  {t.requestLabel}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setNoticeOpen(true)}
                  className="flex shrink-0 cursor-pointer items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-bold text-white shadow-card transition-[background-color,transform] duration-200 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 active:bg-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:self-center"
                >
                  <PaperPlaneTilt size={16} aria-hidden="true" />
                  {t.requestLabel}
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
