import { Activity, Leaf, Zap, Apple, Hand, Waves } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Fisioterapia",
    description: "Tratamento especializado para reabilitação e prevenção de lesões com técnicas avançadas.",
  },
  {
    icon: Waves,
    title: "Pilates",
    description: "Fortalecimento, flexibilidade e consciência corporal com acompanhamento individualizado.",
  },
  {
    icon: Leaf,
    title: "Acupuntura",
    description: "Medicina tradicional chinesa para alívio de dores, equilíbrio energético e bem-estar.",
  },
  {
    icon: Hand,
    title: "Massagem Esportiva",
    description: "Recuperação muscular e melhora de performance para atletas e praticantes de atividades físicas.",
  },
  {
    icon: Zap,
    title: "Recover",
    description: "Programa de recuperação acelerada com tecnologias e técnicas de ponta.",
  },
  {
    icon: Apple,
    title: "Nutricionista",
    description: "Planejamento alimentar personalizado para saúde, performance e qualidade de vida.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary-light mb-3">
            Nossos Serviços
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Cuidado completo para você
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
