import Image from "next/image";
import { sectionDescriptionClassName, sectionHeadingClassName } from "./typography-classes";

const CURVE_ARROW_WIDTH = 178;
const CURVE_ARROW_HEIGHT = 123;

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: ["About", "Studio", "Services", "Careers"],
  },
  {
    title: "Terms & Policies",
    links: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
  },
  {
    title: "Follow Us",
    links: ["LinkedIn", "Instagram", "Twitter"],
  },
  {
    title: "Contact & Address",
    links: ["hello@elementum.com", "123 Strategy Lane", "London, UK"],
  },
] as const;

function FooterWaveAccent() {
  return (
    <div
      className="pointer-events-none absolute top-0 left-1/2 flex -translate-x-1/2 items-end gap-2  "
      aria-hidden
    >
      {[0, 1].map((index) => (
        <Image
          key={index}
          src="/vectors/curvearrow.svg"
          width={CURVE_ARROW_WIDTH}
          height={CURVE_ARROW_HEIGHT}
          alt=""
          className="h-14 w-auto md:h-16 lg:h-[72px]"
        />
      ))}
    </div>
  );
}

function FooterPurpleAccent() {
  return (
    <div
      className="pointer-events-none absolute right-0 bottom-0 z-0 hidden size-40 overflow-hidden md:block lg:size-56 xl:size-72"
      aria-hidden
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 112 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 84C28 58 44 36 68 36C92 36 108 58 108 84H28Z"
          fill="#7b61ff"
        />
      </svg>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="relative w-full overflow-x-clip bg-footer-mint">
      <FooterWaveAccent />
      <FooterPurpleAccent />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-20 pb-10 md:px-8 md:pt-24 lg:px-12 lg:pt-28 xl:px-[54px]">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className={`m-0 ${sectionHeadingClassName}`}>
            Subscribe to our newsletter
          </h2>
          <p
            className={`mx-auto mt-6 max-w-[560px] ${sectionDescriptionClassName}`}
          >
            Get fearless insights and stories from our team of strategists,
            designers, and researchers—delivered to your inbox.
          </p>
          <button
            type="button"
            className="mt-8 cursor-pointer rounded-full border-0 bg-black px-10 py-3.5 font-description text-base leading-6 font-normal text-white transition-opacity hover:opacity-85 md:mt-10 md:px-12 md:py-4 md:text-lg"
          >
            Subscription
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-black/10 pt-12 md:mt-20 md:grid-cols-4 md:gap-10 lg:mt-24 lg:pt-14">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="m-0 font-description text-sm leading-5 font-medium text-black md:text-base">
                {column.title}
              </h3>
              <ul className="m-0 mt-4 list-none space-y-2 p-0">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-description text-sm leading-6 font-normal text-black/70 no-underline transition-opacity hover:opacity-70 md:text-[15px]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="m-0 mt-12 text-center font-description text-sm leading-6 font-normal text-black/60 md:mt-16 md:text-base">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
}
