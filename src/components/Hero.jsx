import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-vert text-sable flex flex-col items-center justify-center text-center overflow-hidden py-16 md:py-20"
    >

      {/* Titre */}
      <motion.img
        src="/chez-vincent-titre.png"
        alt="Chez Vincent - Buvette Cocktail"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
        className="w-[60%] md:w-[40%] mt-2"
      />

      {/* Sous-titre */}
      <motion.img
        src="/chez-vincent-soustitre.png"
        alt="Chez Vincent - sous-titre"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: -5 }}
        transition={{ duration: 2, delay: 1.6, ease: "easeOut" }}
        className="w-[60%] md:w-[40%] mt-2"
      />
    </section>
  );
}
