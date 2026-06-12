import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Handshake, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/ericmarca2008@gmail.com";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nume invalid").max(80),
  email: z.string().trim().email("Email invalid").max(120),
  message: z.string().trim().min(5, "Scrie un mesaj").max(1000),
});

const sponsorSchema = z.object({
  company: z.string().trim().min(2, "Denumire invalidă").max(120),
  contactName: z.string().trim().min(2, "Nume invalid").max(80),
  email: z.string().trim().email("Email invalid").max(120),
  phone: z.string().trim().min(8, "Telefon invalid").max(20),
  message: z.string().trim().min(5, "Scrie un mesaj").max(1000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Sponsori — Wolves Basketball Academy Bacău" },
      { name: "description", content: "Date de contact Wolves Basketball Academy Bacău — telefon, email, adresă sală. Devino sponsor pentru baschetul juvenil." },
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
          <ContactItem icon={MapPin} label="Adresă sală" value=" Bacău, România" />
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

      <section className="border-t border-border/60" aria-labelledby="form-heading">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 id="form-heading" className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Trimite-ne un mesaj
          </h2>
          <p className="mt-3 text-muted-foreground">Răspundem în maxim 48 de ore.</p>
          <ContactForm />
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

          <div className="mt-10 max-w-3xl">
            <article className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Handshake className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Devino sponsor</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Asociază brandul tău cu valorile sportului juvenil. Pachete personalizate de vizibilitate pe echipament, în sală și online.
                  </p>
                </div>
              </div>
              <SponsorForm />
            </article>
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-border/80 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Sponsorii noștri</p>
            <p className="mt-3 text-foreground">Locul tău aici.</p>
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

function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "message", string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const next: Partial<Record<"name" | "email" | "message", string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as "name" | "email" | "message";
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      toast.error("Verifică datele din formular");
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Mesaj contact — Wolves Basketball Academy",
          _template: "table",
          _captcha: "false",
          Nume: parsed.data.name,
          Email: parsed.data.email,
          Mesaj: parsed.data.message,
        }),
      });
      if (!res.ok) throw new Error("fail");
      toast.success("Mulțumim! Mesajul a fost trimis.");
      form.reset();
    } catch {
      toast.error("A apărut o eroare. Încearcă din nou.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5 rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">Nume <span className="text-primary">*</span></label>
        <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name}
          className={`w-full rounded-md border bg-background px-3.5 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${errors.name ? "border-destructive" : "border-input focus:border-primary"}`} />
        {errors.name && <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">Email <span className="text-primary">*</span></label>
        <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email}
          className={`w-full rounded-md border bg-background px-3.5 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${errors.email ? "border-destructive" : "border-input focus:border-primary"}`} />
        {errors.email && <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">Mesaj <span className="text-primary">*</span></label>
        <textarea id="message" name="message" rows={5} maxLength={1000} required aria-invalid={!!errors.message}
          className={`w-full rounded-md border bg-background px-3.5 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${errors.message ? "border-destructive" : "border-input focus:border-primary"}`} />
        {errors.message && <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">{errors.message}</p>}
      </div>
      <button type="submit" disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.01] disabled:opacity-60">
        {submitting ? "Se trimite..." : "Trimite mesajul"}
        {!submitting && <Send className="h-4 w-4" aria-hidden />}
      </button>
    </form>
  );
}

function SponsorForm() {
  const [errors, setErrors] = useState<Partial<Record<"company" | "contactName" | "email" | "phone" | "message", string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = sponsorSchema.safeParse(data);
    if (!parsed.success) {
      const next: Partial<Record<"company" | "contactName" | "email" | "phone" | "message", string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as "company" | "contactName" | "email" | "phone" | "message";
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      toast.error("Verifică datele din formular");
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Sponsorizare — Wolves Basketball Academy",
          _template: "table",
          _captcha: "false",
          Companie: parsed.data.company,
          "Persoană contact": parsed.data.contactName,
          Email: parsed.data.email,
          Telefon: parsed.data.phone,
          Mesaj: parsed.data.message,
        }),
      });
      if (!res.ok) throw new Error("fail");
      toast.success("Mulțumim! Cererea a fost trimisă.");
      form.reset();
    } catch {
      toast.error("A apărut o eroare. Încearcă din nou.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5 rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold text-foreground">Denumire companie <span className="text-primary">*</span></label>
          <input id="company" name="company" type="text" required aria-invalid={!!errors.company}
            className={`w-full rounded-md border bg-background px-3.5 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${errors.company ? "border-destructive" : "border-input focus:border-primary"}`} />
          {errors.company && <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">{errors.company}</p>}
        </div>
        <div>
          <label htmlFor="contactName" className="mb-2 block text-sm font-semibold text-foreground">Persoană de contact <span className="text-primary">*</span></label>
          <input id="contactName" name="contactName" type="text" autoComplete="name" required aria-invalid={!!errors.contactName}
            className={`w-full rounded-md border bg-background px-3.5 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${errors.contactName ? "border-destructive" : "border-input focus:border-primary"}`} />
          {errors.contactName && <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">{errors.contactName}</p>}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sponsorEmail" className="mb-2 block text-sm font-semibold text-foreground">Email <span className="text-primary">*</span></label>
          <input id="sponsorEmail" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email}
            className={`w-full rounded-md border bg-background px-3.5 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${errors.email ? "border-destructive" : "border-input focus:border-primary"}`} />
          {errors.email && <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">Telefon <span className="text-primary">*</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required aria-invalid={!!errors.phone}
            className={`w-full rounded-md border bg-background px-3.5 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${errors.phone ? "border-destructive" : "border-input focus:border-primary"}`} />
          {errors.phone && <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="sponsorMessage" className="mb-2 block text-sm font-semibold text-foreground">Mesaj <span className="text-primary">*</span></label>
        <textarea id="sponsorMessage" name="message" rows={4} maxLength={1000} required aria-invalid={!!errors.message}
          className={`w-full rounded-md border bg-background px-3.5 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 ${errors.message ? "border-destructive" : "border-input focus:border-primary"}`} />
        {errors.message && <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">{errors.message}</p>}
      </div>
      <button type="submit" disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.01] disabled:opacity-60">
        {submitting ? "Se trimite..." : "Trimite cererea"}
        {!submitting && <Send className="h-4 w-4" aria-hidden />}
      </button>
    </form>
  );
}
