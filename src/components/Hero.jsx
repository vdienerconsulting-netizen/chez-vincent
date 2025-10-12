import React, { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToConcept = () => {
    const section = document.getElementById("concept");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-vert text-sable relative transition-all duration-1000 ease-in-out">
      <img
        src="/chez-vincent-titre.png"
        alt="Chez Vincent"
        className="w-[1050px] max-w-[90%] mb-10 transition-all duration-700 ease-in-out"
      />
      <button
        onClick={scrollToConcept}
        className="absolute bottom-10 focus:outline-none text-sable"
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
