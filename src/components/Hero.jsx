import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-vert text-sable flex flex-col justify-center items-center text-center overflow-hidden scale-[1.7]" // ↑ 30% plus grand
    >
      {/* BIENVENUE - apparaît en premier */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: -200 }}
        transition={{ duration: 1 }}
        className="text-[90px] font-[Bayon] mb-2 tracking-wide"
      >
        BIENVENUE
      </motion.h3>

      {/* Titre principal */}
      <motion.img
        src="/chez-vincent-titre.png"
        alt="Chez Vincent - Buvette Cocktail"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="w-[60%] md:w-[40%] mt-4"
      />

      {/* Sous-titre qui arrive après */}
      <motion.img
        src="/chez-vincent-soustitre.png"
        alt="Chez Vincent - sous-titre"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: -150 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="w-[60%] md:w-[40%] mt-2"
      />
    </section>
  );
}
