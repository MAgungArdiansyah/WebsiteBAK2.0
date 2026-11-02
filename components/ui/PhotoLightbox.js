"use client";

import { useEffect } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";

const asset = (name) => `/brand_assets/${encodeURIComponent(name)}`;

export default function PhotoLightbox({ photos, index, onClose, onNavigate }) {
  const open = index !== null && index !== undefined;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKeydown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
    }
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeydown);
    };
  }, [open, index, photos.length, onClose, onNavigate]);

  if (!open) return null;

  const activePhoto = photos[index];

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-ink-deep/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <X size={20} />
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + photos.length) % photos.length);
            }}
            aria-label="Previous photo"
            className="fixed left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:left-6"
          >
            <CaretLeft size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % photos.length);
            }}
            aria-label="Next photo"
            className="fixed right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:right-6"
          >
            <CaretRight size={20} />
          </button>
        </>
      )}

      <div className="flex min-h-full items-center justify-center p-4 py-20 sm:py-24">
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption || undefined}
          className="w-full max-w-2xl overflow-hidden rounded-xl bg-surface shadow-floating"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-ink-deep">
            <Image
              src={asset(activePhoto.file)}
              alt={activePhoto.caption || ""}
              width={1600}
              height={1200}
              className="max-h-[65vh] w-full object-contain"
              sizes="90vw"
              priority
            />
          </div>
          {activePhoto.caption && (
            <div className="p-5 sm:p-6">
              <p className="font-heading text-sm font-bold text-ink">{activePhoto.caption}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
