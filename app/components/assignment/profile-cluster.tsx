import Image from "next/image";

/** Figma artboard */
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

function waveTopPercent(y: number) {
  return ((waveTop(y) - MIN_WAVE_TOP) / CLUSTER_HEIGHT) * 100;
}

/** 226px at xl — scales down with clamp(3.5rem, 15.694vw, 14.125rem) */
const AVATAR_CLASS =
  "size-14 min-w-14 min-h-14 md:size-[min(15.694vw,14.125rem)] md:min-w-[min(15.694vw,14.125rem)] md:min-h-[min(15.694vw,14.125rem)] xl:size-[226px] xl:min-w-[226px] xl:min-h-[226px]";

type ProfileClusterProps = {
  className?: string;
};

export function ProfileCluster({ className = "" }: ProfileClusterProps) {
  return (
    <div
      className={`relative w-full max-w-none overflow-visible ${className}`}
      aria-label="Team profiles"
    >
      <div className="relative h-[114px] w-full overflow-visible md:h-[min(32.06vw,462px)] xl:h-[462px]">
        {AVATARS.map((avatar) => (
          <div
            key={avatar.id}
            className="absolute shrink-0"
            style={{
              left: `${(figmaLeft(avatar.x) / ARTBOARD) * 100}%`,
              top: `${waveTopPercent(avatar.y)}%`,
              zIndex: avatar.z,
            }}
          >
            <Image
              src={avatar.src}
              alt=""
              width={AVATAR_SIZE}
              height={AVATAR_SIZE}
              sizes="(max-width: 640px) 56px, (max-width: 1280px) 15.694vw, 226px"
              className={`${AVATAR_CLASS} shrink-0 rounded-full  bg-white object-cover shadow-[0_4px_16px_rgba(0,0,0,0.1)]`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const PROFILE_CLUSTER_HEIGHT = CLUSTER_HEIGHT;
