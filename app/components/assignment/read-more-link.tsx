import Image from "next/image";

/** Figma: public/vectors/longarrow.svg — 145×8 */
export const LONG_ARROW_WIDTH = 145;
export const LONG_ARROW_HEIGHT = 8;

type LongArrowProps = {
  className?: string;
};

export function LongArrow({ className = "" }: LongArrowProps) {
  return (
    <Image
      src="/vectors/longarrow.svg"
      width={LONG_ARROW_WIDTH}
      height={LONG_ARROW_HEIGHT}
      alt=""
      aria-hidden
      unoptimized
      className={`h-2 w-auto shrink-0 md:h-2.5 ${className}`}
      style={{ width: "auto", height: "auto" }}
    />
  );
}

export function ReadMoreLink({ href = "#" }: { href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-4 font-description text-base leading-6 font-normal text-black no-underline transition-opacity hover:opacity-70 md:gap-5 md:text-2xl md:leading-9"
    >
      Read more
      <LongArrow className="max-w-[min(145px,40vw)] transition-opacity group-hover:opacity-70 md:max-w-[145px]" />
    </a>
  );
}

/** Shorter longarrow for service rows */
export function ServiceRowArrow() {
  return <LongArrow className="max-w-20 md:max-w-24 lg:max-w-28" />;
}
