export function HighlightPink({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        className="absolute inset-[-4px_-8px] -z-10 rounded-full bg-accent-pink opacity-90"
        aria-hidden
      />
      {children}
    </span>
  );
}

export function HighlightGreen({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        className="absolute inset-[-4px_-10px] -z-10 rounded-full bg-accent-green opacity-90"
        aria-hidden
      />
      {children}
    </span>
  );
}

const UNDERLINE_PATH =
  "M45.0339 1.5H336.4L0.0641632 15.9H371.064L183.066 31.5";

/** Exported from Figma: public/vectors/underline.svg (372×33) */
export function UnderlineAccent({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        className="absolute -bottom-3 left-[-4%] h-[0.55em] w-[108%] max-w-none md:-bottom-4"
        viewBox="0 0 372 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d={UNDERLINE_PATH}
          stroke="#FFC250"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </span>
  );
}
