import { Stethoscope, Bone, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import drEder from "@/assets/dr-eder-arantes.jpg";

const specialties = [
  { icon: Activity, label: "Dor crônica" },
  { icon: Bone, label: "Osteoporose" },
  { icon: Stethoscope, label: "Sarcopenia" },
];

const DoctorSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="especialista">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <img
                src={drEder}
                alt="Dr. Éder Arantes – Especialista em Dor e Saúde Óssea"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-2">
              Corpo Clínico
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dr. Éder Arantes
            </h2>
            <p className="font-display text-lg text-primary font-semibold mb-6">
              Especialista em Dor e Saúde Óssea
            </p>

            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Médico especialista em dor, com atuação voltada ao diagnóstico e tratamento de
              condições dolorosas agudas e crônicas, sempre com foco na causa do problema e na
              recuperação da funcionalidade do paciente.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Possui residência médica em Dor e Osteometabolismo pelo Departamento de Ortopedia da
              UFG, além de formação em intervencionismo em dor pelo Hospital Israelita Albert
              Einstein.
            </p>

            {/* Specialties */}
            <div className="flex flex-wrap gap-3 mb-6">
              {specialties.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-sm"
                >
                  <s.icon className="h-4 w-4 text-primary" />
                  <span className="font-body text-sm text-foreground font-medium">{s.label}</span>
                </div>
              ))}
            </div>

            <p className="font-body text-muted-foreground leading-relaxed mb-2">
              Com abordagem individualizada, integra estratégias clínicas e intervencionistas para
              redução da dor, melhora da mobilidade e promoção da qualidade de vida.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Consultas particulares e convênios.
            </p>

            <a
              href="https://www.contate.me/privilege-saudeebemestar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white font-display text-base px-8 py-6 rounded-xl">
                Saiba Mais
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
