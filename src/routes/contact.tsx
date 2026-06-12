import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook, HandCoins, Handshake, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Sponsori — Wolves Basketball Academy Bacău" },
      { name: "description", content: "Date de contact Wolves Basketball Academy Bacău — telefon, email, adresă sală. Devino sponsor sau redirecționează 3.5% pentru baschetul juvenil." },
      { property: "og:title", content: "Contact & Sponsori — Wolves Basketball Academy" },
      { property: "og:description", content: "Telefon, email, hartă și opțiuni de susținere a clubului." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hai să vorbim despre baschet.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <ContactItem icon={Phone} label="Telefon" value="+40 754 097 711" href="tel:+40754097711" />
          <ContactItem icon={Mail} label="Email" value="contact@wolvesbacau.ro" href="mailto:contact@wolvesbacau.ro" />
          <ContactItem icon={MapPin} label="Adresă sală" value=" Bacău, România" />
          <ContactItem icon={Facebook} label="Facebook" value="Wolves Basketball Academy" href="https://facebook.com" external />
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
          <iframe
            title="Locația Wolves Basketball Academy pe Google Maps"
            src="https://www.google.com/maps?q=Bacau&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-[360px] w-full border-0"
          />
        </div>
      </section>

      {/* SPONSORS */}
      <section className="border-t border-border/60 bg-card" aria-labelledby="sponsori-heading">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Sponsori & Susținători</p>
          <h2 id="sponsori-heading" className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Susține dezvoltarea baschetului juvenil din Bacău.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Fiecare contribuție merge direct în echipament, transport, taxe de competiție și sală de antrenament pentru copiii noștri.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-primary/30 bg-primary/5 p-8">
              <Handshake className="h-10 w-10 text-primary" aria-hidden />
              <h3 className="mt-4 text-xl font-bold text-foreground">Devino sponsor</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                Asociază brandul tău cu valorile sportului juvenil. Pachete personalizate de vizibilitate pe echipament,
                în sală și pe canalele noastre online.
              </p>
              <a
                href="mailto:contact@wolvesbacau.ro?subject=Sponsorizare%20Wolves%20Basketball%20Academy"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
              >
                Discută cu noi
              </a>
            </article>

            <article className="flex flex-col rounded-2xl border border-border bg-background p-8">
              <HandCoins className="h-10 w-10 text-primary" aria-hidden />
              <h3 className="mt-4 text-xl font-bold text-foreground">Redirecționează 3.5%</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                Poți direcționa 3.5% din impozitul pe venit către Wolves Basketball Academy — fără niciun cost suplimentar pentru tine.
              </p>
              <a
                href="mailto:contact@wolvesbacau.ro?subject=Redirec%C8%9Bionare%203.5%25"
                className="mt-6 inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                Cere instrucțiuni
              </a>
            </article>
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-border/80 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Sponsorii noștri</p>
            <p className="mt-3 text-foreground">Locul tău aici. <Link to="/contact" className="font-semibold text-primary hover:underline">Devino sponsor →</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon, label, value, href, external,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string; value: string; href?: string; external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40">
      <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-1 text-base font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
  if (!href) return content;
  return external ? (
    <a href={href} target="_blank" rel="noreferrer">{content}</a>
  ) : (
    <a href={href}>{content}</a>
  );
}