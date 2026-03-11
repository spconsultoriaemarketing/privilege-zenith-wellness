import logo from "@/assets/logo-privilege.png";
  return (
    <footer className="bg-primary-dark py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground">
              Privilege
            </h3>
            <p className="font-body text-primary-foreground/60 text-sm mt-1">
              Saúde e Bem-Estar
            </p>
          </div>
          <p className="font-body text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Privilege Saúde e Bem-Estar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
