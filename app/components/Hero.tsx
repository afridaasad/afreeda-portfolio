"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#060D1E] to-[#020812] overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 md:pt-40 grid lg:grid-cols-2 gap-10 items-center">
        
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

          <p className="text-lg md:text-xl font-semibold text-gray-300 mt-3">
            Full Stack Developer
          </p>

          <p className="text-gray-300 mt-5 max-w-lg leading-relaxed text-[15px] md:text-base">
            Software Engineer specializing in full-stack development, backend
            systems, comprehensive testing methodologies, and secure API-based
            architectures. Passionate about building scalable applications with
            robust quality assurance.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 mt-8">
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
            <Image
              src="/me.jpg" 
              alt="Afreeda Asad"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
