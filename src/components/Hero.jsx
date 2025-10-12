import React from "react";

export default function Hero() {
  const scrollToConcept = () => {
    const section = document.getElementById("concept");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-vert text-sable relative">
      <img
        src="/chez-vincent-titre.png"
        alt="Chez Vincent"
        className="w-[700px] max-w-[90%] mb-10"
      />
      <button
        onClick={scrollToConcept}
        className="absolute bottom-10 focus:outline-none"
      >
        <img
          src="/arrow.png"
          alt="flèche vers le bas"
          className="w-20 h-20 mx-auto"
        />
      </button>
    </section>
  );
}
