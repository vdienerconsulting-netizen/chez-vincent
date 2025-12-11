import React from "react";
import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <section
      id="concept"
      className="bg-sable text-vert flex flex-col items-center px-8 md:px-20 pt-8 md:pt-10 pb-16 md:pb-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[80px] font-[Bayon] mb-10 text-center"
      >
        Le Concept
      </motion.h2>

      <div className="max-w-5xl space-y-16">
        {/* Bloc 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <img
            src="/imageintro1.png"
            alt="Concept 1"
            className="w-full md:w-1/2 rounded-md shadow-md"
          />
          <p className="text-[20px] font-[Raleway] md:w-1/2">
            Chez Vincent, c’est un lieu de convivialité où l’on déguste des cocktails maison
            dans une ambiance provençale et décontractée. Des produits frais, locaux et un
            accueil chaleureux.
          </p>
        </motion.div>

        {/* Bloc 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row-reverse items-center gap-8"
        >
          <img
            src="/imageintro2.png"
            alt="Concept 2"
            className="w-full md:w-1/2 rounded-md shadow-md"
          />
          <p className="text-[20px] font-[Raleway] md:w-1/2">
            La carte évolue au fil des saisons, alliant créativité et savoir-faire pour surprendre
            vos papilles. Venez vivre une expérience gustative unique, à deux pas du port de Toulon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
