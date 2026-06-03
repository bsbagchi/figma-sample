import Image from "next/image";

const PROFILE_IMAGE = "/profiles/ellipse-261.png";

/** Figma artboard */
const ARTBOARD = 1440;
const AVATAR_SIZE = 226;
/** First avatar top-left on artboard */
const FIGMA_LEFT_MIN = 199;
const FIGMA_LEFT_MAX = ARTBOARD - FIGMA_LEFT_MIN - AVATAR_SIZE;

/** Wave layout — x/y tuned for overlap; mapped to Figma px on xl */
const AVATARS = [
  { id: 1, x: -10, y: 0, z: 1 },
  { id: 2, x: 0, y: 38, z: 2 },
  { id: 3, x: 30, y: 6, z: 3 },
  { id: 4, x: 28, y: 54, z: 4 },
  { id: 5, x: 45, y: 30, z: 5 },
  { id: 6, x: 57, y: 62, z: 6 },
  { id: 7, x: 74, y: 8, z: 7 },
  { id: 8, x: 150, y: 52, z: 8 },
] as const;

function figmaLeft(x: number) {
  const t = (x + 10) / 120;
  return FIGMA_LEFT_MIN + t * (FIGMA_LEFT_MAX - FIGMA_LEFT_MIN);
}

/** Vertical wave offset from first avatar baseline (y: 58) */
function topOffset(y: number) {
  return (y - 58) * 2;
}

const CLUSTER_PAD_TOP = 104;
const CLUSTER_HEIGHT = CLUSTER_PAD_TOP + AVATAR_SIZE + 8;

type ProfileClusterProps = {
  className?: string;
};

export function ProfileCluster({ className = "" }: ProfileClusterProps) {
  return (
    <div
      className={`relative w-full max-w-none overflow-visible [--avatar-size:clamp(3.5rem,15.694vw,14.125rem)] ${className}`}
      aria-label="Team profiles"
    >
      <div
        className="relative w-full overflow-visible"
        style={{
          height: `calc(${CLUSTER_HEIGHT} / ${AVATAR_SIZE} * var(--avatar-size))`,
        }}
      >
        {AVATARS.map((avatar) => (
          <div
            key={avatar.id}
            className="absolute shrink-0"
            style={{
              left: `${(figmaLeft(avatar.x) / ARTBOARD) * 100}%`,
              top: `calc(${CLUSTER_PAD_TOP + topOffset(avatar.y)} / ${AVATAR_SIZE} * var(--avatar-size))`,
              zIndex: avatar.z,
            }}
          >
            <Image
              src={PROFILE_IMAGE}
              alt=""
              width={AVATAR_SIZE}
              height={AVATAR_SIZE}
              sizes="(max-width: 640px) 56px, (max-width: 1280px) 15.694vw, 226px"
              className="size-[var(--avatar-size)] min-w-[var(--avatar-size)] shrink-0 rounded-full border-[8px] border-white bg-white object-cover shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
