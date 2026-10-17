import { AboutSection } from "@/components/about-section";
import { AnnouncementsTicker } from "@/components/announcements-ticker";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { QuickAccessSection } from "@/components/quick-access-section";
import { ServicesSection } from "@/components/services-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnnouncementsTicker />
      <QuickAccessSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
