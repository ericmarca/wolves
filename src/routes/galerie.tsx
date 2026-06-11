import { createFileRoute } from "@tanstack/react-router";
import { Facebook } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import baby from "@/assets/baby-wolves.jpg";
import junior from "@/assets/junior-wolves.jpg";
import elite from "@/assets/elite-wolves.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Wolves Basketball Academy Bacău" },
      { name: "description", content: "Imagini de la antrenamentele, meciurile, turneele și cantonamentele Wolves Basketball Academy din Bacău." },
      { property: "og:title", content: "Galerie — Wolves Basketball Academy" },
      { property: "og:description", content: "Momente surprinse pe teren — antrenamente, meciuri și competiții." },
    ],
  }),
  component: GaleriePage,
});

const photos = [
  { src: g1, alt: "Minge de baschet pe terenul de joc" },
  { src: g2, alt: "Echipa Wolves într-un huddle pe teren" },
  { src: elite, alt: "Jucători Wolves în acțiune sub coș" },
  { src: g3, alt: "Tânăr jucător execută o aruncare la coș" },
  { src: junior, alt: "Antrenament tactic pentru grupa Junior Wolves" },
  { src: g4, alt: "Antrenor coordonează echipa în pauza meciului" },
  { src: g5, alt: "Trofeu și minge de baschet în vestiar" },
  { src: baby, alt: "Copii mici învățând baschet — Baby Wolves" },
  { src: g6, alt: "Sala de sport pregătită pentru antrenament" },
];

function GaleriePage() {
  return (
    <>
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Galerie</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Momente surprinse pe teren.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Antrenamente, meciuri, turnee și cantonamente — câteva imagini din viața de zi cu zi a haitei.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5">
          {photos.map((p, i) => (
            <li key={i} className="group overflow-hidden rounded-lg bg-card">
              <img
                src={p.src}
                alt={p.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl border border-border/60 bg-card p-8 text-center sm:p-12">
          <Facebook className="mx-auto h-10 w-10 text-primary" aria-hidden />
          <h2 className="mt-4 text-2xl font-black text-foreground sm:text-3xl">Mai multe pe Facebook</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Postăm cele mai noi imagini și clipuri pe pagina noastră oficială de Facebook.
          </p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
          >
            <Facebook className="h-4 w-4" aria-hidden /> Urmărește-ne pe Facebook
          </a>
        </div>
      </section>
    </>
  );
}