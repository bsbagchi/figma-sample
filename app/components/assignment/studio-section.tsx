import Image from "next/image";
import { CURVE_LAYER_CLASS, Curveline } from "./curveline";
import { ReadMoreLink } from "./read-more-link";
import { StudioSquare, StudioTriangle } from "./studio-triangle";
import { HighlightGreen, UnderlineAccent } from "./text-decorations";
import {
  sectionDescriptionClassName,
  sectionHeadingClassName,
} from "./typography-classes";

const STUDIO_IMAGE_TOP = "/content/image 348.png";
const STUDIO_IMAGE_BOTTOM = "/content/image 348.png";

type StudioImageProps = {
  src: string;
  alt: string;
  variant: "top" | "bottom";
};

function StudioImage({ src, alt, variant }: StudioImageProps) {
  const isTop = variant === "top";

  return (
    <div className="relative mx-auto size-64 shrink-0 sm:size-80 md:size-96 lg:mx-0 lg:size-[500px] xl:size-[600px]">
      {isTop ? (
        <StudioSquare className="z-[1]  top-[8%] right-0 w-[42%] max-w-[200px] sm:top-[6%] sm:right-0 sm:max-w-[220px] md:max-w-[240px] lg:top-[5%] lg:-right-20 lg:max-w-[260px] xl:max-w-[260px]" />
      ) : (
        <>
          {/* Behind circle — top-left */}
          <StudioTriangle className="z-[1] -left-5 top-0  w-[38%] max-w-[160px] -rotate-[20deg] sm:max-w-[175px] lg:max-w-[190px]" />
        </>
      )}

      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        sizes="(max-width: 640px) 256px, (max-width: 1024px) 384px, 600px"
        className="relative z-[2] size-full rounded-full object-cover"
      />

      {!isTop ? (
        <StudioTriangle className="z-[3] -bottom-[6%] -right-[8%] w-[42%] max-w-[190px] sm:max-w-[210px] lg:max-w-[230px]" />
      ) : null}
    </div>
  );
}

function StudioGlow() {
  return (
    <div
      className="pointer-events-none absolute top-[4%] left-1/2 z-0 size-48 -translate-x-1/2 rounded-full bg-accent-pink opacity-60 blur-3xl sm:top-[6%] sm:size-64 sm:blur-[80px] md:size-80 lg:top-[8%] lg:size-96 xl:size-[420px] xl:blur-[100px]"
      aria-hidden
    />
  );
}

type StudioBlockProps = {
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageVariant: "top" | "bottom";
  reverse?: boolean;
};

function StudioBlock({
  title,
  description,
  imageSrc,
  imageAlt,
  imageVariant,
  reverse = false,
}: StudioBlockProps) {
  return (
    <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 xl:gap-16">
      <div
        className={`max-w-[640px] lg:max-w-[560px] xl:max-w-[640px] ${reverse ? "lg:order-2" : ""}`}
      >
        <h2 className={`m-0 ${sectionHeadingClassName}`}>{title}</h2>
        <p
          className={`mt-6 mb-0 max-w-[640px] md:mt-8 lg:mt-10 xl:mt-12 ${sectionDescriptionClassName}`}
        >
          {description}
        </p>
        <div className="mt-8 md:mt-10 lg:mt-12">
          <ReadMoreLink />
        </div>
      </div>

      <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
        <StudioImage src={imageSrc} alt={imageAlt} variant={imageVariant} />
      </div>
    </div>
  );
}

type StudioSectionProps = {
  showDecorations?: boolean;
};

export function StudioSection({ showDecorations = true }: StudioSectionProps) {
  return (
    <section
      id="studio"
      className="relative w-full overflow-x-clip py-16 md:py-24 lg:py-28 xl:py-32"
    >
      {showDecorations ? <StudioGlow /> : null}

      <div
        className={`top-[36%] sm:top-[38%] md:top-[40%] lg:top-[35%] ${CURVE_LAYER_CLASS}`}
        aria-hidden
      >
        <Curveline />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-[54px]">
        <div className="flex flex-col gap-20 md:gap-28 lg:gap-36 xl:gap-40">
          <StudioBlock
            title={
              <>
                <UnderlineAccent>Tomorrow</UnderlineAccent> should be
                <br />
                better than <HighlightGreen>today</HighlightGreen>
              </>
            }
            description="We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe."
            imageSrc={STUDIO_IMAGE_TOP}
            imageAlt="Elementum team in a strategy meeting"
            imageVariant="top"
          />

          <StudioBlock
            reverse
            title={
              <>
                <HighlightGreen>See</HighlightGreen> how we can help you{" "}
                <UnderlineAccent>progress</UnderlineAccent>
              </>
            }
            description="We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research."
            imageSrc={STUDIO_IMAGE_BOTTOM}
            imageAlt="Elementum team collaborating at a workspace"
            imageVariant="bottom"
          />
        </div>
      </div>
    </section>
  );
}
