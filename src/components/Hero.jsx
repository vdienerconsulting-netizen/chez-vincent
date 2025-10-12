import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative text-center">
      <motion.img
        src="/Logo Insta GREEN.png"
        alt="Logo Chez Vincent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-48 md:w-60 mb-4"
      />
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-sable"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Bienvenue Chez Vincent
      </motion.h1>
      <p className="text-lg italic text-sable/90 mt-3">Buvette cocktail — Toulon</p>
      <a href="#presentation" className="absolute bottom-10 text-sable/80 hover:text-sable">
        ↓
      </a>
    </section>
  );
}
