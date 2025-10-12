import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative text-center">
      <motion.img
        src="/CHEZ VINCENT + Sous titre GREEN.png"
        alt="Chez Vincent - Buvette Cocktail"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-3/4 md:w-1/2"
      />
      <a
        href="#presentation"
        className="absolute bottom-10 text-vert/70 hover:text-vert"
      >
        ↓
      </a>
    </section>
  );
}
