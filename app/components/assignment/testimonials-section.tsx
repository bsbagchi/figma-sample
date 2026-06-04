import Image from "next/image";
import { HighlightGreen, UnderlineAccent } from "./text-decorations";
import { sectionHeadingClassName } from "./typography-classes";

type TestimonialAvatar = {
  src: string;
  /** Desktop (lg+) scatter size */
  size: number;
  className: string;
  mobileSize: number;
  tabletSize: number;
};

const LEFT_AVATARS: TestimonialAvatar[] = [
  {
    src: "/profiles/Ellipse 261.png",
    size: 84,
    mobileSize: 56,
    tabletSize: 68,
    className: "-left-10 top-[5%]",
  },
  {
    src: "/profiles/Ellipse 256.png",
    size: 56,
    mobileSize: 44,
    tabletSize: 52,
    className: "-left-[10%] top-28",
  },
  {
    src: "/profiles/Ellipse 257.png",
    size: 156,
    mobileSize: 88,
    tabletSize: 112,
    className: "left-10 top-[26%]",
  },
  {
    src: "/profiles/Ellipse 259.png",
    size: 80,
    mobileSize: 52,
    tabletSize: 64,
    className: "-left-[6%] bottom-20",
  },
];

const RIGHT_AVATARS: TestimonialAvatar[] = [
  {
    src: "/profiles/Ellipse 258.png",
    size: 120,
    mobileSize: 64,
    tabletSize: 80,
    className: "-right-40 top-[4%]",
  },
  {
    src: "/profiles/Ellipse 260.png",
    size: 72,
    mobileSize: 52,
    tabletSize: 60,
    className: "right-10 top-[20%]",
  },
  {
    src: "/profiles/Ellipse 262.png",
    size: 64,
    mobileSize: 48,
    tabletSize: 56,
    className: "right-20 top-[48%]",
  },
  {
    src: "/profiles/Ellipse 255.png",
    size: 200,
    mobileSize: 96,
    tabletSize: 128,
    className: "-right-50 bottom-[8%]",
  },
];

const ALL_AVATARS = [...LEFT_AVATARS, ...RIGHT_AVATARS];

const TESTIMONIAL_QUOTE =
  "Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable";

function TestimonialAvatarImage({
  src,
  size,
}: {
  src: string;
  size: number;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className="size-full rounded-full border-[3px] border-white object-cover shadow-[0_4px_16px_rgba(0,0,0,0.12)] md:border-4"
    />
  );
}

/** lg+ — scattered Figma layout */
function TestimonialAvatarScatter({ src, size, className }: TestimonialAvatar) {
  return (
    <div
      className={`absolute hidden lg:block ${className}`}
      style={{ width: size, height: size }}
    >
      <TestimonialAvatarImage src={src} size={size} />
    </div>
  );
}

function TestimonialAvatarGroup({
  avatars,
  variant,
}: {
  avatars: TestimonialAvatar[];
  variant: "mobile" | "tablet";
}) {
  const sizeKey = variant === "mobile" ? "mobileSize" : "tabletSize";

  return (
    <ul className="m-0 flex list-none flex-wrap items-end justify-center gap-3 p-0 sm:gap-4 md:justify-center md:gap-5">
      {avatars.map((avatar) => {
        const size = avatar[sizeKey];
        return (
          <li key={avatar.src} className="shrink-0">
            <div style={{ width: size, height: size }}>
              <TestimonialAvatarImage src={avatar.src} size={size} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/** Mobile + tablet — two partner columns after quote */
function TestimonialAvatarPartners() {
  return (
    <div className="mt-10 w-full lg:hidden md:mt-12" aria-label="Customer profiles">
      {/* Mobile: stacked rows, smaller */}
      <div className="mx-auto max-w-md md:hidden">
        <div className="grid grid-cols-2 gap-6">
          <TestimonialAvatarGroup avatars={LEFT_AVATARS} variant="mobile" />
          <TestimonialAvatarGroup avatars={RIGHT_AVATARS} variant="mobile" />
        </div>
      </div>

      {/* Tablet: side-by-side partner columns */}
      <div className="mx-auto hidden max-w-2xl md:grid md:grid-cols-2 md:gap-10">
        <TestimonialAvatarGroup avatars={LEFT_AVATARS} variant="tablet" />
        <TestimonialAvatarGroup avatars={RIGHT_AVATARS} variant="tablet" />
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-x-clip py-16 md:py-24 lg:py-32 xl:py-40">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-[54px]">
        <h2 className={`m-0 text-center ${sectionHeadingClassName}`}>
          <HighlightGreen>What</HighlightGreen> our customer
          <br />
          says <UnderlineAccent>About Us</UnderlineAccent>
        </h2>

        <div className="relative mx-auto mt-10 w-full max-w-[1180px] sm:mt-12 md:mt-16 lg:mt-20 lg:min-h-[480px]">
          {ALL_AVATARS.map((avatar) => (
            <TestimonialAvatarScatter key={`scatter-${avatar.src}`} {...avatar} />
          ))}

          <blockquote className="relative z-10 m-0 mx-auto w-full max-w-[720px] rounded-[28px] border-[4px] border-testimonial-border bg-testimonial-surface px-8 py-10 text-center sm:px-10 sm:py-12 md:rounded-[36px] md:px-14 md:py-14 lg:rounded-[40px] lg:px-16 lg:py-16">
            <span
              className="pointer-events-none absolute top-4 left-5 font-description text-4xl leading-none font-black text-testimonial-quote sm:top-5 sm:left-6 sm:text-5xl md:top-6 md:left-8 md:text-6xl lg:text-7xl"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="relative z-10 m-0 font-description text-base leading-7 font-normal text-black sm:text-lg sm:leading-8 md:text-xl md:leading-9 lg:text-2xl lg:leading-10">
              {TESTIMONIAL_QUOTE}
            </p>
            <span
              className="pointer-events-none absolute right-5 bottom-4 font-description text-4xl leading-none font-black text-testimonial-quote sm:right-6 sm:bottom-5 sm:text-5xl md:right-8 md:bottom-6 md:text-6xl lg:text-7xl"
              aria-hidden
            >
              &rdquo;
            </span>
          </blockquote>

          <TestimonialAvatarPartners />
        </div>
      </div>
    </section>
  );
}
