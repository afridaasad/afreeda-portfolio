"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";





export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
  <Hero />
  <About />
  <Skills />
  <Experience />
  <Projects />
  <Certifications />
  <Contact />
  <Footer />
</div>

  );
}
