import React, { useEffect, useRef } from "react";
import { FiCode, FiDatabase, FiCloud, FiLayout, FiTool } from "react-icons/fi";
import { FaBrain } from "react-icons/fa";

const SKILL_CATEGORIES = [
  {
    icon: <FaBrain size={18} />,
    title: "AI & GenAI",
    color: "#3b82f6",
    skills: [
      "LLM", "RAG", "Prompt Engineering", "Embeddings",
      "Semantic Search", "Hybrid Search", "Reranking",
      "LLM Evaluation", "Function Calling", "AI System Design",
    ],
  },
  {
    icon: <FiCode size={18} />,
    title: "Frameworks & Languages",
    color: "#8b5cf6",
    skills: [
      "LangChain", "LangGraph", "OpenAI API",
      "Python", "Node.js", "JavaScript",
    ],
  },
  {
    icon: <FiDatabase size={18} />,
    title: "Vector DBs & Storage",
    color: "#06b6d4",
    skills: [
      "Pinecone", "PostgreSQL", "DynamoDB", "MongoDB", "AWS S3",
    ],
  },
  {
    icon: <FiCloud size={18} />,
    title: "Cloud & DevOps",
    color: "#10b981",
    skills: [
      "AWS Lambda", "API Gateway", "CloudWatch",
      "Docker", "CI/CD (GitHub Actions)", "Serverless Architecture",
    ],
  },
  {
    icon: <FiLayout size={18} />,
    title: "Frontend & APIs",
    color: "#f59e0b",
    skills: [
      "React.js", "REST API", "JSON",
      "Authentication", "Authorization (JWT)",
    ],
  },
  {
    icon: <FiTool size={18} />,
    title: "Tools",
    color: "#ec4899",
    skills: ["Git", "GitHub", "SQL", "Jira"],
  },
];

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #0a0f1e 0%, #020817 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal mb-14">
          <p className="text-sm font-mono font-medium mb-2" style={{ color: "#60a5fa" }}>
            02. skills
          </p>
          <h2 className="section-title text-3xl font-bold text-white">
            Technical Skills
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl">
            Tools and technologies I use to build production-grade AI systems.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className="reveal card-dark rounded-xl p-6"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${cat.color}18`, color: cat.color }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-white text-sm">{cat.title}</h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-lg font-mono font-medium transition-all duration-200 cursor-default"
                    style={{
                      background: `${cat.color}12`,
                      border: `1px solid ${cat.color}30`,
                      color: `${cat.color}dd`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${cat.color}25`;
                      e.currentTarget.style.borderColor = `${cat.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${cat.color}12`;
                      e.currentTarget.style.borderColor = `${cat.color}30`;
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
