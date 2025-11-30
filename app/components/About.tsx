"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaShieldAlt, FaCogs, FaBolt } from "react-icons/fa";
import { LuCode, LuShieldCheck, LuPackageCheck } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";

export default function About() {
  const expertise = [
    { label: "REST APIs", icon: <FaGlobe size={22} /> },
    { label: "SDLC/STLC", icon: <LuCode size={22} /> },
    { label: "JWT Auth", icon: <FaShieldAlt size={22} /> },
    { label: "Agile", icon: <FaBolt size={22} /> },
    { label: "Version Control", icon: <LuPackageCheck size={22} /> },
    { label: "WordPress Plugins", icon: <FaCogs size={22} /> },
    { label: "Security Fundamentals", icon: <MdSecurity size={22} /> },
    { label: "Automation", icon: <LuShieldCheck size={22} /> },
  ];

  const roles = [
    "Full Stack Developer",
    "QA & API Tester",
    "Automation & Manual Testing",
    "Backend Engineer",
    "Security Fundamentals",
    "Open Source Contributor",
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-24 md:py-32 bg-gradient-to-b from-[#060D1E] to-[#020812] overflow-hidden"
    >
      {/* grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.07] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* LEFT — ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-white mb-3">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9FF] to-[#00E0FF]">
              Me
            </span>
          </h2>
          <div className="w-28 h-[3px] bg-gradient-to-r from-[#00A9FF] to-[#00E0FF] mx-auto md:mx-0 mb-8"></div>

          {/* Paragraph 1 */}
          <p className="text-gray-300 leading-relaxed mb-6 text-[15px] md:text-base">
            I'm a passionate software engineer with a unique blend of full-stack
            development, backend engineering, quality assurance, and security
            fundamentals. With hands-on experience in building robust
            applications and implementing comprehensive testing strategies,
            I bring a holistic approach to software development.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-300 leading-relaxed mb-8 text-[15px] md:text-base">
            My expertise spans e-commerce platforms, API integrations, automated
            testing frameworks, and secure authentication systems. I'm committed
            to writing clean, maintainable code while ensuring software quality
            through rigorous testing methodologies and staying current with
            emerging technologies.
          </p>

          {/* Roles (pill chips) */}
          <div className="flex flex-wrap gap-3 mt-6">
            {roles.map((role) => (
              <div
                key={role}
                className="px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-300 text-sm flex items-center gap-2 bg-[#071225]/30 backdrop-blur-sm hover:bg-cyan-500/10 transition"
              >
                <LuCode size={16} />
                {role}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — CORE EXPERTISE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A9FF] to-[#00E0FF]">
              Expertise
            </span>
          </h3>

          {/* Expertise Cards */}
          <div className="grid grid-cols-2 gap-5">
            {expertise.map((item) => (
              <motion.div
  key={item.label}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}
  className="p-6 rounded-xl bg-[#081322]/70 border border-white/5 
             hover:border-cyan-400/40 transition 
             shadow-[0_0_20px_rgba(0,255,255,0.04)] 
             hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]"
>
  <div className="text-cyan-300 mb-3">{item.icon}</div>
  <p className="text-gray-200 text-[15px]">{item.label}</p>
</motion.div>

            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
