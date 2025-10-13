import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Carte() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      const { data, error } = await supabase.from("cocktails").select("*");
      if (!error) setCocktails(data);
    };
    fetchCocktails();
  }, []);

  return (
    <section
      id="carte"
      className="min-h-screen bg-sable text-vert flex flex-col justify-center items-center px-8 md:px-20 py-20"
    >
      <h2 className="text-[90px] font-[Bayon] mb-10">La Carte</h2>
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cocktails.map((item) => (
          <div key={item.id} className="flex justify-between border-b border-vert/40 pb-2">
            <div className="flex items-start gap-4">
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
              )}
              <div>
                <p className="font-[Big Shoulders Text] text-[26px] uppercase">{item.name}</p>
                <p className="text-[18px] text-vert/80 font-[Raleway]">{item.description}</p>
              </div>
            </div>
            <p className="text-[22px] font-[Raleway]">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
