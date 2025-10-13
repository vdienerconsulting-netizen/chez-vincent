import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Admin() {
  const [cocktails, setCocktails] = useState([]);
  const [newCocktail, setNewCocktail] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const fetchCocktails = async () => {
    const { data, error } = await supabase.from("cocktails").select("*");
    if (!error) setCocktails(data);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  const handleImageUpload = async (file) => {
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`cocktails/${file.name}`, file);
    if (error) console.error(error);
    return data ? `https://hczokteiyosnjinxeggq.supabase.co/storage/v1/object/public/${data.path}` : null;
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    let imageUrl = null;
    if (newCocktail.image) {
      imageUrl = await handleImageUpload(newCocktail.image);
    }
    const { error } = await supabase.from("cocktails").insert([
      {
        name: newCocktail.name,
        description: newCocktail.description,
        price: newCocktail.price,
        category: newCocktail.category,
        image_url: imageUrl,
      },
    ]);
    if (!error) {
      setNewCocktail({ name: "", description: "", price: "", category: "", image: null });
      fetchCocktails();
    }
  };

  return (
    <div className="min-h-screen bg-sable text-vert p-8">
      <h2 className="text-[80px] font-[Bayon] text-center mb-10">Admin — Cocktails</h2>
      <form
        onSubmit={handleAdd}
        className="flex flex-col gap-4 bg-vert/10 p-6 rounded-md max-w-xl mx-auto"
      >
        <input
          type="text"
          placeholder="Nom"
          value={newCocktail.name}
          onChange={(e) => setNewCocktail({ ...newCocktail, name: e.target.value })}
          className="p-3 border border-vert rounded-md bg-transparent text-vert"
          required
        />
        <textarea
          placeholder="Description"
          value={newCocktail.description}
          onChange={(e) => setNewCocktail({ ...newCocktail, description: e.target.value })}
          className="p-3 border border-vert rounded-md bg-transparent text-vert"
        />
        <input
          type="text"
          placeholder="Prix"
          value={newCocktail.price}
          onChange={(e) => setNewCocktail({ ...newCocktail, price: e.target.value })}
          className="p-3 border border-vert rounded-md bg-transparent text-vert"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setNewCocktail({ ...newCocktail, image: e.target.files[0] })}
        />
        <button className="bg-vert text-sable py-2 rounded-md hover:bg-vert/80">
          Ajouter
        </button>
      </form>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cocktails.map((c) => (
          <div key={c.id} className="border border-vert p-4 rounded-md">
            {c.image_url && (
              <img src={c.image_url} alt={c.name} className="w-full h-40 object-cover mb-2" />
            )}
            <h3 className="font-[Big Shoulders Text] text-[28px] uppercase">{c.name}</h3>
            <p className="text-[18px]">{c.description}</p>
            <p className="text-[20px]">{c.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
