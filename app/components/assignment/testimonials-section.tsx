import Image from "next/image";
import { HighlightGreen, UnderlineAccent } from "./text-decorations";
import { sectionHeadingClassName } from "./typography-classes";

const SCATTERED_AVATARS = [
  { src: "/profiles/Ellipse 255.png", size: 80, className: "top-0 left-[8%] md:left-[12%]" },
  { src: "/profiles/Ellipse 256.png", size: 56, className: "top-8 right-[6%] md:right-[10%]" },
  { src: "/profiles/Ellipse 258.png", size: 72, className: "bottom-4 left-[4%] md:left-[8%]" },
  { src: "/profiles/Ellipse 259.png", size: 64, className: "top-1/2 -left-2 -translate-y-1/2 md:left-0" },
  { src: "/profiles/Ellipse 260.png", size: 96, className: "right-[18%] bottom-0 md:right-[22%]" },
  { src: "/profiles/Ellipse 261.png", size: 52, className: "top-[18%] right-[28%]" },
] as const;

export function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-x-clip py-16 md:py-24 lg:py-32 xl:py-40">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-[54px]">
        <h2
          className={`m-0 text-center ${sectionHeadingClassName}`}
        >
          <HighlightGreen>What</HighlightGreen> our customer says{" "}
          <UnderlineAccent>About Us</UnderlineAccent>
        </h2>

        <div className="relative mx-auto mt-14 min-h-[320px] w-full max-w-[1100px] md:mt-20 md:min-h-[380px] lg:mt-24 lg:min-h-[420px]">
          {SCATTERED_AVATARS.map((avatar) => (
            <div
              key={avatar.src}
              className={`absolute hidden sm:block ${avatar.className}`}
              style={{ width: avatar.size, height: avatar.size }}
            >
              <Image
                src={avatar.src}
                alt=""
                width={avatar.size}
                height={avatar.size}
                className="size-full rounded-full border-2 border-white object-cover shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
              />
            </div>
          ))}

          <blockquote className="relative z-10 m-0 rounded-[32px] bg-accent-green/80 px-8 py-10 md:rounded-[40px] md:px-14 md:py-14 lg:rounded-[48px] lg:px-20 lg:py-16">
            <span
              className="font-description text-5xl leading-none font-normal text-black/20 md:text-6xl lg:text-7xl"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="m-0 mt-2 font-description text-lg leading-8 font-normal text-black md:text-xl md:leading-9 lg:text-2xl lg:leading-10">
              We are a team of strategists, designers communicators, researchers.
              Togeather, we belive that progress only happens when you refuse to
              play things safe. Together we accelerate change for brands that
              dare to move forward.
            </p>
            <span
              className="mt-4 block text-right font-description text-5xl leading-none font-normal text-black/20 md:text-6xl lg:text-7xl"
              aria-hidden
            >
              &rdquo;
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
