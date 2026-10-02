"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import SectionTabs from "@/components/layout/SectionTabs";
import FileNoticeModal from "@/components/ui/FileNoticeModal";
import { DownloadSimple, FileDoc, FilePdf, Info } from "@phosphor-icons/react";
import { formulir } from "@/dictionaries/formulir";
import { common } from "@/dictionaries/common";

function isFileAvailable(href) {
  return Boolean(href) && href !== "#";
}

export default function FormulirPage({ locale }) {
  const t = formulir[locale];
  const nav = common[locale].nav;
  const notice = common[locale].fileNotice;
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
        <div className="flex flex-col gap-10">
          {t.groups.map((group) => (
            <div key={group.category}>
              <h2 className="font-heading text-lg font-extrabold text-ink">{group.category}</h2>
              {group.files.length === 0 ? (
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-6 shadow-card">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Info size={20} weight="bold" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-6 text-ink/60">{t.emptyGroupMessage}</p>
                </div>
              ) : (
              <div className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface shadow-card">
                {group.files.map((file) => {
                  const Icon = file.type === "DOCX" ? FileDoc : FilePdf;
                  return (
                    <div
                      key={file.name}
                      className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon size={22} aria-hidden="true" />
                        </span>
                        <div>
                          <p className="font-heading text-[15px] font-extrabold text-ink">{file.name}</p>
                          <p className="mt-0.5 text-xs text-ink/40">
                            {file.type} · {file.size}
                          </p>
                        </div>
                      </div>
                      {isFileAvailable(file.href) ? (
                        <a
                          href={file.href}
                          className="flex shrink-0 cursor-pointer items-center justify-center gap-2 w-full sm:w-auto rounded-full border border-border-strong px-5 py-2.5 font-heading text-sm font-bold text-ink transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:self-center"
                        >
                          <DownloadSimple size={16} aria-hidden="true" />
                          {t.downloadLabel}
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setNoticeOpen(true)}
                          className="flex shrink-0 cursor-pointer items-center justify-center gap-2 w-full sm:w-auto rounded-full border border-border-strong px-5 py-2.5 font-heading text-sm font-bold text-ink transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:self-center"
                        >
                          <DownloadSimple size={16} aria-hidden="true" />
                          {t.downloadLabel}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
              )}
            </div>
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
