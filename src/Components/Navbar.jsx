import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-sable/90 text-vert py-4 shadow-md z-50 backdrop-blur-md">
      <div className="flex justify-center space-x-8 text-lg font-[Raleway]">
        {["Accueil", "Concept", "Histoire", "Carte", "Témoignages", "Contact"].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={700}
            offset={-80}
            className="cursor-pointer hover:text-terracotta transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
