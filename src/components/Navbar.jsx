import React, { useEffect, useRef, useState } from "react";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./icons";
import logo from "../image/logotip.png";
import ScrollReveal from "scrollreveal";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const titleRef = useRef(null);
  const titlRef = useRef(null); 
  
  const { t, i18n } = useTranslation();

  const [click, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle language selection
  const [currentLang, setCurrentLang] = useState(i18n.language || 'ru');

  // ScrollReveal effect
  useEffect(() => {
    ScrollReveal().reveal(titlRef.current, {
      origin: "top",
      distance: "80px",
      duration: 1000,
      delay: 300,
      easing: "ease",
      reset: false,
    });
    ScrollReveal().reveal(titleRef.current, {
      origin: "top",
      distance: "80px",
      duration: 1000,
      delay: 300,
      easing: "ease",
      reset: false,
    });
  }, []);

  // Toggle functions
  const handleClick = () => setClick(!click);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    setIsOpen(false); // Close dropdown after selecting language
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar w-full xl:px-12 lg:px-8 md:px-0">
      <div ref={titlRef} className="nav-container flex items-center justify-between">
        {/* Logo */}
        <a className="nav-logo md:pl-5">
          <img src={logo} alt="Logo" width={110} height={100} onClick={() => scrollToSection("navbar")} />
        </a>

        {/* Menu */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={() => scrollToSection("home")}>
              {t("navbar1")}
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links" onClick={() => scrollToSection("usluga")}>
              {t("navbar2")}
            </a>
          </li>
          <li className="nav-item">
            <a href="#doctors" className="nav-links" onClick={() => scrollToSection("vrachi")}>
              {t("navbar3")}
            </a>
          </li>
          <li className="nav-item">
            <a href="#reviews" className="nav-links" onClick={() => scrollToSection("otziv")}>
              {t("navbar4")}
            </a>
          </li>
          <li className="nav-item">
            <a href="#contacts" className="nav-links" onClick={() => scrollToSection("kontakti")}>
              {t("navbar5")}
            </a>
          </li>
        </ul>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="btn4 bg-gradient-to-r from-purple-400 to-blue-500 text-white px-2 py-2 rounded-full shadow-lg flex items-center space-x-2 hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 ease-in-out"
          >
            <span>{currentLang ? currentLang.toUpperCase() : 'RU'}</span>
            <svg
              className={`w-4 h-4 transform ${isOpen ? "rotate-180" : ""} transition-transform`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute btn4 mt-2 -right-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-20">
              <ul className="py-2">
                <li>
                  <button
                    onClick={() => changeLanguage("ru")}
                    className="inline-flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-purple-100 transition-all"
                  >
                    <svg
                      className="h-3.5 w-3.5 rounded-full mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <rect width="512" height="170.67" fill="#fff" />
                      <rect width="512" height="341.33" y="170.67" fill="#0039a6" />
                      <rect width="512" height="512" y="341.33" fill="#d52b1e" />
                    </svg>
                    RU
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => changeLanguage("uz")}
                    className="inline-flex items-center  w-full px-4 py-2 text-left text-gray-700 hover:bg-purple-100 transition-all"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 rounded-full mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <rect y="170.67" width="512" height="170.67" fill="#fff" />
                      <rect y="341.33" width="512" height="170.67" fill="#1eb53a" />
                      <rect y="0" width="512" height="170.67" fill="#0099b5" />
                      <rect y="160" width="512" height="10.67" fill="#d52b1e" />
                      <rect y="341.33" width="512" height="10.67" fill="#d52b1e" />
                      <g fill="#fff">
                        <circle cx="62" cy="85" r="28" />
                        <circle cx="72" cy="85" r="21.33" fill="#0099b5" />
                        <g transform="translate(110, 65)">
                          <circle cx="20" cy="0" r="5" />
                          <circle cx="40" cy="0" r="5" />
                          <circle cx="60" cy="0" r="5" />
                          <circle cx="80" cy="0" r="5" />
                          <circle cx="100" cy="0" r="5" />
                          <circle cx="120" cy="0" r="5" />
                          <circle cx="10" cy="20" r="5" />
                          <circle cx="30" cy="20" r="5" />
                          <circle cx="50" cy="20" r="5" />
                          <circle cx="70" cy="20" r="5" />
                          <circle cx="90" cy="20" r="5" />
                          <circle cx="20" cy="40" r="5" />
                          <circle cx="40" cy="40" r="5" />
                          <circle cx="60" cy="40" r="5" />
                          <circle cx="80" cy="40" r="5" />
                          <circle cx="30" cy="60" r="5" />
                          <circle cx="50" cy="60" r="5" />
                          <circle cx="70" cy="60" r="5" />
                          <circle cx="40" cy="80" r="5" />
                          <circle cx="60" cy="80" r="5" />
                          <circle cx="50" cy="100" r="5" />
                        </g>
                      </g>
                    </svg>
                    UZ
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="nav-icon" onClick={handleClick}>
          {click ? <HamburgetMenuClose /> : <HamburgetMenuOpen />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
