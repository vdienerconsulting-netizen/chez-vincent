import React from "react";

export default function Story() {
  return (
    <section
      id="histoire"
      className="min-h-screen bg-vert text-sable flex flex-col justify-center items-center px-8 py-20"
    >
      <h2 className="text-[90px] font-[Bayon] mb-10">Notre Histoire</h2>
      <div className="max-w-4xl text-center space-y-6 font-[Raleway] text-[20px]">
        <p>
          “Chez Vincent” est né d’une envie simple : créer un lieu où les
          Toulonnais se retrouvent, partagent et trinquent dans une atmosphère
          authentique et décontractée.
        </p>
        <p>
          Des cocktails inspirés du terroir provençal, une carte courte mais
          soignée, et un accueil toujours souriant — voilà notre recette.
        </p>
      </div>
    </section>
  );
}
