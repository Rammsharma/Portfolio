import React, { useEffect, useRef } from "react";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import { FaBrain } from "react-icons/fa";

const PROJECTS = [
  {
    id: 1,
    title: "Enterprise RAG Assistant",
    description:
      "Multi-document RAG system with hybrid search and reranking. Ingests 500+ PDFs, achieves 91% retrieval precision, deployed on AWS serverless infrastructure.",
    stack: ["Python", "LangChain", "LangGraph", "Pinecone", "OpenAI API", "AWS Lambda", "React.js", "Docker"],
    github: "https://github.com/Rammsharma/enterprise-rag-assistant",
    highlights: ["91% retrieval precision", "500+ PDFs ingested", "Hybrid search + reranking"],
    accentColor: "#3b82f6",
    featured: true,
  },
  {
    id: 2,
    title: "Quote Comparison AI Platform",
    description:
      "AI-powered document analysis platform using LLM function calling to extract and compare structured data from PDFs. Reduced manual work from 4 hours to 8 minutes.",
    stack: ["Python", "LangChain", "OpenAI API", "PostgreSQL", "Redis", "AWS Lambda", "React.js"],
    github: "https://github.com/Rammsharma/quote-comparison-ai",
    highlights: ["4 hrs → 8 min processing", "Function calling", "Structured extraction"],
    accentColor: "#06b6d4",
    featured: true,
  },
  {
    id: 3,
    title: "Multi-Document Chat Platform",
    description:
      "Scalable chat platform with LangGraph orchestration, Qdrant vector DB, JWT auth, and CloudWatch monitoring. Supports 50+ concurrent users.",
    stack: ["Python", "LangGraph", "Qdrant", "OpenAI API", "PostgreSQL", "Redis", "Docker", "JWT"],
    github: "https://github.com/Rammsharma/multi-doc-chat",
    highlights: ["50+ concurrent users", "LangGraph orchestration", "JWT auth"],
    accentColor: "#8b5cf6",
    featured: false,
  },
  {
    id: 4,
    title: "AI Customer Support Agent",
    description:
      "Production AI agent using function calling to automate 68% of Tier-1 support tickets. Cut resolution time from 18 minutes to 3.5 minutes.",
    stack: ["Python", "LangChain", "OpenAI API", "DynamoDB", "AWS Lambda", "API Gateway"],
    github: "https://github.com/Rammsharma/ai-support-agent",
    highlights: ["68% ticket automation", "18 min → 3.5 min", "Function calling"],
    accentColor: "#10b981",
    featured: false,
  },
];

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #0a0f1e 0%, #020817 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal mb-14">
          <p className="text-sm font-mono font-medium mb-2" style={{ color: "#60a5fa" }}>
            04. projects
          </p>
          <h2 className="section-title text-3xl font-bold text-white">AI Projects</h2>
          <p className="text-slate-400 mt-4 max-w-xl">
            Production-grade AI systems built with modern LLM frameworks and cloud infrastructure.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="reveal card-dark rounded-2xl p-6 flex flex-col relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
              />

              {/* Featured badge */}
              {project.featured && (
                <div
                  className="absolute top-4 right-4 flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: `${project.accentColor}18`,
                    border: `1px solid ${project.accentColor}35`,
                    color: project.accentColor,
                  }}
                >
                  <FiStar size={10} />
                  Featured
                </div>
              )}

              {/* Top */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${project.accentColor}18`, color: project.accentColor }}
                >
                  <FaBrain size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-tight pr-16">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs px-2.5 py-1 rounded-md font-medium"
                    style={{
                      background: `${project.accentColor}12`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}25`,
                    }}
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <FiGithub size={15} />
                  GitHub
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium transition-all px-4 py-2 rounded-lg"
                  style={{
                    background: `${project.accentColor}15`,
                    border: `1px solid ${project.accentColor}30`,
                    color: project.accentColor,
                  }}
                >
                  <FiExternalLink size={15} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
