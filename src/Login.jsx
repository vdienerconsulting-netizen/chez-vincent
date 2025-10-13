import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setMessage("Erreur : " + error.message);
    else setMessage("Un lien magique a été envoyé à votre adresse e-mail !");
  };

  return (
    <div className="min-h-screen bg-sable text-vert flex flex-col items-center justify-center">
      <h2 className="text-[60px] font-[Bayon] mb-6">Connexion</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border border-vert rounded-md bg-transparent text-vert"
          required
        />
        <button
          type="submit"
          className="bg-vert text-sable py-2 rounded-md hover:bg-vert/80 transition-all"
        >
          Se connecter
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
