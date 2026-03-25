import logoText from "@/assets/logo-text.png";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={logoText} alt="Snoweb" className="h-4 brightness-0 invert" />
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Snoweb Consulting. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
