import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Building2 } from "lucide-react";

const convenios = [
  { sigla: "STF", nome: "Supremo Tribunal Federal" },
  { sigla: "TJDFT", nome: "Tribunal de Justiça do Distrito Federal e Territórios" },
  { sigla: "TRT", nome: "Tribunal Regional do Trabalho" },
  { sigla: "TST", nome: "Tribunal Superior do Trabalho" },
  { sigla: "MPU", nome: "Ministério Público da União" },
];

const Convenios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="container max-w-3xl mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Nossos Convênios
          </h1>
          <p className="text-center text-muted-foreground font-body text-lg mb-4">
            Atendemos pelos seguintes convênios:
          </p>
          <p className="text-center text-muted-foreground font-body text-sm mb-12">
            Estamos sempre procurando aumentar nossa lista para poder lhe atender da melhor forma.
          </p>

          <div className="space-y-4">
            {convenios.map((c) => (
              <div
                key={c.sigla}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <span className="font-display font-bold text-foreground text-lg">{c.sigla}</span>
                  <span className="text-muted-foreground font-body ml-2">– {c.nome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Convenios;
