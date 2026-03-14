import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Quais serviços oferecemos?",
    answer:
      "Fisioterapia, Pilates, Nutrição, Acupuntura e programas especializados.",
  },
  {
    question: "Como agendar avaliação?",
    answer:
      "Você pode agendar sua avaliação de forma rápida e prática pelo WhatsApp, telefone ou diretamente na recepção da clínica.",
  },
  {
    question: "Atendem idosos e jovens?",
    answer:
      "Sim! Na Privilege Saúde atendemos todas as faixas etárias, com programas personalizados de acordo com cada objetivo.",
  },
  {
    question: "Qual o diferencial Privilege?",
    answer:
      "Nosso diferencial está em unir Fisioterapia, movimento e tecnologia com um olhar humano e personalizado. Cada paciente é acompanhado por fisioterapeutas especializados, com programas criados para suas necessidades reais, seja reabilitação, performance ou longevidade. Além disso, somos pioneiros em integrar Pilates, Gameterapia, Treino Cognitivo e força em protocolos exclusivos, como o Privilege Sênior e o Privilege Plus, que cuidam do corpo e da mente de forma completa.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 bg-secondary">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary-light mb-3">
            Dúvidas Frequentes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <a
            href="https://g.page/r/CVkWO1D1PGNMEBM/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-display text-lg px-8 py-6 rounded-xl gap-2">
              <Star className="h-5 w-5" />
              Avalie-nos no Google
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
