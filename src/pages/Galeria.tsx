import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { X } from "lucide-react";

import galeria1 from "@/assets/galeria/galeria-1.jpeg";
import galeria2 from "@/assets/galeria/galeria-2.jpeg";
import galeria3 from "@/assets/galeria/galeria-3.jpeg";
import galeria4 from "@/assets/galeria/galeria-4.jpeg";
import galeria5 from "@/assets/galeria/galeria-5.jpeg";
import galeria6 from "@/assets/galeria/galeria-6.jpeg";
import galeria7 from "@/assets/galeria/galeria-7.jpeg";
import galeria8 from "@/assets/galeria/galeria-8.jpeg";

const images = [
  { src: galeria1, alt: "Recepção Privilege Saúde" },
  { src: galeria2, alt: "Consultório de atendimento" },
  { src: galeria3, alt: "Sala de Pilates e equipamentos" },
  { src: galeria4, alt: "Espaço de treinamento funcional" },
  { src: galeria5, alt: "Sala de Pilates com equipamentos Cadillac" },
  { src: galeria6, alt: "Sala de Pilates com Reformer" },
  { src: galeria7, alt: "Espaço de musculação e acessórios" },
  { src: galeria8, alt: "Sala de equipamentos de fortalecimento" },
];

const Galeria = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary-light mb-3">
              Nosso Espaço
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Galeria
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
              Cada detalhe do nosso espaço foi criado para que você se sinta acolhido desde a chegada
              até o final do atendimento. Ambientes amplos, confortáveis, climatizados e equipados com
              tecnologia moderna para garantir segurança, bem-estar e resultados eficazes no seu tratamento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 focus:outline-none ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <FooterSection />
    </div>
  );
};

export default Galeria;
