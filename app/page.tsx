import { Header } from "./components/assignment/header";
import { HeroDecorations } from "./components/assignment/hero-decorations";
import { Hero } from "./components/assignment/hero";
import { SiteFooter } from "./components/assignment/site-footer";
import { StudioServicesBlock } from "./components/assignment/studio-services-block";
import { TestimonialsSection } from "./components/assignment/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-x-visible bg-white">
        <Header />

        <HeroDecorations className="pointer-events-none absolute inset-x-0 top-16 z-[1] overflow-visible md:top-[72px] lg:top-[88px] xl:top-[88px] xl:h-[1134px]" />

        <div className="relative xl:min-h-[1222px]">
          <Hero />
        </div>
      </div>

      <StudioServicesBlock />
      <TestimonialsSection />
      <SiteFooter />
    </div>
  );
}
