import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-vert text-sable flex flex-col justify-center items-center text-center"
    >
      <h3 className="text-[90px] font-[Bayon] mb-4 tracking-wide">BIENVENUE</h3>
      <img
        src="/chez-vincent-titre.png"
        alt="Chez Vincent - Buvette Cocktail"
        className="w-[60%] md:w-[40%] mb-10"
      />
    </section>
  );
}
