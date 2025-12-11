import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Carte() {
  const [activeCategory, setActiveCategory] = useState("Cocktails");

  const categories = ["Cocktails", "Bières & Vins", "Spiritueux", "Softs", "Snacking"];

  const menuItems = {
    Cocktails: [
      { n: "POMELO SPRITZ", d: "Apérol, liqueur de pamplemousse maison, rosé la roquière pétillant", p: "10€" },
      { n: "HIGHBALL POMME", d: "Cordial de pomme maison, eau-de-vie de poire, eau pétillante", p: "8€" },
      { n: "M & T", d: "Melonade, farigoule, eau pétillante", p: "8€" },
      { n: "ALMOND", d: "Sirop d’orgeat salé, citron vert, rhums du monde", p: "12€" },
      { n: "FRAMBOISE", d: "Cordial de framboise maison, vin blanc la roquière, pisco", p: "12€" },
      { n: "BASILIC", d: "Tequila infusée au basilic, liqueur d’abricot maison, jus de citron vert", p: "10€" },
      { n: "0% HIGHBALL POMME", d: "Cordial de pomme maison, eau pétillante", p: "6€" },
      { n: "0% FLORAL", d: "Sirop de rose, jus de citron vert modifié, bissap maison", p: "6€" },
      { n: "0% FRAMBOISE", d: "Cordial de framboise, rosé sans alcool, infusion de pomme", p: "6€" },
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
