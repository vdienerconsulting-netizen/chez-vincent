import React from "react";

export default function Presentation() {
  return (
    <section
      id="concept"
      className="bg-vert text-sable py-20 px-8 md:px-20 space-y-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[80px] font-[Bayon] mb-10">Le Concept</h2>
        <p className="text-[20px] font-[Raleway] leading-relaxed">
          Chez Vincent, la convivialité provençale rencontre l’art du cocktail.
          Une buvette urbaine inspirée des traditions du Sud, où chaque boisson
          est une invitation à partager, rire et savourer la Méditerranée.
        </p>
      </div>

      {/* Bloc image gauche / texte droite */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="/imageintro1.png"
          alt="Cocktails provençaux"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <p className="text-[20px] font-[Raleway] md:w-1/2">
          Entre les pierres chaudes de Toulon et le parfum des herbes de
          Provence, notre bar célèbre le goût du partage, dans un décor chaleureux
          et coloré.
        </p>
      </div>

      {/* Bloc image droite / texte gauche */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <img
          src="/imageintro2.png"
          alt="Ambiance conviviale"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <p className="text-[20px] font-[Raleway] md:w-1/2">
          Nos cocktails sont faits maison, à base de produits frais et locaux.
          Ici, on prend le temps de vivre et de trinquer dans la bonne humeur.
        </p>
      </div>
    </section>
  );
}
