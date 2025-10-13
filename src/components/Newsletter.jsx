import React from "react";

export default function Newsletter() {
  return (
    <section
      id="contact"
      className="min-h-[50vh] bg-vert text-sable flex flex-col justify-center items-center px-8 py-20"
    >
      <h2 className="text-[70px] font-[Bayon] mb-6">Restez informés</h2>
      <p className="text-[20px] font-[Raleway] mb-8">
        Recevez nos nouveautés, événements et exclusivités par email :
      </p>
      <form className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Votre email"
          className="px-4 py-2 rounded-md text-vert outline-none"
        />
        <button
          type="submit"
          className="bg-sable text-vert font-[Raleway] px-6 py-2 rounded-md hover:bg-sable/80 transition-colors"
        >
          S'inscrire
        </button>
      </form>
    </section>
  );
}
