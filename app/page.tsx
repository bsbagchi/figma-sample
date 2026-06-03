import { Header } from "./components/assignment/header";
import { HeroDecorations } from "./components/assignment/hero-decorations";
import { Hero } from "./components/assignment/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-x-visible overflow-y-visible bg-white min-h-svh xl:min-h-[1222px]">
        <Header />

        {/* Page-level layer — not affected by hero padding / isolate */}
        <HeroDecorations className="pointer-events-none absolute inset-x-0 top-16 z-[1] overflow-visible md:top-[72px] lg:top-[88px] xl:top-[88px] xl:h-[1134px]" />

        <Hero />
      </div>
    </div>
  );
}
