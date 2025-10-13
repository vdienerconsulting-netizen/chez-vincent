import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-vert text-sable flex flex-col justify-center items-center text-center overflow-hidden"
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-[90px] font-[Bayon] mb-4 tracking-wide"
      >
        BIENVENUE
      </motion.h3>
      <motion.img
        src="/chez-vincent-titre.png"
        alt="Chez Vincent - Buvette Cocktail"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        className="w-[60%] md:w-[40%] mt-6"
      />
    </section>
  );
}
