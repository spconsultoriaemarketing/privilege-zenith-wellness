import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorSection from "@/components/DoctorSection";
import ProgramsSection from "@/components/ProgramsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FaqSection from "@/components/FaqSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="inicio">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DoctorSection />
      <ProgramsSection />
      <ProjectsSection />
      <FaqSection />
      <LocationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
