import React, { useEffect, useRef } from "react";
import { FiBriefcase, FiMapPin, FiCalendar, FiExternalLink } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const EXPERIENCE = [
  {
    role: "AI Engineer",
    subtitle: "Full-Stack AI Application Development",
    company: "Claribel.ai",
    companyUrl: "https://claribel.ai",
    duration: "June 2025 – Present",
    location: "San Francisco Bay Area, CA (Remote)",
    type: "Full-time",
    current: true,
    points: [
      "Build RAG pipelines using LangChain, Pinecone, OpenAI API",
      "Develop AI-powered product features with Python backend",
      "Implement prompt engineering strategies for LLM applications",
      "Build React.js frontends for AI-powered user interfaces",
      "Deploy serverless AI endpoints using AWS Lambda + API Gateway",
      "Implement JWT-based Authentication for AI product modules",
      "Participate in LLM evaluation and model selection cycles",
    ],
    stack: ["Python", "LangChain", "OpenAI API", "Pinecone", "AWS Lambda", "React.js", "JWT"],
  },
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #020817 0%, #0a0f1e 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal mb-14">
          <p className="text-sm font-mono font-medium mb-2" style={{ color: "#60a5fa" }}>
            03. experience
          </p>
          <h2 className="section-title text-3xl font-bold text-white">Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(180deg, #3b82f6, rgba(59,130,246,0.1))" }}
          />

          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.company}
              className="reveal relative sm:pl-16 mb-8"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div
                className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-full items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  boxShadow: "0 0 20px rgba(59,130,246,0.4)",
                }}
              >
                <FiBriefcase className="text-white" size={18} />
              </div>

              {/* Card */}
              <div
                className="card-dark rounded-2xl p-6 sm:p-8"
                style={{
                  background: "linear-gradient(145deg, #0d1526, #111d35)",
                  border: "1px solid rgba(59,130,246,0.15)",
                }}
              >
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      {exp.current && (
                        <span
                          className="flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            background: "rgba(16,185,129,0.12)",
                            border: "1px solid rgba(16,185,129,0.25)",
                            color: "#34d399",
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm">{exp.subtitle}</p>
                  </div>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm font-semibold hover:underline transition-colors"
                    style={{ color: "#60a5fa" }}
                  >
                    {exp.company}
                    <FiExternalLink size={14} />
                  </a>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <FiCalendar size={14} style={{ color: "#60a5fa" }} />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <FiMapPin size={14} style={{ color: "#06b6d4" }} />
                    {exp.location}
                  </span>
                </div>

                {/* Points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <FaCheckCircle
                        size={14}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "#10b981" }}
                      />
                      <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
