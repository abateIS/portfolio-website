import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    document.body.classList.toggle("dark-mode", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="header"
    >
      <nav className="container">
        {/* ✅ Ensure Name & Title are Left-Aligned */}
        <div className="title-container">
          <h1 className="title">Abate Alemu</h1>
          <p className="subtitle">Developer</p>
        </div>

        {/* ✅ Ensure Hamburger Icon Works Properly on Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* ✅ Navigation Menu (Hidden on Mobile) */}
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="/About" onClick={() => setIsMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </li>
          {/* Dark Mode Toggle */}
          <li>
            <button onClick={toggleDarkMode} className="dark-mode-button">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
