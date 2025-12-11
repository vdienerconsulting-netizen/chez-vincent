import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Carte() {
  const [activeCategory, setActiveCategory] = useState("Cocktails");

  const categories = ["Cocktails", "Bières & Vins", "Spiritueux", "Softs", "Snacking"];

  const menuItems = {
    Cocktails: [
      { n: "MARIUS", d: "lavande, pêche, grappa", p: "12€" },
      { n: "FANNY", d: "fleur de figuier, abricot, armagnac", p: "12€" },
      { n: "LE TRUC ROSE", d: "framboise, vin rosé la Roquière, rose", p: "8€" },
      { n: "POMPOMPOPOMME", d: "pomme, london dry gin, eau pétillante", p: "8€" },
      { n: "CECI EST UNE FEUILLE", d: "basilic, ron cubain, poivre de timut", p: "10€" },
      { n: "J'AI PLUS D'PLACE", d: "café, whisky de seigle, noix de Saint-Jean", p: "10€" },
      { n: "0% POMPOMPOPOMME", d: "pomme, genièvre, eau pétillante", p: "6€" },
      { n: "0% LE TRUC ROSE", d: "framboise, jus de raisin blanc, rose", p: "6€" },
      { n: "0% ???", d: "???", p: "6€" },
    ],
    "Bières & Vins": [],
    Spiritueux: [],
    Softs: [],
    Snacking: [],
  };

  return (
    <section
      id="carte"
      className="bg-vert text-sable flex flex-col items-center px-8 md:px-20 pt-8 md:pt-10 pb-16 md:pb-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[80px] font-[Bayon] mb-8 text-center"
      >
        La Carte
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 border border-sable rounded-full text-sable font-[Raleway] text-lg transition-all duration-300 ${
              activeCategory === cat ? "bg-sable text-vert" : "hover:bg-sable hover:text-vert"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        {menuItems[activeCategory].map((item, index) => (
          <div key={index} className="flex justify-between border-b border-sable/40 pb-2">
            <div>
              <p className="font-[Big Shoulders Text] text-[26px] uppercase">{item.n}</p>
              <p className="text-[18px] text-sable/80 font-[Raleway]">{item.d}</p>
            </div>
            <p className="text-[22px] font-[Raleway]">{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
