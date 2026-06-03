import { ServicesSection } from "./services-section";
import { StudioSection } from "./studio-section";

export function StudioServicesBlock() {
  return (
    <div className="relative w-full overflow-x-clip">
      <StudioSection showDecorations />
      <ServicesSection />
    </div>
  );
}
