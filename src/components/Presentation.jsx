import React, { useEffect, useState } from "react";

export default function Presentation() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="concept"
      className="min-h-screen bg-sable text-vert flex flex-col justify-center items-center px-8 md:px-20 py-20 space-y-20 transition-all duration-700 ease-in-out"
    >
      <div className="max-w-5xl text-center fade-in-up">
        <h2 className="text-[90px] font-[Bayon] mb-10">Le Concept</h2>
        <p className="text-[20px] font-[Raleway] leading-relaxed">
          Chez Vincent, la convivialité provençale rencontre l’art du cocktail.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 slide-up">
        <img
          src="/imageintro1.png"
          alt="Cocktails provençaux"
          className="w-full md:w-1/3 rounded-lg shadow-lg transition-transform duration-700"
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        />
        <p className="text-[20px] font-[Raleway] md:w-1/2">
          Un lieu chaleureux où les saveurs du Sud se mêlent à la créativité.
        </p>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-10 slide-up">
        <img
          src="/imageintro2.png"
          alt="Ambiance conviviale"
          className="w-full md:w-1/3 rounded-lg shadow-lg transition-transform duration-700"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        />
        <p className="text-[20px] font-[Raleway] md:w-1/2">
          Cocktails maison, bons produits, et une ambiance qui sent le soleil.
        </p>
      </div>
    </section>
  );
}
