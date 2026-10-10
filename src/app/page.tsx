import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { QuickLinksSection } from "@/components/quick-links-section";
import { ServicesSection } from "@/components/services-section";
import { TrustSection } from "@/components/trust-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <AboutSection />
      <QuickLinksSection />
      <ContactSection />
    </>
  );
}
