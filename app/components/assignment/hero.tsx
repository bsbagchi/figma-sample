import { ProfileCluster } from "./profile-cluster";

function HighlightPink({ children }: { children: React.ReactNode }) {
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

function HighlightGreen({ children }: { children: React.ReactNode }) {
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

function UnderlineThinkers({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        className="absolute -bottom-1 left-0 w-full max-w-none md:-bottom-2"
        viewBox="0 0 120 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M2 8C28 2 52 10 78 6C96 4 108 8 118 5"
          stroke="#f4b400"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col items-stretch gap-6 overflow-visible py-12 md:gap-8 md:py-16 lg:gap-10 xl:absolute xl:inset-x-0 xl:top-[88px] xl:min-h-[906px] xl:gap-0 xl:py-0"
    >
      <div className="relative z-10 flex w-full flex-col items-center gap-8 px-5 md:gap-10 md:px-8 lg:gap-12 xl:contents">
        <h1 className="m-0 w-full max-w-[831px] shrink-0 text-center font-hero text-4xl leading-[44px] font-normal tracking-normal text-black md:text-7xl md:leading-[91px] xl:text-[100px] xl:leading-[126px] xl:absolute xl:top-[130px] xl:left-1/2 xl:max-w-none xl:-translate-x-1/2">
          The <UnderlineThinkers>thinkers</UnderlineThinkers> and
          <br />
          doers were <HighlightPink>changing</HighlightPink>
          <br />
          the <HighlightGreen>status</HighlightGreen> Quo with
        </h1>

        <p className="m-0 w-full max-w-[831px] shrink-0 text-center font-description text-base leading-6 font-normal tracking-normal text-text-muted md:text-xl md:leading-[30px] lg:text-2xl lg:leading-9 xl:absolute xl:top-[560px] xl:left-1/2 xl:max-w-[831px] xl:-translate-x-1/2">
          We are a team of strategists, designers communicators, researchers.
          Togeather, we belive that progress only hghappens when you refuse to
          play things safe.
        </p>
      </div>

      <ProfileCluster className="relative z-[2] shrink-0 xl:absolute xl:inset-x-0 xl:top-[672px] xl:w-full" />
    </section>
  );
}
