import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import ApplicationSection from "@/components/ApplicationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <PartnersSection />
        <ApplicationSection />
        <TestimonialsSection />
        <StatsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
