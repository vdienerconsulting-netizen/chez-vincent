import React, { useState } from "react";

export default function Carte() {
  const categories = ["Cocktails", "Bière & Vin", "Spiritueux", "Soft", "Snacking"];
  const [activeCategory, setActiveCategory] = useState("Cocktails");

  const menuItems = {
    "Cocktails": [
       { n: "Pomelo Spritz", d: "Apérol, liqueur de pamplemousse maison, rosé pétillant", p: "10€" },
    { n: "Highball Pomme", d: "Cordial de pomme, eau-de-vie de poire, eau pétillante", p: "8€" },
    { n: "Almond", d: "Sirop d’orgeat salé, citron vert, rhums du monde", p: "12€" },
    { n: "Framboise", d: "Cordial framboise maison, vin blanc, pisco", p: "12€" },
    { n: "Basilic", d: "Tequila basilic, liqueur d’abricot maison, citron vert", p: "10€" },
    { n: "Highball Pomme 0%", d: "Cordial pomme maison, eau pétillante", p: "6€" },
    { n: "Floral", d: "Sirop de rose, citron vert, bissap maison", p: "6€" },
    { n: "Framboise 0%", d: "Cordial framboise, rosé sans alcool, infusion pomme", p: "6€" },
    { n: "M&T", d: "Melonade, farigoule, eau pétillante", p: "8€" },
    ],
    "Bière & Vin": [
      { n: "Bière artisanale locale", d: "Brasserie de Provence", p: "6€" },
      { n: "Vin rosé de Provence", d: "Verre", p: "5€" },
    ],
    "Spiritueux": [
      { n: "Pastis de Marseille", d: "Classique provençal", p: "4€" },
      { n: "Gin Tonic", d: "Gin local et tonic", p: "8€" },
    ],
    "Soft": [
      { n: "Jus de fruits artisanaux", d: "Orange, pomme, abricot", p: "4€" },
      { n: "Eau pétillante", d: "Bouteille 50cl", p: "3€" },
    ],
    "Snacking": [
      { n: "Planche mixte", d: "Charcuteries, fromages", p: "12€" },
      { n: "Tapenade et croûtons", d: "Olives noires et vertes", p: "8€" },
    ],
  };

  return (
    <section id="carte" className="bg-vert text-sable py-20 px-8 md:px-20 transition-all duration-1000 ease-in-out">
      <h2 className="text-[90px] font-[Bayon] text-center mb-10">La Carte</h2>

      {/* Onglets */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 border border-sable rounded-full text-sable transition-colors duration-500 ${
              activeCategory === category ? "bg-sable text-vert" : "hover:bg-sable/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Liste */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {menuItems[activeCategory].map((item, index) => (
          <div key={index} className="flex justify-between border-b border-sable/40 pb-2">
            <div>
              <p className="font-[Big Shoulders Text] text-[24px]">{item.n}</p>
              <p className="text-[16px] text-sable/80">{item.d}</p>
            </div>
            <p className="text-[20px] font-[Raleway]">{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
