import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";

export const Route = createFileRoute("/inscrieri")({
  head: () => ({
    meta: [
      { title: "Înscrieri — Antrenament gratuit la Wolves Bacău" },
      { name: "description", content: "Programează un antrenament gratuit pentru copilul tău la Wolves Basketball Academy Bacău. Completează formularul și te contactăm." },
      { property: "og:title", content: "Înscrieri — Wolves Basketball Academy" },
      { property: "og:description", content: "Prima ședință este pe noi. Programează un antrenament gratuit." },
    ],
  }),
  component: InscrieriPage,
});

const schema = z.object({
  childName: z.string().trim().min(2, "Numele copilului este obligatoriu").max(80),
  age: z.coerce.number().int().min(4, "Vârsta minimă este 4 ani").max(20, "Vârsta maximă este 20 ani"),
  parentName: z.string().trim().min(2, "Numele părintelui este obligatoriu").max(80),
  phone: z.string().trim().min(7, "Număr de telefon invalid").max(20),
  email: z.string().trim().email("Email invalid").max(120),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

type FormErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function InscrieriPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: FormErrors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof FormErrors;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      toast.error("Verifică datele din formular");
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/ericmarca2008@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Înscriere nouă — Wolves Basketball Academy",
          _template: "table",
          _captcha: "false",
          "Nume copil": result.data.childName,
          "Vârstă": result.data.age,
          "Nume părinte": result.data.parentName,
          "Telefon": result.data.phone,
          "Email": result.data.email,
          "Mesaj": result.data.message || "-",
        }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setDone(true);
      toast.success("Mulțumim! Te contactăm în curând.");
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("A apărut o eroare. Încearcă din nou sau sună-ne direct.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Înscrieri</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Programează un antrenament gratuit.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Completează formularul și un membru al echipei Wolves te va contacta pentru a stabili ziua și ora primei ședințe.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[2fr_1fr] lg:px-8">
        {done ? (
          <div className="rounded-2xl border border-primary/40 bg-primary/5 p-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden />
            <h2 className="mt-4 text-2xl font-black text-foreground">Înscriere trimisă cu succes!</h2>
            <p className="mt-3 text-muted-foreground">
              Mulțumim! Te vom contacta în cel mult 48 de ore pentru a confirma programarea.
            </p>
            <button
              type="button"
              onClick={() => setDone(false)}
              className="mt-6 inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              Trimite altă înscriere
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="childName" label="Nume copil" error={errors.childName} required autoComplete="off" />
              <Field id="age" label="Vârstă" type="number" min={4} max={20} error={errors.age} required />
              <Field id="parentName" label="Nume părinte" error={errors.parentName} required autoComplete="name" />
              <Field id="phone" label="Telefon" type="tel" error={errors.phone} required autoComplete="tel" />
              <div className="sm:col-span-2">
                <Field id="email" label="Email" type="email" error={errors.email} required autoComplete="email" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                  Mesaj <span className="font-normal text-muted-foreground">(opțional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={800}
                  placeholder="Ai întrebări sau preferințe legate de ziua antrenamentului?"
                  className="w-full rounded-md border border-input bg-background px-3.5 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {submitting ? "Se trimite..." : "Programează un antrenament gratuit"}
              {!submitting && <Send className="h-4 w-4" aria-hidden />}
            </button>
          </form>
        )}

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="text-lg font-bold text-foreground">Ce urmează după înscriere</h2>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><Step n={1} /> Primești un telefon sau email de la noi în 48 de ore.</li>
              <li className="flex gap-3"><Step n={2} /> Stabilim împreună ziua și ora primului antrenament.</li>
              <li className="flex gap-3"><Step n={3} /> Copilul vine cu echipament sport — restul îți spunem noi.</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h2 className="text-base font-bold text-foreground">Ai nevoie de mai multe informații?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Sună-ne direct la <a href="tel:+40700000000" className="font-semibold text-primary hover:underline">+40 700 000 000</a> sau
              trimite un email la <a href="mailto:contact@wolvesbacau.ro" className="font-semibold text-primary hover:underline">contact@wolvesbacau.ro</a>.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Step({ n }: { n: number }) {
  return (
    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
      {n}
    </span>
  );
}

function Field({
  id, label, error, required, type = "text", autoComplete, min, max,
}: {
  id: string; label: string; error?: string; required?: boolean;
  type?: string; autoComplete?: string; min?: number; max?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-foreground">
        {label} {required && <span className="text-primary" aria-hidden>*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        min={min}
        max={max}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`w-full rounded-md border bg-background px-3.5 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 ${error ? "border-destructive focus:border-destructive" : "border-input focus:border-primary"}`}
      />
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1.5 text-xs font-medium text-destructive">{error}</p>
      )}
    </div>
  );
}