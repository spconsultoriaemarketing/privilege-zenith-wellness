import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const convenios = [
  { sigla: "STF", nome: "Supremo Tribunal Federal" },
  { sigla: "TJDFT", nome: "Tribunal de Justiça do Distrito Federal e Territórios" },
  { sigla: "TRT", nome: "Tribunal Regional do Trabalho" },
  { sigla: "TST", nome: "Tribunal Superior do Trabalho" },
  { sigla: "MPU", nome: "Ministério Público da União" },
];

const Convenios = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.telefone.trim()) {
      toast({ title: "Preencha todos os campos obrigatórios.", variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast({ title: "Informe um e-mail válido.", variant: "destructive" });
      return;
    }
    const msg = `Olá, gostaria de agendar uma avaliação.%0ANome: ${encodeURIComponent(form.nome)}%0AEmail: ${encodeURIComponent(form.email)}%0ATelefone: ${encodeURIComponent(form.telefone)}`;
    window.open(`https://wa.me/5561999999999?text=${msg}`, "_blank");
    toast({ title: "Redirecionando para o WhatsApp..." });
    setForm({ nome: "", email: "", telefone: "" });
  };

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

          <div className="space-y-4 mb-16">
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

          {/* Formulário de agendamento */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-2">
              Agende sua Avaliação
            </h2>
            <p className="text-center text-muted-foreground font-body text-sm mb-6">
              Preencha os campos abaixo e entraremos em contato.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nome" className="font-body">Nome Completo *</Label>
                <Input
                  id="nome"
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  maxLength={100}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="font-body">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  required
                />
              </div>
              <div>
                <Label htmlFor="telefone" className="font-body">Telefone *</Label>
                <Input
                  id="telefone"
                  type="tel"
                  placeholder="(61) 99999-9999"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  maxLength={20}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-display text-lg py-6 rounded-xl"
              >
                Agendar Avaliação
              </Button>
            </form>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Convenios;
