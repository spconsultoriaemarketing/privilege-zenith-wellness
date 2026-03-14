import equipeImg from "@/assets/projetos/equipe.jpg";
import grupoImg from "@/assets/projetos/grupo.jpg";
import cafe1Img from "@/assets/projetos/cafe1.jpg";
import cafe2Img from "@/assets/projetos/cafe2.jpg";
import encontroImg from "@/assets/projetos/encontro.jpg";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: "💚",
    title: "Programa Privilege Sênior",
    description: "Voltado para longevidade ativa, com exercícios para corpo e mente.",
  },
  {
    icon: "💪",
    title: "Programa Privilege Plus",
    description: "Treino de força e Pilates para quem busca saúde sem academia.",
  },
  {
    icon: "🎮",
    title: "Gameterapia",
    description: "Projeto que integra tecnologia e reabilitação, estimulando o corpo e o cérebro de forma divertida e eficaz.",
  },
  {
    icon: "☕",
    title: "Café com Movimento",
    description: "Encontros mensais com pacientes e profissionais para trocar experiências sobre saúde, autocuidado e qualidade de vida.",
  },
];

const images = [
  { src: equipeImg, alt: "Equipe Privilege no estúdio" },
  { src: grupoImg, alt: "Grupo Privilege em evento ao ar livre" },
  { src: cafe1Img, alt: "Café com Movimento - encontro em restaurante" },
  { src: cafe2Img, alt: "Café com Movimento - confraternização" },
  { src: encontroImg, alt: "Encontro de pacientes na clínica Privilege" },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary-light mb-3">
            Nossos Projetos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Projetos
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Na Privilege, acreditamos que cuidar vai muito além do ambiente clínico.
            Por isso, desenvolvemos projetos que unem ciência, movimento e propósito,
            levando saúde e bem-estar a diferentes públicos:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-4 block">{project.icon}</span>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {images.map((image) => (
            <img
              key={image.alt}
              src={image.src}
              alt={image.alt}
              className="rounded-lg w-full h-48 object-cover shadow-sm hover:shadow-md transition-shadow"
              loading="lazy"
            />
          ))}
        </div>

        <div className="flex justify-center">
          <a href="https://www.contate.me/privilege-saudeebemestar" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold">
              Venha conhecer nossos projetos
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
