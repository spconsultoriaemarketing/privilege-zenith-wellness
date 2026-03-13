import logo from "@/assets/logo-privilege.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary-dark py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Privilege Saúde e Bem-Estar" className="h-12 w-auto" />
            <div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground">

              </h3>
              <p className="font-body text-primary-foreground/60 text-sm">

              </p>
            </div>
          </div>
          <p className="font-body text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Privilege Saúde e Bem-Estar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>);

};

export default FooterSection;