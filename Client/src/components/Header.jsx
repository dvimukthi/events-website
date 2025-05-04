import React, { useState } from "react";
import logo from "../assets/Logo.png";
import hamburger from "../assets/Icons/hamburger.png";
import close from "../assets/Icons/close.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-4 lg:px-16 py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-8 w-auto" />

        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#overview" className="hover:text-secondary">
            Overview
          </a>
          <a href="#speakers" className="hover:text-secondary">
            Speakers
          </a>
          <a href="#agenda" className="hover:text-secondary">
            Agenda
          </a>
          <a href="#about" className="hover:text-secondary">
            About
          </a>
        </nav>

        <a
          href="#register"
          className="text-sm border border-secondary text-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-white transition duration-300 hidden md:inline-block"
        >
          Register Now
        </a>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white ml-4"
        >
          <img src={hamburger} alt="open" size={28} />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <button onClick={() => setMenuOpen(false)}>
            <img src={close} alt="close" size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-6 px-6 py-10 text-gray font-roboto">
          <a
            href="#overview"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white"
          >
            Overview
          </a>
          <a
            href="#speakers"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white"
          >
            Speakers
          </a>
          <a
            href="#agenda"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white"
          >
            Agenda
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-white"
          >
            About
          </a>
        <div className="mt-[20px] w-full">
          <a
            href="#register"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center border border-secondary text-secondary py-3 rounded-full hover:bg-secondary hover:text-white transition"
          >
            Register Now
          </a>
        </div>
        </nav>
      </div>
    </header>
  );
};


export default Header;


