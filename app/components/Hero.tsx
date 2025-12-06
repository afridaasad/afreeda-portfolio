"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "Backend Developer",
    "QA Analyst",
    "Software Engineer",
    "Manual Tester",
    "Automation Tester",
  ];

  const [display, setDisplay] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const currentRole = roles[roleIndex % roles.length];

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplay(currentRole.slice(0, display.length + 1));
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplay(currentRole.slice(0, display.length - 1));
      }, speed / 2);
    }

    if (!isDeleting && display === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 900);
    }

    if (isDeleting && display === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, roleIndex]); 

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#060D1E] to-[#020812] overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-4 md:pt-8 grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <p className="text-cyan-300 text-sm mb-2">Hi, I'm</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Afreeda{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9FF] to-[#00E0FF]">
              Asad
            </span>
          </h1>

          {/* Typewriter role */}
          <p className="text-lg md:text-xl font-semibold text-gray-300 mt-3 h-[1.6rem]">
            <span className="inline-block mr-2">{display}</span>
            <span
              className={`inline-block w-1 h-6 align-middle ml-1 bg-cyan-300 ${
                isDeleting ? "opacity-30" : "opacity-100"
              } animate-pulse`}
              aria-hidden="true"
            />
          </p>

          <p className="text-gray-300 mt-5 max-w-lg leading-relaxed text-[15px] md:text-base">
            Software Engineer specializing in full-stack development, backend
            systems, comprehensive testing methodologies, and secure API-based
            architectures. Passionate about building scalable applications with
            robust quality assurance.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="/Afreeda_resume.pdf"
              download="Afreeda_Asad_Resume.pdf"
              className="px-6 py-3 text-[#001] bg-gradient-to-r from-[#00A9FF] to-[#00E0FF] rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/40 transition"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-300 font-semibold hover:bg-cyan-500/10 transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE — SNUG TO TEXT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[230px] h-[230px] md:w-[310px] md:h-[310px] rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_#00e0ff8c]">
            <Image src="/me.png" alt="Afreeda Asad" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
