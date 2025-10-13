import React from "react";

export default function Testimonials() {
  const avis = [
    { nom: "Clara", texte: "Ambiance incroyable, cocktails excellents !" },
    { nom: "Julien", texte: "Un vrai lieu de vie à Toulon, bravo l’équipe !" },
    { nom: "Sarah", texte: "Des saveurs locales, un accueil chaleureux." },
  ];

  return (
    <section
      id="témoignages"
      className="min-h-screen bg-sable text-vert flex flex-col justify-center items-center px-8 py-20"
    >
      <h2 className="text-[90px] font-[Bayon] mb-10">Témoignages</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
        {avis.map((a, i) => (
          <div
            key={i}
            className="p-6 border border-vert rounded-lg bg-sable shadow-lg"
          >
            <p className="text-[18px] italic mb-4">“{a.texte}”</p>
            <p className="text-right font-[Big Shoulders Text] text-[22px]">
              — {a.nom}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
