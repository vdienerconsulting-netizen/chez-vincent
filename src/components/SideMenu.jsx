import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SideMenu() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500); // ⏱️ délai après Hero
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    "Newsletter",
    "Partenaires",
    "Galerie photo",
    "Avant-goût de la prochaine carte",
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="fixed top-[30%] left-0 z-40 bg-sable/90 backdrop-blur-md t
