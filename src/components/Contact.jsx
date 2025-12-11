import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-sable text-vert flex flex-col items-center px-8 md:px-20 pt-8 md:pt-10 pb-16 md:pb-20"
    >
      <h2 className="text-[40px] font-[Bayon] mb-6 text-center">Contact</h2>

      <p className="text-[20px] font-[Raleway] mb-6 text-center leading-relaxed">
        3 rue Jean Aicard — 83000 Toulon
        <br />
        Ouvert 7/7 — 16h à 00h
        <br />
        chezvincent.cocktails@gmail.com
      </p>

      <div className="w-full max-w-5xl mb-6">
        <iframe
          title="Google Map - Chez Vincent"
          src="https://www.google.com/maps?q=3+rue+Jean+Aicard+83000+Toulon&output=embed"
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex items-center justify-center gap-4">
        <a
          href="https://www.instagram.com/chezvincent.cocktails"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/iconeinstagram.png"
            alt="Instagram Chez Vincent"
            className="w-10 h-10 md:w-12 md:h-12 cursor-pointer hover:scale-105 transition-transform"
          />
        </a>
      </div>
    </section>
  );
}
