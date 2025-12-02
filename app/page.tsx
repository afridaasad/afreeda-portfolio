import dynamic from "next/dynamic";
THIS_WILL_BREAK_BUILD

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";



export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
    </>
  );
}
