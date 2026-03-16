import seniorImage from "@/assets/senior-program.jpg";
import plusImage from "@/assets/plus-program.jpg";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  return (
    <section id="programas" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary-light mb-3">
            Programas Exclusivos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Feitos para cada fase da vida
          </h2>
        </div>

        {/* Privilege Sênior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-primary/10 text-primary font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Privilege Sênior
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Envelhecer com qualidade e autonomia
            </h3>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Cuidar do corpo e da mente é o primeiro passo para envelhecer com qualidade.
              O Privilege Sênior combina <strong className="text-foreground">Exercícios Físicos, Treino Cognitivo, Aeróbico, Gameterapia, Pilates e Atividades de Dupla Tarefa</strong>, tudo pensado para fortalecer o corpo, estimular a mente e manter a autonomia em cada fase da vida.
            </p>
            <a href="https://www.contate.me/privilege-saudeebemestar" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="font-body font-semibold">
                Saiba Mais
              </Button>
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <img

              alt="Programa Privilege Sênior com idosos praticando exercícios"
              className="rounded-lg shadow-elevated w-full h-[400px] object-contain"
              loading="lazy" src="/lovable-uploads/a7182058-e29b-4d2c-94ca-6d477cbd6642.jpg" />
            
          </div>
        </div>

        {/* Privilege Plus */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img

              alt="Programa Privilege Plus com jovens e adultos fazendo treinamento funcional"
              className="rounded-lg shadow-elevated w-full h-[400px] object-scale-down"
              loading="lazy" src="/lovable-uploads/494c576f-64b6-4d58-81d8-5503ca565a50.jpg" />
            
          </div>
          <div>
            <span className="inline-block bg-accent/20 font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-4 text-primary">
              Privilege Plus
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Força e Pilates sem rotina monótona
            </h3>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Para quem quer treinar força e fazer Pilates, mas não se identifica com a academia.
              O Privilege Plus une o melhor do <strong className="text-foreground">Treinamento Funcional com a inteligência do Pilates</strong>, criando um treino completo, desafiador e personalizado para jovens e adultos que buscam saúde, força e bem-estar.
            </p>
            <a href="https://www.contate.me/privilege-saudeebemestar" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="font-body font-semibold">
                Saiba Mais
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default ProgramsSection;