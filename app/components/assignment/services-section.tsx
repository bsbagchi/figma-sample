import Image from "next/image";
import { CURVE_LAYER_CLASS, Curve2 } from "./curveline";
import { ServiceRowArrow } from "./read-more-link";
import { HighlightGreen, UnderlineAccent } from "./text-decorations";
import { sectionHeadingClassName } from "./typography-classes";

const SERVICES = [
  {
    label: "Office of strategic human capital",
    title: "Collaborative & partnership",
    image: null,
  },
  {
    label: "Office of strategic human capital",
    title: "We talk about our weight",
    image: null,
  },
  {
    label: "Office of strategic human capital",
    title: "Piloting digital confidence",
    image: null,
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full overflow-x-clip py-16 md:py-24 lg:py-28 xl:py-32"
    >
      {/* curve2.svg — same right-0 layer as curveline, above heading */}
      <div
        className={`top-6 sm:top-8 md:top-10 lg:-top-70 ${CURVE_LAYER_CLASS}`}
        aria-hidden
      >
        <Curve2 />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-[54px]">
        <h2
          className={`relative z-10 m-0 max-w-[900px] pt-20 md:pt-24 lg:pt-28 ${sectionHeadingClassName}`}
        >
          What we <HighlightGreen>can</HighlightGreen>{" "}
          <UnderlineAccent>offer</UnderlineAccent> you!
        </h2>

        <ul className="m-0 mt-12 list-none p-0 md:mt-16 lg:mt-20">
          {SERVICES.map((service, index) => (
            <li
              key={service.title}
              className={`grid grid-cols-1 items-center gap-4 border-black/10 py-10 md:grid-cols-[minmax(0,280px)_1fr_auto] md:gap-8 md:py-12 lg:py-14 ${
                index < SERVICES.length - 1 ? "border-b" : ""
              }`}
            >
              <p className="m-0 font-description text-sm leading-5 font-normal text-black/50 md:text-base md:leading-6">
                {service.label}
              </p>

              <div className="relative flex items-center gap-4">
                <p className="m-0 font-hero text-3xl leading-tight font-normal tracking-normal text-black md:text-4xl md:leading-[52px] lg:text-[48px] lg:leading-[64px]">
                  {service.title}
                </p>
                {service.image ? (
                  <div className="relative z-10 -ml-2 size-14 shrink-0 md:size-16 lg:size-[72px]">
                    <Image
                      src={service.image}
                      alt=""
                      width={72}
                      height={72}
                      className="size-full rounded-full border-2 border-white object-cover shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
                    />
                  </div>
                ) : null}
              </div>

              <div className="hidden justify-end md:flex">
                <ServiceRowArrow />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
