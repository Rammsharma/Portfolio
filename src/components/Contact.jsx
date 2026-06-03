import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";

const CONTACT_INFO = [
  {
    icon: <FiMail size={18} />,
    label: "Email",
    value: "ramkumarsha93835@gmail.com",
    href: "mailto:ramkumarsha93835@gmail.com",
    color: "#3b82f6",
  },
  {
    icon: <FiLinkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/ramkumar-sharma",
    href: "https://linkedin.com/in/ramkumar-sharma",
    color: "#06b6d4",
  },
  {
    icon: <FiGithub size={18} />,
    label: "GitHub",
    value: "github.com/Rammsharma",
    href: "https://github.com/Rammsharma",
    color: "#8b5cf6",
  },
  {
    icon: <FiMapPin size={18} />,
    label: "Location",
    value: "Muzaffarnagar, UP, India",
    href: null,
    color: "#10b981",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

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

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/bnlljjkb", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const inputBase = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#e2e8f0",
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "0.875rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    fontFamily: "Inter, sans-serif",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #020817 0%, #0a0f1e 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal mb-14">
          <p className="text-sm font-mono font-medium mb-2" style={{ color: "#60a5fa" }}>
            05. contact
          </p>
          <h2 className="section-title text-3xl font-bold text-white">Get In Touch</h2>
          <p className="text-slate-400 mt-4 max-w-xl">
            Open to AI Engineer roles and interesting collaborations. Let's build something intelligent together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — contact info */}
          <div className="reveal space-y-4">
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className="card-dark rounded-xl p-4 flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${info.color}18`, color: info.color }}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-slate-500 text-xs">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-200 text-sm font-medium hover:underline"
                      style={{ color: info.color }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-slate-200 text-sm font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability card */}
            <div
              className="rounded-xl p-5 mt-2"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.05))",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-slate-300 text-sm">
                Interested in AI Engineer, GenAI Developer, or LLM Engineer roles. Remote-friendly.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl p-6 sm:p-8 space-y-5"
              style={{
                background: "linear-gradient(145deg, #0d1526, #111d35)",
                border: "1px solid rgba(59,130,246,0.12)",
              }}
            >
              <h3 className="text-white font-semibold text-lg mb-1">Send a Message</h3>

              {/* Name */}
              <div>
                <label className="block text-slate-400 text-xs mb-1.5">Full Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  style={inputBase}
                  placeholder="Your full name"
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(59,130,246,0.5)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-slate-400 text-xs mb-1.5">Email Address</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                  style={inputBase}
                  placeholder="your@email.com"
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(59,130,246,0.5)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-400 text-xs mb-1.5">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  style={{ ...inputBase, resize: "none" }}
                  placeholder="Tell me about your project or opportunity..."
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(59,130,246,0.5)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center"
                style={isSubmitting ? { opacity: 0.7, cursor: "not-allowed" } : {}}
              >
                <FiSend size={16} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
