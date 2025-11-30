"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[rgba(6,13,30,0.45)] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO / NAME */}
          <Link 
            href="/" 
            className="text-white font-semibold text-lg tracking-wide"
          >
            Afreeda Asad
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition text-[15px]"
              >
                {item.label}
              </a>
            ))}

            <Link
              href="/Afreeda_resume.pdf"
              target="_blank"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#00A9FF] to-[#00E0FF] text-[#001] font-semibold shadow-md hover:shadow-cyan-500/40 transition"
            >
              Resume
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[rgba(0,0,0,0.65)] backdrop-blur-sm z-50"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="fixed top-0 left-0 right-0 bg-[#060D1E] border-b border-white/10 px-6 py-6 z-[60] md:hidden"
          >
            {/* CLOSE BUTTON */}
            <div className="flex justify-between items-center">
              <span className="text-white text-lg font-semibold">
                Afreeda Asad
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 text-lg hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}

              <a
  href="/Afreeda_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#00A9FF] to-[#00E0FF] text-[#001] font-semibold shadow-md hover:shadow-cyan-500/40 transition"
>
  Resume
</a>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
