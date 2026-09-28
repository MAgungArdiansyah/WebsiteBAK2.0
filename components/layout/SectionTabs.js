"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowSquareOut } from "@phosphor-icons/react";

export default function SectionTabs({ items }) {
  const pathname = usePathname() || "/";

  return (
    <nav aria-label="Section" className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 sm:px-6">
        {items.map((item) => {
          if (item.external) {
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex shrink-0 items-center gap-1.5 whitespace-nowrap px-4 py-3.5 font-heading text-sm font-bold text-ink/55 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {item.label}
                <ArrowSquareOut size={13} aria-hidden="true" className="text-ink/35" />
              </a>
            );
          }
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`relative shrink-0 whitespace-nowrap px-4 py-3.5 font-heading text-sm font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                active ? "text-primary" : "text-ink/55 hover:text-primary"
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary transition-opacity duration-200 ${
                  active ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
