"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoLightbox from "@/components/ui/PhotoLightbox";

const asset = (name) => `/brand_assets/${encodeURIComponent(name)}`;

export default function ActivityPhotoGrid({ photos }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

      <PhotoLightbox
        photos={photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
