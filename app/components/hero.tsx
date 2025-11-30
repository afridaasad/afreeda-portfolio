"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "Backend Developer",
    "QA Analyst",
    "Software Engineer",
    "Manual Tester",
    "Automation Tester",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <span className="text-[var(--accent)]">Afreeda Asad</span>
        </motion.h1>

        <motion.h2
          key={index}
          className="text-xl text-[var(--cyan)] font-semibold h-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {roles[index]}
        </motion.h2>

        <motion.p
          className="text-gray-300 mt-6 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          I build scalable web applications, perform end-to-end testing, and design secure backend systems.
          A passionate engineer who loves clean code, smooth UI, and solving complex problems.
        </motion.p>
      </div>
    </section>
  );
}
