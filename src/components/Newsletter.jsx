import React from "react";

export default function Newsletter() {
  return (
<section
  id="newsletter"
  className="min-h-[60vh] bg-vert text-sable flex flex-col justify-center items-center px-8 py-24"
>
  <h2 className="text-[70px] font-[Bayon] mb-4">Restez informés</h2>
  <p className="text-[20px] font-[Raleway] mb-4 text-center max-w-2xl">
    Recevez les dernières actualités de la buvette : nouveaux cocktails, soirées
    à thème, événements exclusifs. Abonnez-vous pour ne rien manquer !
  </p>
  <form className="flex flex-col sm:flex-row items-center gap-4 mt-6">
    <input
      type="email"
      placeholder="Votre email"
      className="px-4 py-3 rounded-md text-vert outline-none w-[280px] sm:w-[350px]"
    />
    <button
      type="submit"
      className="bg-sable text-vert font-[Raleway] px-6 py-3 rounded-md hover:bg-sable/80 transition-colors"
    >
      S'inscrire
    </button>
  </form>
</section>

  );
}
