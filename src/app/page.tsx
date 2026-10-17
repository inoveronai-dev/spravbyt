import { AboutSection } from "@/components/about-section";
import { AktualitySection } from "@/components/aktuality-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { QuickAccessSection } from "@/components/quick-access-section";
import { ServicesSection } from "@/components/services-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickAccessSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <AktualitySection />
    </>
  );
}
