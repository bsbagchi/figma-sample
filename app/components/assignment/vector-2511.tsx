const VECTOR_PATH =
  "M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809";

type Vector2511Props = {
  stroke: string;
  className?: string;
  style?: React.CSSProperties;
};

/** Exported from Figma: Vector 2511.svg (84×355) */
export function Vector2511({ stroke, className, style }: Vector2511Props) {
  return (
    <svg
      className={className}
      style={style}
      width="84"
      height="355"
      viewBox="0 0 84 355"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d={VECTOR_PATH}
        stroke={stroke}
        strokeWidth="8"
        fill="none"
      />
    </svg>
  );
}
