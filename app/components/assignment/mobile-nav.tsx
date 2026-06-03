"use client";

import { useEffect } from "react";
import { NAV_LINKS } from "./nav-links";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={onClose}
      />
      <nav
        id="mobile-nav"
        className={`fixed top-0 right-0 z-50 flex h-full w-[min(320px,85vw)] flex-col bg-white shadow-[-8px_0_32px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between border-b border-black/5 px-5">
          <span className="text-lg font-semibold text-black">Elementum</span>
          <button
            type="button"
            className="cursor-pointer border-0 bg-transparent p-2 text-[28px] leading-none text-black"
            aria-label="Close menu"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <ul className="m-0 flex list-none flex-col gap-1 p-0 py-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-5 py-3 text-[17px] font-normal text-black no-underline hover:bg-black/[0.04]"
                onClick={onClose}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
