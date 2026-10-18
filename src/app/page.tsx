import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { LocationMapSection } from "@/components/location-map-section";
import { ParallaxCtaSection } from "@/components/parallax-cta-section";
import { QuickAccessSection } from "@/components/quick-access-section";
import { ServicesSection } from "@/components/services-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickAccessSection />
      <AboutSection />
      <ServicesSection />
      <ParallaxCtaSection />
      <LocationMapSection />
    </>
  );
}
