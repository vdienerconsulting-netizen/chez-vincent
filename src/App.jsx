import React from "react";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Carte from "./components/Carte";

function App() {
  return (
    <div className="font-[Raleway] scroll-smooth">
      <Hero />
      <Presentation />
      <Carte />
    </div>
  );
}

export default App;
