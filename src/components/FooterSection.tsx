import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary-dark py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl font-bold text-primary-foreground">
              Privilege
            </span>
            <span className="font-body text-primary-foreground/60 text-sm">
              Saúde e Bem-Estar
            </span>
          </div>

          {/* Contato */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-1">
              Contato
            </h4>
            <p className="font-body text-primary-foreground/60 text-sm mb-4">
              Estamos aqui para cuidar de você sempre
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:contato@privilegesaude.com" 
                className="flex items-center justify-center md:justify-start gap-2 font-body text-primary-foreground/80 hover:text-primary-light transition-colors"
              >
                <Mail className="h-4 w-4" />
                contato@privilegesaude.com
              </a>
              <a 
                href="tel:+5561982190559" 
                className="flex items-center justify-center md:justify-start gap-2 font-body text-primary-foreground/80 hover:text-primary-light transition-colors"
              >
                <Phone className="h-4 w-4" />
                (61) 98219-0559
              </a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="flex justify-center md:justify-end gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-primary-foreground" />
            </a>
            <a 
              href="https://wa.me/5561982190559" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5 text-primary-foreground" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Privilege Saúde e Bem-Estar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;