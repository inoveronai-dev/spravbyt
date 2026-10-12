import { AboutSection } from "@/components/about-section";
import { AnnouncementsTicker } from "@/components/announcements-ticker";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { QuickLinksSection } from "@/components/quick-links-section";
import { ServicesSection } from "@/components/services-section";
import { TrustSection } from "@/components/trust-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnnouncementsTicker />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <QuickLinksSection />
      <ContactSection />
    </>
  );
}
