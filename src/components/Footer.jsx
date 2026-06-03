import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaBrain } from "react-icons/fa";

const SOCIAL = [
  { icon: <FiGithub size={18} />, href: "https://github.com/Rammsharma", label: "GitHub" },
  { icon: <FiLinkedin size={18} />, href: "https://linkedin.com/in/ramkumar-sharma", label: "LinkedIn" },
  { icon: <FiMail size={18} />, href: "mailto:ramkumarsha93835@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{
        background: "#020817",
        borderColor: "rgba(59,130,246,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}
            >
              <FaBrain className="text-white" size={12} />
            </div>
            <span className="font-bold text-white text-sm font-mono">
              ram<span style={{ color: "#60a5fa" }}>.ai</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Ramkumar Sharma · AI Engineer
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6">
          Built with React.js + Vite · Deployed on Netlify
        </p>
      </div>
    </footer>
  );
}
