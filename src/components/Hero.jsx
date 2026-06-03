import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
import { FaBrain } from "react-icons/fa";
import profileImg from "./image/photo-ram.jpeg";

const TYPING_TEXTS = ["AI Engineer", "GenAI Developer", "LLM Engineer", "RAG Specialist"];

function useTypingEffect(texts, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  return display;
}

const STATS = [
  { value: "4+", label: "AI Projects" },
  { value: "500+", label: "PDFs Ingested" },
  { value: "91%", label: "Retrieval Precision" },
  { value: "68%", label: "Ticket Automation" },
];

export default function Hero() {
  const typedText = useTypingEffect(TYPING_TEXTS);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020817 0%, #0a0f1e 50%, #020817 100%)' }}
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
              style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#34d399' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Ramkumar</span>
              <br />
              <span className="text-white">Sharma</span>
            </h1>

            {/* Typewriter */}
            <div className="text-2xl sm:text-3xl font-semibold mb-6 h-10 flex items-center justify-center lg:justify-start gap-1">
              <span style={{ color: '#60a5fa' }}>{typedText}</span>
              <span className="cursor-blink text-blue-400" style={{ fontSize: '1.5rem' }}>|</span>
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Building Production-Grade <span style={{ color: '#60a5fa' }}>AI & LLM Applications</span>.
              Specializing in RAG pipelines, LangChain, and AWS serverless AI systems at{" "}
              <span style={{ color: '#34d399' }}>Claribel.ai</span>.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <Link to="projects" smooth={true} offset={-70} duration={500}>
                <button className="btn-primary">
                  <FaBrain size={16} />
                  View Projects
                </button>
              </Link>
              <a
                href="/Ramkumar_Sharma_AI_Engineer_Resume.pdf"
                download="Ramkumar_Sharma_AI_Engineer_Resume.pdf"
                className="btn-outline"
              >
                <FiDownload size={16} />
                Download CV
              </a>
              <Link to="contact" smooth={true} offset={-70} duration={500}>
                <button className="btn-outline">
                  <FiMail size={16} />
                  Contact Me
                </button>
              </Link>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a href="https://github.com/Rammsharma" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <FiGithub size={18} />
              </a>
              <a href="https://linkedin.com/in/ramkumar-sharma" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <FiLinkedin size={18} />
              </a>
              <a href="mailto:ramkumarsha93835@gmail.com"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Right — profile image */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6 animate-fade-in">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', padding: '3px', borderRadius: '50%' }}>
                <div className="w-full h-full rounded-full" style={{ background: '#020817' }} />
              </div>
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden"
                style={{ border: '3px solid transparent', background: 'linear-gradient(#020817, #020817) padding-box, linear-gradient(135deg, #3b82f6, #06b6d4) border-box' }}>
                <img
                  src={profileImg}
                  alt="Ramkumar Sharma"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', color: 'white', boxShadow: '0 4px 15px rgba(59,130,246,0.4)' }}>
                <FaBrain size={12} />
                AI Engineer
              </div>
            </div>

            {/* Location */}
            <p className="text-slate-500 text-sm flex items-center gap-1">
              <span>📍</span> Muzaffarnagar, UP, India
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="card-dark rounded-xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-slate-400 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <Link to="about" smooth={true} offset={-70} duration={500} className="cursor-pointer animate-float text-slate-500 hover:text-slate-300 transition-colors">
            <FiArrowDown size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
}
