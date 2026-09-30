"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowSquareOut, CaretDown, List, X, Translate } from "@phosphor-icons/react";
import { NAV_ITEMS, common } from "@/dictionaries/common";

function getLocale(pathname) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "id";
}

function localizeHref(href, locale) {
  if (locale !== "en") return href;
  return href === "/" ? "/en" : `/en${href}`;
}

function counterpartPath(pathname, locale) {
  if (locale === "en") {
    const stripped = pathname.replace(/^\/en/, "");
    return stripped === "" ? "/" : stripped;
  }
  return pathname === "/" ? "/en" : `/en${pathname}`;
}

export default function Header() {
  const pathname = usePathname() || "/";
  const locale = getLocale(pathname);
  const t = common[locale];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileRendered, setMobileRendered] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      setMobileRendered(true);
      const raf = requestAnimationFrame(() => setMobileVisible(true));
      return () => cancelAnimationFrame(raf);
    }
    setMobileVisible(false);
    const timer = setTimeout(() => setMobileRendered(false), 200);
    return () => clearTimeout(timer);
  }, [mobileOpen]);

  useEffect(() => {
    function onClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    function onKeydown(e) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeydown);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const startY = window.scrollY;
    function onScroll() {
      if (Math.abs(window.scrollY - startY) > 24) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  const isActive = (href) => {
    const target = localizeHref(href, locale);
    return pathname === target || pathname.startsWith(target + "/");
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href={localizeHref("/", locale)}
          className="flex shrink-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Image
            src="/brand_assets/logo_bak.svg"
            alt={`${t.orgName} (${t.orgShort})`}
            width={164}
            height={27}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </Link>

        <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const label = t.nav[item.key];
            const active = isActive(item.href);
            if (!item.children) {
              return (
                <Link
                  key={item.key}
                  href={localizeHref(item.href, locale)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-2 font-heading text-[15px] font-bold transition-[color,background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    active
                      ? "text-primary"
                      : "text-ink/80 hover:bg-surface-elevated hover:text-primary"
                  }`}
                >
                  {label}
                </Link>
              );
            }
            const open = openDropdown === item.key;
            return (
              <div key={item.key} className="relative">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="menu"
                  onClick={() => setOpenDropdown(open ? null : item.key)}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 font-heading text-[15px] font-bold transition-[color,background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    active || open
                      ? "text-primary"
                      : "text-ink/80 hover:bg-surface-elevated hover:text-primary"
                  }`}
                >
                  {label}
                  <CaretDown
                    size={13}
                    weight="bold"
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${open ? "-rotate-180" : ""}`}
                  />
                </button>
                <div
                  role="menu"
                  className={`absolute left-0 top-full min-w-[15rem] origin-top rounded-lg border border-border bg-surface-floating p-1.5 shadow-floating transition-[opacity,transform] duration-150 ${
                    open
                      ? "translate-y-1 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  {item.children.map((child) =>
                    child.external ? (
                      <a
                        key={child.key}
                        href={child.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-ink/80 transition-colors duration-150 hover:bg-surface-elevated hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {t.nav[child.key]}
                        <ArrowSquareOut size={14} aria-hidden="true" className="shrink-0 text-ink/35" />
                      </a>
                    ) : (
                      <Link
                        key={child.key}
                        href={localizeHref(child.href, locale)}
                        role="menuitem"
                        className="block rounded-md px-3 py-2 text-sm text-ink/80 transition-colors duration-150 hover:bg-surface-elevated hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {t.nav[child.key]}
                      </Link>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={counterpartPath(pathname, locale)}
            className="flex items-center gap-1.5 rounded-full border border-border-strong px-3.5 py-1.5 font-heading text-sm font-bold text-ink/80 transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Translate size={15} aria-hidden="true" />
            {t.langSwitch}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {mobileRendered && (
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full max-h-[calc(100dvh_-_4.5rem)] origin-top overflow-y-auto overscroll-contain border-t border-border bg-surface shadow-floating transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
            mobileVisible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem
                  key={item.key}
                  item={item}
                  label={t.nav[item.key]}
                  t={t}
                  locale={locale}
                  isActive={isActive}
                />
              ))}
            </nav>
            <Link
              href={counterpartPath(pathname, locale)}
              className="mt-3 flex w-fit items-center gap-1.5 rounded-full border border-border-strong px-3.5 py-1.5 font-heading text-sm font-bold text-ink/80"
            >
              <Translate size={15} aria-hidden="true" />
              {t.langSwitch}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileNavItem({ item, label, t, locale, isActive }) {
  const [open, setOpen] = useState(false);
  const active = isActive(item.href);

  if (!item.children) {
    return (
      <Link
        href={localizeHref(item.href, locale)}
        className={`rounded-md px-3 py-2.5 font-heading text-base font-bold ${
          active ? "text-primary" : "text-ink/80"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 font-heading text-base font-bold ${
          active || open ? "text-primary" : "text-ink/80"
        }`}
      >
        {label}
        <CaretDown
          size={13}
          weight="bold"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "-rotate-180" : ""}`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            className={`ml-3 flex flex-col gap-0.5 border-l border-border pl-3 pt-0.5 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.children.map((child) =>
              child.external ? (
                <a
                  key={child.key}
                  href={child.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-ink/70"
                >
                  {t.nav[child.key]}
                  <ArrowSquareOut size={13} aria-hidden="true" className="shrink-0 text-ink/35" />
                </a>
              ) : (
                <Link
                  key={child.key}
                  href={localizeHref(child.href, locale)}
                  className="rounded-md px-3 py-2 text-sm text-ink/70"
                >
                  {t.nav[child.key]}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
