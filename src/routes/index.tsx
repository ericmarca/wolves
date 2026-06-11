import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Dumbbell, MapPin, ShieldCheck, Users } from "lucide-react";
import hero from "@/assets/hero-basketball.jpg";
import coachMentor from "@/assets/coach-mentor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wolves Basketball Academy — Baschet pentru copii în Bacău" },
      { name: "description", content: "Academia de baschet din Bacău pentru copii și juniori. Antrenament gratuit pentru începători. Tehnică, disciplină, spirit de echipă." },
      { property: "og:title", content: "Wolves Basketball Academy — Bacău" },
      { property: "og:description", content: "Formăm campioni pe teren și caractere pentru viață. Înscrie-te la un antrenament gratuit." },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: ShieldCheck, title: "Antrenori dedicați", desc: "Profesioniști cu experiență, care îți ghidează copilul pas cu pas." },
  { icon: Users, title: "Spirit de echipă", desc: "Colegialitate, respect și prietenii care durează dincolo de teren." },
  { icon: Dumbbell, title: "Dezvoltare fizică & mentală", desc: "Coordonare, rezistență, încredere în sine și autodisciplină." },
  { icon: Calendar, title: "Grupe pentru toate vârstele", desc: "Programe adaptate de la 5 la 18 ani — inițiere până la performanță." },
];

const stats = [
  { value: "2021", label: "Anul fondării" },
  { value: "3+", label: "Grupe de vârstă" },
  { value: "100%", label: "Pasiune pentru copii" },
  { value: "Bacău", label: "Acasă la noi" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Tineri jucători de baschet în acțiune pe teren"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/80 to-background" />

        <div className="mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <MapPin className="h-3.5 w-3.5" aria-hidden /> Bacău · Fondat 2021
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              Formăm campioni pe teren și{" "}
              <span className="text-primary">caractere pentru viață.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Academia de baschet pentru copii și juniori din Bacău unde înveți tehnică, disciplină și spirit de echipă.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/inscrieri"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
              >
                Înscrie-te la un antrenament gratuit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card/60 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
              >
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="beneficii-heading">
        <h2 id="beneficii-heading" className="sr-only">De ce Wolves</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <article key={b.title} className="group rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <b.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-card" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Date despre club</h2>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border/60 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-10 text-center">
              <div className="text-3xl font-black text-primary sm:text-4xl">{s.value}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENTOR SECTION */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={coachMentor}
            alt="Antrenor îndrumând un tânăr jucător sub coșul de baschet"
            width={1024}
            height={1024}
            className="aspect-square w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Misiunea noastră</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Mai mult decât un sport. Un mod de a crește.
          </h2>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            La Wolves credem că baschetul este cea mai bună școală de viață pentru copii. Aici învață să muncească,
            să-și asume responsabilități, să piardă cu eleganță și să câștige cu modestie.
          </p>
          <Link
            to="/despre"
            className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline"
          >
            Citește povestea clubului <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-gradient-to-b from-background to-card">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Prima ședință este pe noi.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg">
            Programează un antrenament gratuit și vezi cum se simte copilul tău în echipa Wolves.
          </p>
          <Link
            to="/inscrieri"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
          >
            Programează antrenamentul
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
