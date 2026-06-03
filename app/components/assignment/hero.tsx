import { ProfileCluster } from "./profile-cluster";
import {
  HighlightGreen,
  HighlightPink,
  UnderlineAccent,
} from "./text-decorations";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col items-stretch gap-6 overflow-visible pl-2 py-12 md:gap-8 md:pl-8 md:py-16 lg:gap-10 xl:absolute xl:inset-x-0 xl:top-[30px] xl:min-h-[1134px] xl:gap-0 xl:px-0 xl:py-0"
    >
      <div className="relative z-10 flex w-full flex-col items-center gap-8 px-5 md:gap-10 md:px-8 lg:gap-12 xl:contents">
        <h1 className="m-0 w-full max-w-[831px] shrink-0 text-center font-hero text-4xl leading-[44px] font-normal tracking-normal text-black md:text-7xl md:leading-[91px] xl:text-[100px] xl:leading-[126px] xl:absolute xl:top-[130px] xl:left-1/2 xl:max-w-none xl:-translate-x-1/2">
          The <UnderlineAccent>thinkers</UnderlineAccent> and
          <br />
          doers were <div className="inline-block">ch<HighlightPink>anging</HighlightPink></div>
          <br />
          the <HighlightGreen>status</HighlightGreen> Quo{" "}
          with
        </h1>

        <p className="m-0 w-full max-w-[831px] shrink-0 text-center font-description text-base leading-6 font-normal tracking-normal text-text-muted md:text-xl md:leading-[30px] lg:text-2xl lg:leading-9 xl:absolute xl:top-[560px] xl:left-1/2 xl:max-w-[831px] xl:-translate-x-1/2">
          We are a team of strategists, designers communicators, researchers.
          Togeather, we belive that progress only hghappens when you refuse to
          play things safe.
        </p>
      </div>

      <ProfileCluster className="relative z-[2] w-full shrink-0 max-xl:mx-0 xl:absolute xl:inset-x-0 xl:top-[672px] xl:w-full xl:max-w-none" />
    </section>
  );
}
