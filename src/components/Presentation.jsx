import React from "react";

export default function Presentation() {
  return (
    <section
      id="concept"
      className="min-h-screen bg-sable text-vert flex flex-col items-center justify-center px-8 md:px-20 py-20"
    >
      <h2 className="text-[90px] font-[Bayon] mb-10">Le Concept</h2>
      <div className="max-w-5xl space-y-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/imageintro1.png"
            alt="Concept 1"
            className="w-full md:w-1/2 rounded-md shadow-md"
          />
          <p className="text-[20px] font-[Raleway] md:w-1/2">
            Chez Vincent, c’est un lieu de convivialité où l’on déguste des cocktails maison dans
            une ambiance provençale et décontractée. Des produits frais, locaux et un accueil
            chaleureux.
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src="/imageintro2.png"
            alt="Concept 2"
            className="w-full md:w-1/2 rounded-md shadow-md"
          />
          <p className="text-[20px] font-[Raleway] md:w-1/2">
            La carte évolue au fil des saisons, alliant créativité et savoir-faire pour surprendre
            vos papilles. Venez vivre une expérience gustative unique, à deux pas du port de Toulon.
          </p>
        </div>
      </div>
    </section>
  );
}
