import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 p-3 bg-sable text-vert rounded-full shadow-lg hover:bg-sable/80 transition"
      aria-label="Changer de thème"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
