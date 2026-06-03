import Image from "next/image";

/** Figma artboard — layout scales uniformly from this reference */
const ARTBOARD = 1440;
const AVATAR_SIZE = 226;
const FIGMA_LEFT_MIN = 199;
const FIGMA_LEFT_MAX = ARTBOARD - FIGMA_LEFT_MIN - AVATAR_SIZE;

/** Description ends at top 560 + 72px line box = 632 in hero coords (xl) */
export const HERO_DESC_BOTTOM = 632;
/** ~40px gap below description to first avatar row */
export const PROFILE_CLUSTER_TOP = HERO_DESC_BOTTOM + 40;

const AVATARS = [
  { id: 1, x: -60, y: 124, z: 1, src: "/profiles/Ellipse 262.png" },
  { id: 2, x: -40, y: 64, z: 2, src: "/profiles/Ellipse 261.png" },
  { id: 3, x: 10, y: 6, z: 3, src: "/profiles/Ellipse 255.png" },
  { id: 4, x: 28, y: 114, z: 4, src: "/profiles/Ellipse 256.png" },
  { id: 5, x: 65, y: 30, z: 5, src: "/profiles/Ellipse 257.png" },
  { id: 6, x: 87, y: 62, z: 6, src: "/profiles/Ellipse 258.png" },
  { id: 7, x: 130, y: 8, z: 7, src: "/profiles/Ellipse 259.png" },
  { id: 8, x: 155, y: 89, z: 8, src: "/profiles/Ellipse 260.png" },
] as const;

function figmaLeft(x: number) {
  const t = (x + 10) / 120;
  return FIGMA_LEFT_MIN + t * (FIGMA_LEFT_MAX - FIGMA_LEFT_MIN);
}

/** Wave offset — baseline y:58 is the first avatar row */
function waveTop(y: number) {
  return (y - 58) * 2;
}

const MIN_WAVE_TOP = Math.min(...AVATARS.map((a) => waveTop(a.y)));
const MAX_WAVE_TOP = Math.max(...AVATARS.map((a) => waveTop(a.y)));
const CLUSTER_HEIGHT = MAX_WAVE_TOP - MIN_WAVE_TOP + AVATAR_SIZE;

function leftPercent(x: number) {
  return (figmaLeft(x) / ARTBOARD) * 100;
}

function topPercent(y: number) {
  return ((waveTop(y) - MIN_WAVE_TOP) / CLUSTER_HEIGHT) * 100;
}

/** 226 / 1440 — avatar diameter as % of cluster width */
const AVATAR_WIDTH_PERCENT = (AVATAR_SIZE / ARTBOARD) * 100;

/** Auto-fit on mobile/tablet only — keeps edge avatars on screen */
const AVATAR_BOUNDS = AVATARS.map((a) => ({
  left: leftPercent(a.x),
  right: leftPercent(a.x) + AVATAR_WIDTH_PERCENT,
}));
const MIN_LEFT = Math.min(...AVATAR_BOUNDS.map((b) => b.left));
const MAX_RIGHT = Math.max(...AVATAR_BOUNDS.map((b) => b.right));
const LAYOUT_SPAN = MAX_RIGHT - MIN_LEFT;
const CONTENT_CENTER = (MIN_LEFT + MAX_RIGHT) / 2;
const FIT_SCALE = 100 / LAYOUT_SPAN;
const VISUAL_CLUSTER_HEIGHT = CLUSTER_HEIGHT * FIT_SCALE;

type ProfileClusterProps = {
  className?: string;
};

export function ProfileCluster({ className = "" }: ProfileClusterProps) {
  return (
    <div
      className={`relative w-full overflow-visible ${className}`}
      aria-label="Team profiles"
    >
      {/*
        Desktop (xl+): full 1440 layout, edge-to-edge — no shrink (was causing fake padding).
        Mobile/tablet: auto-fit scale so avatars stay on screen.
      */}
      <div
        className="relative w-full overflow-visible max-xl:h-[min(calc(462/1440*100vw*var(--fit-scale)),var(--fit-height))] xl:aspect-[1440/462]"
        style={
          {
            "--fit-scale": FIT_SCALE,
            "--fit-height": `${VISUAL_CLUSTER_HEIGHT}px`,
            "--origin-x": `${CONTENT_CENTER}%`,
          } as React.CSSProperties
        }
      >
        <div
          className="absolute top-0 left-0 aspect-[1440/462] w-full origin-top max-xl:scale-[var(--fit-scale)] xl:scale-100"
          style={{ transformOrigin: "var(--origin-x) top" }}
        >
          {AVATARS.map((avatar) => (
            <div
              key={avatar.id}
              className="absolute aspect-square shrink-0"
              style={{
                left: `${leftPercent(avatar.x)}%`,
                top: `${topPercent(avatar.y)}%`,
                width: `${AVATAR_WIDTH_PERCENT}%`,
                zIndex: avatar.z,
              }}
            >
              <Image
                src={avatar.src}
                alt=""
                width={AVATAR_SIZE}
                height={AVATAR_SIZE}
                sizes="(max-width: 1280px) 12vw, 226px"
                className="size-full shrink-0 rounded-full border-[clamp(2px,0.556vw,8px)] border-white bg-white object-cover shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const PROFILE_CLUSTER_HEIGHT = CLUSTER_HEIGHT;
