import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#020817' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0d1526',
            color: '#e2e8f0',
            border: '1px solid rgba(59,130,246,0.3)',
          },
        }}
      />
    </div>
  );
}

export default App;
