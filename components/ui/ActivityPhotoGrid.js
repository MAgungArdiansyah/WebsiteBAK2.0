"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";

const asset = (name) => `/brand_assets/${encodeURIComponent(name)}`;

export default function ActivityPhotoGrid({ photos }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    function onKeydown(e) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + photos.length) % photos.length);
    }
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeydown);
    };
  }, [lightboxIndex, photos.length]);

  const activePhoto = lightboxIndex === null ? null : photos[lightboxIndex];

  return (
    <>
      <div className={`grid gap-4 ${photos.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
        {photos.map((photo, index) => (
          <button
            key={photo.file}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className={`group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-border shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              photos.length === 1 ? "sm:aspect-[16/9]" : ""
            }`}
          >
            <Image
              src={asset(photo.file)}
              alt={photo.caption}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-ink-deep/90 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
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
                  setLightboxIndex((i) => (i - 1 + photos.length) % photos.length);
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
                  setLightboxIndex((i) => (i + 1) % photos.length);
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
              aria-label={activePhoto.caption}
              className="w-full max-w-2xl overflow-hidden rounded-xl bg-surface shadow-floating"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-ink-deep">
                <Image
                  src={asset(activePhoto.file)}
                  alt={activePhoto.caption}
                  width={1600}
                  height={1200}
                  className="max-h-[65vh] w-full object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="font-heading text-sm font-bold text-ink">{activePhoto.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
