import React, { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setOffset(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-vert text-sable overflow-hidden relative"
    >
      <h2
        className="text-[90px] font-[Bayon] opacity-0 animate-fadeInSlow tracking-widest"
        style={{ transform: `translateY(${offset * 0.4}px)` }}
      >
        BIENVENUE
      </h2>

      <img
        src="/chez-vincent-titre.png"
        alt="Chez Vincent"
        className="w-[1000px] max-w-[90%] mt-8 transition-transform duration-500 ease-out"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
    </section>
  );
}
