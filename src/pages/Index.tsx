import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="inicio">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProgramsSection />
      <LocationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
