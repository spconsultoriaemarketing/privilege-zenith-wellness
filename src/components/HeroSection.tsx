import heroImage from "@/assets/hero-wellness.jpg";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Espaço Privilege Saúde e Bem Estar com equipamentos de pilates e ambiente acolhedor"
          className="w-full h-full object-cover"
          loading="eager" />
        
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="font-body text-primary-foreground/80 text-sm uppercase tracking-[0.3em] mb-4">A MELHOR CLÍNICA DE FISIOTERAPIA DE BRASÍLIA!

          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Privilege
            <span className="block text-accent">Saúde e Bem-Estar</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
            Cuidamos do seu movimento e longevidade com atenção e técnicas seguras. Seu corpo e mente em equilíbrio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.contate.me/privilege-saudeebemestar" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8">
                Agende sua Avaliação
              </Button>
            </a>
            <a href="https://www.contate.me/privilege-saudeebemestar" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8">
                <Phone className="mr-2 h-4 w-4" />
                Fale Conosco
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;