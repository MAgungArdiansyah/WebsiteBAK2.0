"use client";

import { useEffect, useState } from "react";
import { X, FileX } from "@phosphor-icons/react";

const AUTO_CLOSE_MS = 2000;
const EXIT_DURATION_MS = 200;

export default function FileNoticeModal({ open, onClose, title, message, closeLabel }) {
  const [render, setRender] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setRender(true);
      const raf = requestAnimationFrame(() => setVisible(true));
      const autoClose = setTimeout(onClose, AUTO_CLOSE_MS);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(autoClose);
      };
    }
    setVisible(false);
    const unmount = setTimeout(() => setRender(false), EXIT_DURATION_MS);
    return () => clearTimeout(unmount);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    function onKeydown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, [open, onClose]);

  if (!render) return null;

  return (
    <div
      role="presentation"
      onClick={onClose}
      className={`fixed inset-0 z-100 flex items-center justify-center bg-ink-deep/50 px-4 backdrop-blur-sm transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="file-notice-title"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-sm rounded-2xl border border-border bg-surface p-6 text-center shadow-floating transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-95 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-ink/40 transition-colors duration-200 hover:bg-surface-elevated hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X size={16} aria-hidden="true" />
        </button>

        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
          <FileX size={28} weight="bold" aria-hidden="true" />
        </span>

        <h2 id="file-notice-title" className="mt-4 font-heading text-lg font-extrabold text-ink">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-ink/60">{message}</p>
      </div>
    </div>
  );
}
