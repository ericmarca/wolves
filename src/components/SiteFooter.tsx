import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/wolves-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card text-card-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3" aria-label="Acasă">
            <img src={logo} alt="" width={40} height={40} className="h-10 w-10" loading="lazy" />
            <div className="leading-tight">
              <div className="text-sm font-black uppercase tracking-widest text-foreground">Wolves</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">Basketball Academy</div>
            </div>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Academia de baschet pentru copii și juniori din Bacău. Tehnică, disciplină, spirit de echipă.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">Navigare</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/despre" className="text-muted-foreground hover:text-foreground">Despre Noi</Link></li>
            <li><Link to="/grupe" className="text-muted-foreground hover:text-foreground">Grupe & Program</Link></li>
            <li><Link to="/galerie" className="text-muted-foreground hover:text-foreground">Galerie</Link></li>
            <li><Link to="/noutati" className="text-muted-foreground hover:text-foreground">Noutăți</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">Acțiune</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/inscrieri" className="text-muted-foreground hover:text-foreground">Înscrie-te</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Devino sponsor</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Redirecționează 3.5%</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <a href="tel:+40754097711" className="hover:text-foreground">+40 754 097 711</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <a href="mailto:contact@wolvesbacau.ro" className="hover:text-foreground">contact@wolvesbacau.ro</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <span>Bacău, România</span>
            </li>
            <li className="flex items-start gap-2">
              <Facebook className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-foreground">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Wolves Basketball Academy. Toate drepturile rezervate.</p>
          <p>Bacău • Fondat în 2021</p>
        </div>
      </div>
    </footer>
  );
}