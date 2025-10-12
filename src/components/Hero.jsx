import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-vert text-sable relative">
      <img
        src="/chez-vincent-titre.png"
        alt="Chez Vincent"
        className="w-[600px] max-w-[80%] mb-10"
      />
      <a href="#concept" className="absolute bottom-10 animate-bounce">
        <img
          src="/arrow.png"
          alt="flèche vers le bas"
          className="w-16 h-16 mx-auto filter drop-shadow-lg"
        />
      </a>
    </section>
  );
}
