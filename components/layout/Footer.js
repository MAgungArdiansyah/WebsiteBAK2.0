"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowSquareOut,
  EnvelopeSimple,
  MapPin,
  Phone,
  InstagramLogo,
  FacebookLogo,
  XLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { NAV_ITEMS, common } from "@/dictionaries/common";
import { formatPhoneDisplay, waLink } from "@/lib/contact";

function getLocale(pathname) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "id";
}

function localizeHref(href, locale) {
  if (locale !== "en") return href;
  return href === "/" ? "/en" : `/en${href}`;
}

export default function Footer() {
  const pathname = usePathname() || "/";
  const locale = getLocale(pathname);
  const t = common[locale];

  return (
    <footer className="bg-grain bg-ink-deep text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.1fr]">
          <div>
            <div className="inline-flex items-center rounded-lg bg-white px-3 py-2">
              <Image
                src="/brand_assets/logo_bak.svg"
                alt={`${t.orgName} (${t.orgShort})`}
                width={164}
                height={27}
                className="h-7 w-auto"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">{t.footer.tagline}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/official_unpak/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram BAK Universitas Pakuan"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <InstagramLogo size={17} />
              </a>
              <a
                href="https://www.facebook.com/unpak/?locale=id_ID"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook BAK Universitas Pakuan"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FacebookLogo size={17} />
              </a>
              <a
                href="https://x.com/official_unpak"
                target="_blank"
                rel="noreferrer"
                aria-label="X BAK Universitas Pakuan"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <XLogo size={17} />
              </a>
              <a
                href="https://www.linkedin.com/school/unpak/home/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn BAK Universitas Pakuan"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <LinkedinLogo size={17} />
              </a>
              <a
                href="https://www.youtube.com/c/UNPAKTV"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube Universitas Pakuan"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <YoutubeLogo size={17} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold text-white/50">
              {t.footer.menuHeading}
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/75">
              {NAV_ITEMS.map((link) => (
                <li key={link.key}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {t.nav[link.key]}
                      <ArrowSquareOut size={12} aria-hidden="true" className="shrink-0 text-white/40" />
                    </a>
                  ) : (
                    <Link
                      href={localizeHref(link.href, locale)}
                      className="rounded transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {t.nav[link.key]}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-sm font-bold text-white/50">
              {t.footer.contactHeading}
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/75">
              <li className="flex gap-2.5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex gap-2.5">
                <EnvelopeSimple size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${t.footer.email}`} className="hover:text-white">
                  {t.footer.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  {t.footer.phones.map((number) => (
                    <a
                      key={number}
                      href={waLink(number)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit rounded transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {formatPhoneDisplay(number)}
                    </a>
                  ))}
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm font-bold text-white/40 font-heading">
              {t.footer.hoursHeading}
            </p>
            {t.footer.hours.map((line) => (
              <p key={line} className="mt-1 text-sm text-white/75">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.orgName} — {t.university}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
