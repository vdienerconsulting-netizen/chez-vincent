import React, { useState } from "react";

export default function Carte() {
  const [tab, setTab] = useState("cocktails");

  const cocktails = [
    { n: "Pomelo Spritz", d: "Apérol, liqueur de pamplemousse maison, rosé pétillant", p: "10€" },
    { n: "Highball Pomme", d: "Cordial de pomme, eau-de-vie de poire, eau pétillante", p: "8€" },
    { n: "Almond", d: "Sirop d’orgeat salé, citron vert, rhums du monde", p: "12€" },
    { n: "Framboise", d: "Cordial framboise maison, vin blanc, pisco", p: "12€" },
    { n: "Basilic", d: "Tequila basilic, liqueur d’abricot maison, citron vert", p: "10€" },
  ];

  const sansAlcool = [
    { n: "Highball Pomme 0%", d: "Cordial pomme maison, eau pétillante", p: "6€" },
    { n: "Floral", d: "Sirop de rose, citron vert, bissap maison", p: "6€" },
    { n: "Framboise 0%", d: "Cordial framboise, rosé sans alcool, infusion pomme", p: "6€" },
    { n: "M&T", d: "Melonade, farigoule, eau pétillante", p: "8€" },
  ];

  const menus = { cocktails, sansAlcool };

  return (
    <section id="carte" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-sable mb-8">La Carte</h2>
      <div className="flex justify-center gap-4 mb-8">
        {["cocktails", "sansAlcool"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`px-5 py-2 rounded-full border ${
              tab === id ? "bg-terracotta text-noir" : "border-vert text-vert"
            }`}
          >
            {id === "cocktails" ? "Cocktails" : "Sans alcool"}
          </button>
        ))}
      </div>
      <ul className="max-w-xl mx-auto text-left">
        {menus[tab].map((item, i) => (
          <li key={i} className="mb-4 border-b border-sable/20 pb-2">
            <div className="flex justify-between text-sable">
              <span className="font-semibold">{item.n}</span>
              <span>{item.p}</span>
            </div>
            <p className="text-sable/70 text-sm">{item.d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
