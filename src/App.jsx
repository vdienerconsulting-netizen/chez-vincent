import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Presentation from "./Presentation";
import Carte from "./Carte";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="bg-vert min-h-screen">
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
      >
        <Presentation />
        <Carte />
        <Contact />
      </motion.div>
    </div>
  );
}
