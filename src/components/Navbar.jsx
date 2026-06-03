import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { FaBrain } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(2, 8, 23, 0.97)" : "rgba(2, 8, 23, 0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(59,130,246,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}
            >
              <FaBrain className="text-white text-sm" />
            </div>
            <span className="font-bold text-white text-lg font-mono">
              ram<span style={{ color: "#60a5fa" }}>.ai</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/Ramkumar_Sharma_AI_Engineer_Resume.pdf"
              download="Ramkumar_Sharma_AI_Engineer_Resume.pdf"
              className="ml-2 btn-primary text-sm py-2 px-4"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(2, 8, 23, 0.98)",
            borderColor: "rgba(59,130,246,0.15)",
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 cursor-pointer transition-all"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/Ramkumar_Sharma_AI_Engineer_Resume.pdf"
              download="Ramkumar_Sharma_AI_Engineer_Resume.pdf"
              className="btn-primary text-sm py-3 mt-2 justify-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
