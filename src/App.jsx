import React from "react";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Carte from "./components/Carte";
import Contact from "./components/Contact";
import SideMenu from "./components/SideMenu"; // Menu latéral

function App() {
  return (
    <div className="font-[Raleway] scroll-smooth">
      <Hero />
      <SideMenu />
      <Presentation />
      <Carte />
      <Contact />
    </div>
  );
}

export default App;
