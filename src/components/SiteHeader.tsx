import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/wolves-logo.png";

const links = [
  { to: "/", label: "Acasă" },
  { to: "/despre", label: "Despre Noi" },
  { to: "/grupe", label: "Grupe & Program" },
  { to: "/galerie", label: "Galerie" },
  { to: "/noutati", label: "Noutăți" },
  { to: "/inscrieri", label: "Înscrieri" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Wolves Basketball Academy — Acasă">
          <img src={logo} alt="" width={36} height={36} className="h-9 w-9" />
          <div className="leading-tight">
            <div className="text-sm font-black uppercase tracking-widest text-foreground">Wolves</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">Basketball Academy</div>
          </div>
        </Link>

        <nav aria-label="Navigare principală" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/inscrieri"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02] lg:inline-flex"
        >
          Antrenament gratuit
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground hover:bg-card lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Navigare mobilă" className="border-t border-border/60 bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-card hover:text-foreground"
                  activeProps={{ className: "block rounded-md px-3 py-3 text-base font-semibold text-primary bg-card" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/inscrieri"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                Antrenament gratuit
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}