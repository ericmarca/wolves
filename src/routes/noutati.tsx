import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import g2 from "@/assets/gallery-2.jpg";
import g5 from "@/assets/gallery-5.jpg";
import elite from "@/assets/elite-wolves.jpg";

export const Route = createFileRoute("/noutati")({
  head: () => ({
    meta: [
      { title: "Noutăți — Wolves Basketball Academy Bacău" },
      { name: "description", content: "Rezultate, meciuri, evenimente și campanii de recrutare la Wolves Basketball Academy Bacău." },
      { property: "og:title", content: "Noutăți — Wolves Basketball Academy" },
      { property: "og:description", content: "Ultimele știri și rezultate ale haitei Wolves." },
    ],
  }),
  component: NoutatiPage,
});

const articles = [
  {
    image: elite,
    category: "Rezultate",
    date: "Mai 2026",
    title: "Elite Wolves — victorie clară în derby-ul local",
    excerpt: "Echipa noastră Elite Wolves s-a impus categoric în meciul de weekend, cu un joc dominant pe ambele jumătăți de teren.",
  },
  {
    image: g5,
    category: "Competiții",
    date: "Aprilie 2026",
    title: "Junior Wolves la turneul regional din Moldova",
    excerpt: "Grupa Junior Wolves a participat la turneul regional, aducând acasă experiență de neprețuit și două medalii.",
  },
  {
    image: g2,
    category: "Recrutare",
    date: "Martie 2026",
    title: "Campanie de recrutare pentru sezonul 2026 – 2027",
    excerpt: "Continuăm să primim copii pasionați în haita Wolves. Înscrierile pentru noul sezon sunt deschise.",
  },
];

function NoutatiPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Noutăți</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Ce se întâmplă în haită.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.title} className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-colors hover:border-primary/40">
              <div className="overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
                  <span className="text-primary">{a.category}</span>
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" aria-hidden /> {a.date}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-bold leading-snug text-foreground">{a.title}</h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Citește articolul <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}