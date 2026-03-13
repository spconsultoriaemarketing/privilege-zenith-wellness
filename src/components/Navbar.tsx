import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-privilege.png";

const navLinks = [
{ label: "Início", href: "#inicio" },
{ label: "Serviços", href: "#servicos" },
{ label: "Programas", href: "#programas" },
{ label: "Contato", href: "#contato" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/90 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Privilege Saúde e Bem-Estar" className="h-14 w-auto brightness-0 invert" />
          <span className="font-display text-xl font-bold text-primary-foreground hidden sm:inline">

          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors">

              {link.label}
            </a>
          )}
          <a href="https://www.contate.me/privilege-saudeebemestar" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold">
              <Phone className="mr-2 h-4 w-4" />
              Ligue Agora
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu">

          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="md:hidden bg-primary-dark/95 backdrop-blur-md pb-4">
          {navLinks.map((link) =>
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="block px-6 py-3 font-body text-primary-foreground/80 hover:text-accent transition-colors">

              {link.label}
            </a>
        )}
        <a
          href="https://www.contate.me/privilege-saudeebemestar"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="block px-6 py-3 font-body text-accent hover:text-accent/80 transition-colors font-semibold"
        >
          <Phone className="inline h-4 w-4 mr-2" />
          Ligue Agora
        </a>
        </div>
      }
    </nav>);

};

export default Navbar;