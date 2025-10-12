import React from "react";

export default function Infos() {
  return (
    <footer id="infos" className="py-20 px-6 border-t border-vert/20 text-center">
      <h2 className="text-3xl font-bold text-vert mb-6">Infos pratiques</h2>
      <p className="text-vert/80 mb-4">📍 14 rue Chevalier Paul, 83000 Toulon</p>
      <p className="text-vert/80 mb-4">🕐 Ouvert 7/7 — 17h à 01h</p>
      <p className="text-vert/80 mb-4">📞 +33 6 00 00 00 00</p>
      <p className="text-vert/80 mb-4">
        📧 <a href="mailto:test@example.com" className="underline">test@example.com</a>
      </p>
      <p className="text-vert/80">
        📸 <a href="https://www.instagram.com/chezvincent.bar" target="_blank" className="underline">@chezvincent.bar</a>
      </p>
      <iframe
        className="w-full max-w-3xl h-64 mx-auto mt-8 rounded-lg border border-sable/20"
        src="https://www.google.com/maps?q=14%20rue%20Chevalier%20Paul%2083000%20Toulon&output=embed"
        loading="lazy"
      ></iframe>
      <p className="text-vert/60 text-sm mt-8">© 2025 Chez Vincent — Buvette Cocktail · Toulon</p>
    </footer>
  );
}
