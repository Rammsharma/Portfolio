import React, { useEffect, useRef } from "react";
import { FiCode, FiDatabase, FiCloud, FiAward } from "react-icons/fi";
import { FaBrain } from "react-icons/fa";

const HIGHLIGHTS = [
  { icon: <FaBrain size={20} />, label: "GenAI & LLM", color: "#3b82f6" },
  { icon: <FiDatabase size={20} />, label: "RAG Pipelines", color: "#06b6d4" },
  { icon: <FiCloud size={20} />, label: "AWS Serverless", color: "#10b981" },
  { icon: <FiCode size={20} />, label: "Full-Stack AI", color: "#8b5cf6" },
];

const EDUCATION = [
  {
    degree: "MCA — Master of Computer Applications",
    school: "DIT University, Roorkee",
    year: "2023 – 2025",
    icon: "🎓",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    school: "Quantum University, Roorkee",
    year: "2020 – 2023",
    icon: "🎓",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #020817 0%, #0a0f1e 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-14">
          <p className="text-sm font-mono font-medium mb-2" style={{ color: "#60a5fa" }}>
            01. about
          </p>
          <h2 className="section-title text-3xl font-bold text-white">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <div className="reveal">
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              I'm an AI Engineer specializing in{" "}
              <span style={{ color: "#60a5fa" }}>Generative AI</span>,{" "}
              <span style={{ color: "#06b6d4" }}>Retrieval-Augmented Generation (RAG)</span>, and{" "}
              <span style={{ color: "#34d399" }}>LLM application development</span>. Currently building
              AI-powered products at{" "}
              <a
                href="https://claribel.ai"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#34d399", textDecoration: "underline" }}
              >
                Claribel.ai
              </a>
              , I design and deploy production-grade AI systems using LangChain, LangGraph, Pinecone,
              Qdrant, OpenAI API, and AWS serverless infrastructure.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Passionate about solving real business problems through intelligent, scalable AI
              applications that deliver measurable impact.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${h.color}18`, color: h.color }}
                  >
                    {h.icon}
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{h.label}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <span className="text-slate-500 text-sm">Languages:</span>
              <span className="tech-badge">English — Intermediate</span>
              <span className="tech-badge">Hindi — Intermediate</span>
            </div>
          </div>

          {/* Right — education */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="flex items-center gap-2 mb-6">
              <FiAward style={{ color: "#60a5fa" }} />
              <h3 className="font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="card-dark rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{edu.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white text-sm leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-400 text-sm mt-1">{edu.school}</p>
                      <span
                        className="inline-block mt-2 text-xs px-3 py-1 rounded-full font-mono"
                        style={{
                          background: "rgba(59,130,246,0.1)",
                          border: "1px solid rgba(59,130,246,0.2)",
                          color: "#93c5fd",
                        }}
                      >
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Currently at */}
            <div
              className="mt-6 p-5 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.05))",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Currently
                </span>
              </div>
              <p className="text-white text-sm font-medium">AI Engineer @ Claribel.ai</p>
              <p className="text-slate-400 text-xs mt-1">
                San Francisco Bay Area, CA (Remote) · June 2025 – Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
