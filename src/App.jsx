import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects"; // from HEAD
import Experience from "./components/Experience"; // renamed from Experiance
import Skills from "./components/Skills"; // from HEAD
import PortFolio from "./components/PortFolio"; // from origin/main
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <br />
        <br />
        <br />
        <br />
        <Skills />
        <br />
        <Experience />
        <br />
        <Projects />

        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
export default App;
