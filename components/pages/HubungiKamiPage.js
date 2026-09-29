"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { common } from "@/dictionaries/common";
import { hubungiKami } from "@/dictionaries/hubungi-kami";
import { formatPhoneDisplay, waLink } from "@/lib/contact";
import {
  EnvelopeSimple,
  MapPin,
  Phone,
  Copy,
  Check,
  InstagramLogo,
  FacebookLogo,
  XLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const SOCIALS = [
  { key: "instagram", Icon: InstagramLogo, label: "Instagram", href: "https://www.instagram.com/official_unpak/" },
  { key: "facebook", Icon: FacebookLogo, label: "Facebook", href: "https://www.facebook.com/unpak/?locale=id_ID" },
  { key: "x", Icon: XLogo, label: "X", href: "https://x.com/official_unpak" },
  { key: "linkedin", Icon: LinkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/school/unpak/home/" },
  { key: "youtube", Icon: YoutubeLogo, label: "YouTube", href: "https://www.youtube.com/c/UNPAKTV" },
];

function CopyButton({ value, copyLabel, copiedLabel }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : copyLabel}
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-white/50 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {copied ? <Check size={14} weight="bold" aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
    </button>
  );
}

function ContactCard({ icon: Icon, label, note, children }) {
  return (
    <div className="bg-grain rounded-2xl bg-ink-deep p-6 shadow-floating sm:p-7">
      <div className="flex items-center gap-2 text-white/90">
        <Icon size={18} weight="bold" aria-hidden="true" className="text-accent" />
        <h3 className="font-heading text-sm font-bold">{label}</h3>
      </div>
      <div className="mt-5 flex flex-col gap-2">{children}</div>
      {note && <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-6 text-white/50">{note}</p>}
    </div>
  );
}

export default function HubungiKamiPage({ locale = "id" }) {
  const t = hubungiKami[locale];
  const c = common[locale];

  return (
    <>
      <PageHeader breadcrumb={t.breadcrumb} eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-center font-heading text-sm font-bold text-secondary">{t.sectionEyebrow}</p>
          <h2 className="mt-2 text-center font-heading text-2xl font-extrabold text-ink sm:text-3xl">
            {t.sectionTitle}
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ContactCard icon={EnvelopeSimple} label={t.cards.email.label} note={t.cards.email.note}>
              <div className="flex items-center justify-between gap-2 rounded-lg bg-white/5 px-3 py-2.5">
                <a
                  href={`mailto:${c.footer.email}`}
                  className="truncate font-heading text-[15px] font-bold text-white transition-colors duration-200 hover:text-accent"
                >
                  {c.footer.email}
                </a>
                <CopyButton value={c.footer.email} copyLabel={t.copyLabel} copiedLabel={t.copiedLabel} />
              </div>
            </ContactCard>

            <ContactCard icon={MapPin} label={t.cards.office.label} note={t.cards.office.note}>
              <div className="flex items-start justify-between gap-2 rounded-lg bg-white/5 px-3 py-2.5">
                <p className="text-sm leading-6 text-white/85">{c.footer.address}</p>
                <CopyButton value={c.footer.address} copyLabel={t.copyLabel} copiedLabel={t.copiedLabel} />
              </div>
            </ContactCard>

            <ContactCard icon={Phone} label={t.cards.phone.label} note={t.cards.phone.note}>
              {c.footer.phones.map((number) => {
                const display = formatPhoneDisplay(number);
                return (
                  <div
                    key={number}
                    className="flex items-center justify-between gap-2 rounded-lg bg-white/5 px-3 py-2.5"
                  >
                    <a
                      href={waLink(number)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate font-heading text-[15px] font-bold text-white transition-colors duration-200 hover:text-accent"
                    >
                      {display}
                    </a>
                    <CopyButton value={display} copyLabel={t.copyLabel} copiedLabel={t.copiedLabel} />
                  </div>
                );
              })}
            </ContactCard>
          </div>

          <div className="mt-14 border-t border-border pt-10 text-center">
            <h3 className="font-heading text-lg font-extrabold text-ink sm:text-xl">{t.onlineHeading}</h3>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {SOCIALS.map(({ key, Icon, label, href }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-bold text-ink/70 transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
