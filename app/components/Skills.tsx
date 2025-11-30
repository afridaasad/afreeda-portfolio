"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Developer", "Testing", "Security", "Integrations"] as const;
type TabType = typeof tabs[number];

const skillsData: Record<TabType, string[]> = {
  Developer: [
    "Java", "Python", "C++", "JavaScript",
    "Node.js", "React.js", "Tailwind", "PHP",
    "MySQL", "PostgreSQL", "MongoDB", "AWS", "Git"
  ],
  Testing: [
    "Functional Testing", "Regression Testing", "API Testing", "Jest",
    "Vitest", "Postman", "Thunder Client", "Burp Suite",
    "Wireshark", "STLC", "Test Cases", "Black-Box Testing"
  ],
  Security: [
    "Burp Suite", "Wireshark", "API Vulnerability Basics", "Auth & JWT",
    "Network Fundamentals", "Security Testing", "Penetration Testing Basics"
  ],
  Integrations: [
    "REST APIs", "JWT Auth", "Razorpay Integration", "Kafka",
    "Webhooks", "Third-party APIs", "OAuth", "Payment Gateways"
  ],
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<TabType>("Developer");

  return (
    <section id="skills" className="relative w-full py-24 overflow-hidden">

      {/* BACKGROUND GRID + GLOW PARTICLES */}
      <div className="absolute inset-0 bg-[#040d1a] opacity-[0.95]" />

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.12),transparent_70%)]"
      />

      <div className="absolute inset-0 pointer-events-none bg-[url('/grid.svg')] opacity-[0.05]" />

      {/* Floating glow dots */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#00eaff]"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-32 right-12 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#00eaff]"
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 tracking-wide"
        >
          Skills & Expertise
        </motion.h2>

        <div className="w-44 h-1 bg-cyan-400 mx-auto mt-3 rounded-full shadow-[0_0_25px_#00eaff]" />

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`
                  relative px-6 py-2 rounded-xl text-sm md:text-base font-medium transition-all
                  border border-cyan-500/20
                  ${isActive
                    ? "text-[#001] bg-gradient-to-r from-[#00A9FF] to-[#00E0FF] shadow-[0_0_18px_#00eaff] scale-105"
                    : "text-white/70 hover:text-white hover:border-cyan-400/40 bg-white/5"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="tabGlow"
                    className="absolute inset-0 rounded-xl bg-cyan-400/30 blur-xl"
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            );
          })}
        </div>

        {/* SKILL CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14"
        >
          {skillsData[activeTab].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{
                scale: 1.06,
                boxShadow:
                  "0 0 25px rgba(0,224,255,0.35), inset 0 0 20px rgba(0,224,255,0.15)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="
                h-[72px] flex items-center justify-center rounded-xl
                bg-[rgba(255,255,255,0.03)]
                border border-[rgba(0,255,255,0.18)]
                text-[#dbeafe] font-medium tracking-wide
                shadow-[inset_0_0_10px_rgba(0,255,255,0.08)]
                backdrop-blur-sm
                hover:bg-[rgba(0,255,255,0.06)]
                transition-all
              "
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
