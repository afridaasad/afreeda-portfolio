import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Header = dynamic(() => import("@/components/Header"), { ssr: true });



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      

    </>
  );
}
