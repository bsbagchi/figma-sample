import Image from "next/image";

/** Figma export: public/vectors/curveline.svg — 1483×654 (first curve, studio) */
export const CURVELINE_WIDTH = 1483;
export const CURVELINE_HEIGHT = 654;

/** Figma export: public/vectors/curve2.svg — 864×654 (second curve, services) */
export const CURVE2_WIDTH = 964;
export const CURVE2_HEIGHT = 654;

/** Shared layout: pinned to parent right edge, width trimmed from the left. */
const CURVE_TRIM_CLASSES =
  "relative ml-auto block h-auto w-[80%] sm:w-[86%] md:w-[92%] lg:w-[96%] xl:w-full";

/** Parent wrapper — use on section: `absolute right-0 z-[1] w-full` */
export const CURVE_LAYER_CLASS = "pointer-events-none absolute right-0 z-[1] w-full";

type CurveImageProps = {
  className?: string;
};

/** First curve — curveline.svg */
export function Curveline({ className = "" }: CurveImageProps) {
  return (
    <div
      className={`${CURVE_TRIM_CLASSES} max-w-[1483px] ${className}`}
      aria-hidden
    >
      <Image
        src="/vectors/curveline.svg"
        width={CURVELINE_WIDTH}
        height={CURVELINE_HEIGHT}
        alt=""
        className="block h-auto w-full"
        sizes="(max-width: 1440px) 90vw, 1483px"
      />
    </div>
  );
}

/** Second curve — curve2.svg (same right-0 trim pattern as Curveline) */
export function Curve2({ className = "" }: CurveImageProps) {
  return (
    <div
      className={`${CURVE_TRIM_CLASSES} max-w-[864px] ${className}`}
      aria-hidden
    >
      <Image
        src="/vectors/curve2.svg"
        width={CURVE2_WIDTH}
        height={CURVE2_HEIGHT}
        alt=""
        className="block h-auto w-full"
        sizes="(max-width: 1440px) 55vw, 864px"
      />
    </div>
  );
}
