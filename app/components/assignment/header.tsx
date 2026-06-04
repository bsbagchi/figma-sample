import { NAV_LINKS } from "./nav-links";
import { HeaderMenu } from "./header-menu";

export function Header() {
  return (
    <header className="relative z-40 h-16 w-full border-b border-transparent bg-white md:h-[72px] lg:h-[88px]">
      <div className="flex h-full w-full items-center justify-between px-5 md:px-8 lg:px-12">
        <a
          href="#home"
          className="shrink-0 font-hero text-xl font-normal text-black no-underline transition-opacity hover:opacity-70 md:text-2xl"
        >
          Elementum
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 lg:flex"
          aria-label="Main navigation"
        >
          <ul className="m-0 flex list-none items-center gap-8 p-0 lg:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] font-normal text-black no-underline transition-opacity hover:opacity-60 lg:text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <HeaderMenu />
      </div>
    </header>
  );
}
