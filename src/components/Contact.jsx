import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-sable text-vert flex flex-col items-center justify-center px-8 md:px-20 py-20"
    >
      <h2 className="text-[90px] font-[Bayon] mb-10">Nous Trouver</h2>
      <p className="text-[22px] font-[Raleway] mb-6 text-center">
        📍 14 rue Chevalier Paul — 83000 Toulon  
        <br />
        🕒 Ouvert 7/7 — 17h à 1h
      </p>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=14+rue+Chevalier+Paul+83000+Toulon&output=embed"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}
