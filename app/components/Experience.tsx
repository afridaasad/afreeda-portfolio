"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Codysssey",
      year: "2023 - Present",
      points: [
        "Developed full-stack web applications using Node.js, React, and MongoDB",
        "Implemented REST APIs with JWT authentication and Razorpay payment integration",
        "Conducted API testing and regression testing to ensure software quality",
        "Collaborated with cross-functional teams in Agile environment",
      ],
    },
    {
      role: "Full Stack Web Developer Intern",
      company: "Accenture",
      year: "2023",
      points: [
        "Built responsive web applications using React.js and Tailwind CSS",
        "Performed manual and API testing using Postman and Thunder Client",
        "Participated in code reviews and contributed to testing documentation",
        "Worked with databases including MySQL and PostgreSQL",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Deoband Community Wikimedia",
      year: "2022",
      points: [
        "Developed WordPress plugins and custom themes",
        "Conducted black-box testing and bug tracking",
        "Implemented version control workflows using Git",
        "Collaborated with designers to create user-friendly interfaces",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24">
      {/* Floating Dots Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-[floatdots_8s_linear_infinite] opacity-40">
          <Image src="/grid.svg" alt="grid" fill className="object-cover opacity-30" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-cyan-400">
        Experience
      </h2>
      <div className="w-40 h-1 bg-cyan-400 mx-auto mt-3 rounded-full shadow-[0_0_20px_#00e0ff]"></div>

      <div className="relative max-w-6xl mx-auto mt-20 px-6">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-cyan-300 to-cyan-700 shadow-[0_0_25px_#00e0ff] rounded-full"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative w-full md:w-[47%] py-8 px-6 mb-16
              bg-white/5 backdrop-blur-lg 
              border border-cyan-500/20 
              rounded-2xl shadow-[0_0_35px_rgba(0,224,255,0.25)]
              hover:shadow-[0_0_45px_rgba(0,224,255,0.45)]
              hover:scale-[1.02] transition-all duration-300
              ${index % 2 === 0 ? "md:ml-auto md:text-left" : "md:mr-auto md:text-left"}
            `}
          >
            {/* Node Pulse */}
            <div
              className="absolute top-12 left-1/2 -translate-x-1/2 
              w-6 h-6 bg-gradient-to-br from-cyan-300 to-cyan-500 
              rounded-full shadow-[0_0_25px_#00e0ff] 
              animate-pulse"
            />

            {/* Card Content */}
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center 
                rounded-xl bg-gradient-to-br from-[#00A9FF] to-[#00E0FF] 
                shadow-[0_0_20px_#00e0ff]">
                <span className="text-white text-xl">⇨</span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
            <p className="text-cyan-300 mt-1">{exp.company}</p>
            <p className="text-gray-400 text-sm mt-1">{exp.year}</p>

            <ul className="mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
              {exp.points.map((p, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-cyan-400 mt-1">→</span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Background Glow Behind Active Card */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
    </section>
  );
}
