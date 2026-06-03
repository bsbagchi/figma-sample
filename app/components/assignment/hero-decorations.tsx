import { Vector2511 } from "./vector-2511";

function LeftVectors() {
  return (
    <div className="absolute top-28 left-0 z-[1] h-[236px] w-14 md:top-[400px] md:h-[304px] md:w-[72px]  lg:top-[514.5px] 2xl:-left-40 lg:h-[355px] lg:w-[84px]">
      <Vector2511
        stroke="#f0a89a"
        className="absolute top-0 left-0 h-full w-full translate-x-3 translate-y-[18px]"
      />
      <Vector2511
        stroke="#0e0e0e"
        className="absolute top-0 left-0 h-full w-full"
      />
    </div>
  );
}

function RightDecorations() {
  return (
    <div className="absolute top-14 -right-5 z-[1] hidden size-20 overflow-hidden sm:block md:top-16 md:size-32 lg:top-20 lg:-right-5 lg:size-40 xl:top-75 xl:-right-30 xl:size-50">
      <svg
        className="h-full w-full rotate-[120.5deg]"
        viewBox="0 0 112 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M28 84C28 58 44 36 68 36C92 36 108 58 108 84H28Z"
          fill="#7b61ff"
        />
      </svg>
    </div>
  );
}

type HeroDecorationsProps = {
  className?: string;
};

export function HeroDecorations({ className = "" }: HeroDecorationsProps) {
  return (
    <div className={className} aria-hidden>
      <LeftVectors />
      <RightDecorations />
    </div>
  );
}
