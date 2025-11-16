"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-xl font-bold tracking-wide text-[var(--accent)]">
            Afreeda Asad
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-[var(--cyan)]">About</a>
            <a href="#skills" className="hover:text-[var(--cyan)]">Skills</a>
            <a href="#experience" className="hover:text-[var(--cyan)]">Experience</a>
            <a href="#projects" className="hover:text-[var(--cyan)]">Projects</a>
            <a href="#certs" className="hover:text-[var(--cyan)]">Certifications</a>
            <a href="#contact" className="hover:text-[var(--cyan)]">Contact</a>

            <a
              href="/resume.pdf"
              className="px-4 py-2 border border-[var(--accent)] rounded-lg hover:bg-[var(--accent)] hover:text-black transition"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE SLIDE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex justify-end">
          <div className="w-64 bg-[var(--bg-secondary)] h-full p-6 flex flex-col gap-6 shadow-xl">

            <button
              className="text-right text-xl mb-4"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#certs" onClick={() => setOpen(false)}>Certifications</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            <a
              href="/resume.pdf"
              className="px-4 py-2 border border-[var(--accent)] rounded-lg text-center mt-4"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
