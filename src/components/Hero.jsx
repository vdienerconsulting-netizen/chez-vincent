import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-vert text-sable flex flex-col justify-center items-center text-center overflow-hidden scale-[1.3]"
    >
      {/* BIENVENUE - apparaît en fondu doux, arrive de -40px */}
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-[90px] font-[Bayon] mb-4 tracking-wide"
      >
        BIENVENUE
      </motion.h3>

      {/* Titre principal - fondu + apparition fluide */}
      <motion.img
        src="/chez-vincent-titre.png"
        alt="Chez Vincent - Buvette Cocktail"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
        className="w-[60%] md:w-[40%] mt-2"
      />

      {/* Sous-titre - dernier à apparaître, très doux */}
      <motion.img
        src="/chez-vincent-soustitre.png"
        alt="Chez Vincent - sous-titre"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.6, ease: "easeOut" }}
        className="w-[60%] md:w-[40%] mt-4"
      />
    </section>
  );
}
