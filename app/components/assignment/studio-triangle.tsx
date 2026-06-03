import Image from "next/image";

/** Figma: public/vectors/square.svg */
export const STUDIO_SQUARE_WIDTH = 233;
export const STUDIO_SQUARE_HEIGHT = 227;

/** Figma: public/vectors/triangle.svg */
export const STUDIO_TRIANGLE_WIDTH = 238;
export const STUDIO_TRIANGLE_HEIGHT = 201;

type StudioShapeProps = {
  className?: string;
};

export function StudioSquare({ className = "" }: StudioShapeProps) {
  return (
    <Image
      src="/vectors/square.svg"
      width={STUDIO_SQUARE_WIDTH}
      height={STUDIO_SQUARE_HEIGHT}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute z-[1] h-auto ${className}`}
    />
  );
}

export function StudioTriangle({ className = "" }: StudioShapeProps) {
  return (
    <Image
      src="/vectors/triangle.svg"
      width={STUDIO_TRIANGLE_WIDTH}
      height={STUDIO_TRIANGLE_HEIGHT}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute h-auto ${className}`}
    />
  );
}
