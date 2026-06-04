"use client";

import { useState } from "react";
import { MobileNav } from "./mobile-nav";

function MenuIcon() {
  return (
    <span className="flex w-[26px] flex-col gap-[7px]" aria-hidden>
      <span className="block h-[2px] w-full rounded-full bg-black" />
      <span className="block h-[2px] w-full rounded-full bg-black" />
    </span>
  );
}

export function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-2 lg:hidden"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <MenuIcon />
      </button>

      <div className="hidden w-[26px] lg:block" aria-hidden />

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
