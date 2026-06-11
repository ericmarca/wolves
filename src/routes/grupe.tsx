import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Target } from "lucide-react";
import baby from "@/assets/baby-wolves.jpg";
import junior from "@/assets/junior-wolves.jpg";
import elite from "@/assets/elite-wolves.jpg";

export const Route = createFileRoute("/grupe")({
  head: () => ({
    meta: [
      { title: "Grupe & Program — Wolves Basketball Academy Bacău" },
      { name: "description", content: "Trei grupe de baschet pentru copii și juniori în Bacău: Baby Wolves (5-7 ani), Junior Wolves (8-11 ani) și Elite Wolves (12-18 ani)." },
      { property: "og:title", content: "Grupe & Program — Wolves Basketball Academy" },
      { property: "og:description", content: "Programe de baschet adaptate fiecărei vârste — de la inițiere prin joc până la pregătire pentru competiții." },
    ],
  }),
  component: GrupePage,
});

const groups = [
  {
    name: "Baby Wolves",
    age: "5 – 7 ani",
    level: "Inițiere",
    schedule: "Luni & Miercuri · 17:00 – 18:00",
    location: "Sala de sport, Bacău",
    desc: "Inițiere prin joc și coordonare. Copiii descoperă mingea, echilibrul și bucuria mișcării în grup.",
    image: baby,
    color: "from-primary/30 to-primary/0",
  },
  {
    name: "Junior Wolves",
    age: "8 – 11 ani",
    level: "Tehnică & joc de echipă",
    schedule: "Marți & Joi · 18:00 – 19:30",
    location: "Sala de sport, Bacău",
    desc: "Tehnică individuală — dribbling, pase, aruncare — și primele noțiuni de tactică și joc de echipă.",
    image: junior,
    color: "from-primary/40 to-primary/0",
  },
  {
    name: "Elite Wolves",
    age: "12 – 18 ani",
    level: "Performanță",
    schedule: "Luni / Miercuri / Vineri · 19:00 – 21:00",
    location: "Sala de sport, Bacău",
    desc: "Pregătire pentru competiții, dezvoltare fizică și mentală, mentalitate de competitor.",
    image: elite,
    color: "from-primary/50 to-primary/0",
  },
];

function GrupePage() {
  return (
    <>
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Grupe & Program</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Trei grupe. O singură haită.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Programe adaptate fiecărei vârste — de la primele dribblinguri până la pregătirea pentru competiții.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-4 py-20 sm:px-6 lg:px-8">
        {groups.map((g, i) => (
          <article
            key={g.name}
            className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={g.image}
                alt={`${g.name} — grupa ${g.age}`}
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-tr ${g.color} mix-blend-multiply`} aria-hidden />
            </div>
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {g.age}
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">{g.name}</h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">{g.desc}</p>

              <dl className="mt-8 space-y-4 border-l-2 border-primary/40 pl-5">
                <div className="flex items-start gap-3">
                  <Target className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nivel</dt>
                    <dd className="mt-0.5 text-foreground">{g.level}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Program</dt>
                    <dd className="mt-0.5 text-foreground">{g.schedule}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Locație</dt>
                    <dd className="mt-0.5 text-foreground">{g.location}</dd>
                  </div>
                </div>
              </dl>

              <Link
                to="/inscrieri"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
              >
                Înscrie-te la {g.name}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}