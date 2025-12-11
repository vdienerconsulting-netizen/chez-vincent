import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ y: "30vh", scale: 1.3, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      className="bg-vert text-sable flex flex-col items-center justify-center text-center overflow-hidden py-16 md:py-20"
    >
      {/* Titre */}
      <motion.img
        src="/chez-vincent-titre.png"
        alt="Chez Vincent - Buvette Cocktail"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 1.6, delay: 0.3, ease: "easeOut" }}
        className="w-[60%] md:w-[40%] mt-2"
      />

      {/* Sous-titre */}
      <motion.img
        src="/chez-vincent-soustitre.png"
        alt="Chez Vincent - sous-titre"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: -5 }}
        transition={{ duration: 1.6, delay: 0.8, ease: "easeOut" }}
        className="w-[60%] md:w-[40%] mt-2"
      />
    </motion.section>
  );
}
