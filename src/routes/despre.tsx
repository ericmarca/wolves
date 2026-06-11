import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HandHeart, Hammer, ShieldCheck, Sparkles, Users } from "lucide-react";
import coachMentor from "@/assets/coach-mentor.jpg";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre Noi — Wolves Basketball Academy Bacău" },
      { name: "description", content: "Wolves Basketball Academy este un club privat din Bacău dedicat dezvoltării copiilor prin baschet — colaborare, disciplină și încredere în sine." },
      { property: "og:title", content: "Despre Wolves Basketball Academy" },
      { property: "og:description", content: "Povestea, misiunea și valorile clubului de baschet pentru copii și juniori din Bacău." },
    ],
  }),
  component: DesprePage,
});

const values = [
  { icon: ShieldCheck, title: "Respect", desc: "Pentru coechipieri, pentru adversari, pentru sport." },
  { icon: Hammer, title: "Muncă", desc: "Rezultatele apar din repetiție, sudoare și consecvență." },
  { icon: Sparkles, title: "Perseverență", desc: "Nu ne oprim la primul obstacol. Mergem mai departe." },
  { icon: Users, title: "Spirit de echipă", desc: "Împreună suntem mai puternici decât oricare individ." },
  { icon: HandHeart, title: "Fair-play", desc: "Câștigăm și pierdem cu eleganță, mereu cu capul sus." },
  { icon: Award, title: "Performanță", desc: "Aspirăm constant să devenim mai buni decât ieri." },
];

function DesprePage() {
  return (
    <>
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Despre Noi</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Un club fondat din pasiunea pentru copii și pentru baschet.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={coachMentor}
            alt="Antrenor și tânăr jucător pe terenul de baschet"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">Povestea clubului</h2>
          <div className="mt-6 space-y-5 text-base text-muted-foreground sm:text-lg">
            <p>
              <span className="font-semibold text-foreground">Wolves Basketball Academy</span> este un club sportiv
              dedicat dezvoltării copiilor prin baschet, promovând colaborarea, disciplina și încrederea în sine.
            </p>
            <p>
              Clubul activează în municipiul Bacău și oferă programe de inițiere și performanță pentru copii și juniori,
              de la primele dribblinguri și până la pregătirea pentru competiții.
            </p>
            <p>
              Credem că sportul de echipă este cea mai bună școală de viață — și ne dorim ca fiecare lup tânăr care
              intră în sala noastră să plece de aici mai puternic, mai încrezător și mai bun.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Misiune</p>
          <blockquote className="mt-5 text-2xl font-black leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            „Creăm un mediu în care fiecare copil își descoperă potențialul prin sport."
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Valorile noastre</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Principii pe care le ducem mai departe în fiecare antrenament.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="rounded-xl border border-border/60 bg-card p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center sm:p-12">
          <h3 className="text-2xl font-black text-foreground sm:text-3xl">Vrei să ne cunoști mai bine?</h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Vino la o ședință gratuită și descoperă atmosfera din sala Wolves alături de noi.
          </p>
          <Link
            to="/inscrieri"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
          >
            Înscrie-te acum
          </Link>
        </div>
      </section>
    </>
  );
}