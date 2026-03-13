import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary-light mb-3">
            Localização & Horários
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Venha nos visitar
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Endereço</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    SHCS CLS 303, Bloco B, Loja 35<br />
                    Brasília - DF
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Horário de Funcionamento</h3>
                  <div className="font-body text-muted-foreground space-y-1">
                    <p className="flex justify-between gap-8">
                      <span>Segunda a Sexta</span>
                      <span className="font-semibold text-foreground">07:00 – 19:00</span>
                    </p>
                    <p className="flex justify-between gap-8">
                      <span>Sábado</span>
                      <span className="font-semibold text-foreground">07:00 – 12:00</span>
                    </p>
                    <p className="flex justify-between gap-8">
                      <span>Domingo</span>
                      <span className="text-muted-foreground">Fechado</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="contato" className="bg-card rounded-lg p-8 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Contato</h3>
                  <div className="font-body text-muted-foreground space-y-2">
                    <p>
                      <span className="text-foreground font-medium">Email:</span>{" "}
                      <a href="mailto:contato@privilegesaude.com" className="hover:text-primary transition-colors">
                        contato@privilegesaude.com
                      </a>
                    </p>
                    <p>
                      <span className="text-foreground font-medium">Telefone:</span>{" "}
                      <a href="tel:+5561982190559" className="hover:text-primary transition-colors">
                        (61) 98219-0559
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-lg overflow-hidden shadow-elevated h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8!2d-47.9!3d-15.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzAwLjAiUyA0N8KwNTQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Privilege Saúde e Bem-Estar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
