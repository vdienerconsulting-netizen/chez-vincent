import React, { useState } from "react";

export default function Carte() {
  const [activeCategory, setActiveCategory] = useState("Cocktails");

  const categories = ["Cocktails", "Bières & Vins", "Spiritueux", "Softs", "Snacking"];

  const menuItems = {
    Cocktails: [
      { n: "SPRITZ", d: "Apérol, Prosecco, Eau gazeuse, Orange", p: "9€" },
      { n: "GIN BASIL SMASH", d: "Gin, Citron, Basilic, Sucre", p: "10€" },
      { n: "MOJITO", d: "Rhum, Menthe, Citron vert, Sucre, Eau gazeuse", p: "9€" },
      { n: "NEGRONI", d: "Gin, Campari, Vermouth rouge", p: "10€" },
      { n: "MARGARITA", d: "Tequila, Triple sec, Citron vert", p: "10€" },
      { n: "COSMOPOLITAN", d: "Vodka, Triple sec, Cranberry, Citron vert", p: "9€" },
      { n: "DAIQUIRI", d: "Rhum, Citron vert, Sucre de canne", p: "9€" },
      { n: "PINA COLADA", d: "Rhum, Ananas, Coco", p: "10€" },
      { n: "SEX ON THE BEACH", d: "Vodka, Cranberry, Orange, Pêche", p: "9€" },
      { n: "MOJITO FRAISE", d: "Rhum, Menthe, Citron vert, Fraise", p: "10€" },
      { n: "VIRGIN MOJITO", d: "Citron vert, Menthe, Sucre, Eau gazeuse", p: "7€" },
      { n: "SUNSET", d: "Jus d’orange, Grenadine, Ananas", p: "7€" },
    ],
    "Bières & Vins": [
      { n: "Bière pression 25cl", d: "Blonde locale", p: "4€" },
      { n: "Bière pression 50cl", d: "Blonde locale", p: "7€" },
      { n: "Vin rosé de Provence", d: "Verre 12cl / Bouteille 75cl", p: "5€ / 20€" },
      { n: "Vin rouge", d: "Verre 12cl / Bouteille 75cl", p: "5€ / 20€" },
      { n: "Vin blanc", d: "Verre 12cl / Bouteille 75cl", p: "5€ / 20€" },
      { n: "Prosecco", d: "Verre 12cl", p: "6€" },
    ],
    Spiritueux: [
      { n: "WHISKY", d: "Jack Daniel’s, Jameson, Chivas", p: "7€" },
      { n: "RHUM", d: "Havana, Diplomatico, Captain Morgan", p: "7€" },
      { n: "GIN", d: "Bombay Sapphire, Tanqueray", p: "7€" },
      { n: "VODKA", d: "Absolut, Grey Goose", p: "7€" },
      { n: "TEQUILA", d: "Jose Cuervo, Patrón", p: "7€" },
      { n: "PASTIS", d: "Ricard, 51", p: "3.5€" },
    ],
    Softs: [
      { n: "JUS DE FRUITS", d: "Orange, Pomme, Ananas, Tomate", p: "4€" },
      { n: "SODA", d: "Coca, Perrier, Orangina, Ice Tea", p: "3.5€" },
      { n: "EAU PLATE / GAZEUSE", d: "Bouteille 50cl", p: "3€" },
      { n: "CAFÉ / THÉ / INFUSION", d: "Servi chaud ou glacé", p: "2€" },
    ],
    Snacking: [
      { n: "PLANCHA MIXTE", d: "Charcuteries & Fromages de Provence", p: "12€" },
      { n: "PLANCHA FROMAGE", d: "Sélection de fromages affinés", p: "10€" },
      { n: "PLANCHA CHARCUTERIE", d: "Produits locaux", p: "10€" },
      { n: "TAPENADE", d: "Verte ou noire, croûtons", p: "6€" },
      { n: "OLIVES", d: "Assortiment provençal", p: "4€" },
      { n: "CHIPS ARTISANALES", d: "Sel, herbes de Provence", p: "3€" },
    ],
  };

  return (
    <section
      id="carte"
      className="min-h-screen bg-sable text-vert flex flex-col justify-center items-center px-8 md:px-20 py-20"
    >
      <h2 className="text-[90px] font-[Bayon] mb-10">La Carte</h2>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 border border-vert rounded-full text-vert font-[Raleway] text-lg transition-all duration-300 ${
              activeCategory === cat ? "bg-vert text-sable" : "hover:bg-vert hover:text-sable"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        {menuItems[activeCategory].map((item, index) => (
          <div key={index} className="flex justify-between border-b border-vert/40 pb-2">
            <div>
              <p className="font-[Big Shoulders Text] text-[26px] uppercase">{item.n}</p>
              <p className="text-[18px] text-vert/80 font-[Raleway]">{item.d}</p>
            </div>
            <p className="text-[22px] font-[Raleway]">{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
