"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoLightbox from "@/components/ui/PhotoLightbox";

const asset = (name) => `/brand_assets/${encodeURIComponent(name)}`;

function toPhotos(images) {
  return images.map((file) => ({ file, caption: "" }));
}

export function BeritaHeroImage({ images, category }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const photos = toPhotos(images);
  const hero = images[0];

  return (
    <>
      <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl shadow-card">
        {hero ? (
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            aria-label={category}
            className="group absolute inset-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Image
              src={asset(hero)}
              alt=""
              fill
              sizes="(min-width: 1024px) 60vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </button>
        ) : (
          <Image
            src={`https://placehold.co/1200x675/25283d/ffffff.png?text=${encodeURIComponent(category)}`}
            alt=""
            fill
            unoptimized
            sizes="(min-width: 1024px) 60vw, 90vw"
            className="object-cover"
          />
        )}
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

export function BeritaImageGrid({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const photos = toPhotos(images);
  const extra = images.slice(1);

  if (extra.length === 0) return null;

  return (
    <>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {extra.map((image, i) => (
          <button
            key={image}
            type="button"
            onClick={() => setLightboxIndex(i + 1)}
            className="group relative aspect-[16/9] cursor-pointer overflow-hidden rounded-xl shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Image
              src={asset(image)}
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, 90vw"
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
