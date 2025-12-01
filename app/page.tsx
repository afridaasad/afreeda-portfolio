import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"), { ssr: true });
const About = dynamic(() => import("./components/About"), { ssr: true });
const Skills = dynamic(() => import("./components/Skills"), { ssr: true });
const Experience = dynamic(() => import("./components/Experience"), { ssr: true });


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
