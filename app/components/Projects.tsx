"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Projects() {
  const projects = [
    // 1 — CW Profile
    {
      title: "CW Profile",
      subtitle: "Decentralized Finance Referral Ecosystem",
      role: "Full-Stack Developer",
      period: "Ongoing",
      description:
        "A modern DeFi platform designed to build sustainable, community-driven income streams. Features immersive 3D-inspired visuals, referral-based flows, and a clean, conversion-focused landing experience.",
      tech: ["Next.js", "React", "Tailwind CSS", "3D UI / Animations"],
      demo: "https://cwprofile.vercel.app",
      github: null,
      isCompanyCode: false,
    },

    // 2 — Codyssey
    {
      title: "Codyssey Services Website",
      subtitle: "Corporate Website",
      role: "Frontend Developer",
      period: "2025",
      description:
        "Official website for Codyssey Services, focused on high-performance pages, clear service positioning, and a modern tech brand presence with responsive layouts and reusable UI components.",
      tech: ["Next.js", "React", "Tailwind CSS", "SEO"],
      demo: "https://www.codyssey.services/",
      github: null,
      isCompanyCode: true,
    },

    // 3 — Telewave
    {
      title: "Telewave Services Website",
      subtitle: "Service Business Website",
      role: "Frontend Developer",
      period: "2025",
      description:
        "Responsive web experience for a service-based business, with structured sections, clear CTAs, and fast-loading pages optimized for usability and clarity.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      demo: "https://www.telewaveservices.com/",
      github: null,
      isCompanyCode: true,
    },

    // 4 — Craftique
    {
      title: "Craftique",
      subtitle: "E-commerce Platform",
      role: "Developer & Tester",
      period: "Jan 2025 – Jul 2025",
      description:
        "Marketplace connecting Sambhal artisans directly to buyers, reducing middleman cost by ~30%. Includes recommendation system, filter-based search, chatbot, secure auth, and tested APIs.",
      tech: ["React.js", "PHP", "MySQL", "Razorpay", "JWT", "Postman", "JIRA"],
      demo: null,
      github: null,
      isCompanyCode: false,
    },

    // 5 — PlannerConnect
    {
      title: "PlannerConnect",
      subtitle: "Event Planning Platform",
      role: "Full-Stack Developer",
      period: "Jan 2024 – Jul 2025",
      description:
        "Platform connecting clients with event planners with rating & review system, responsive UI, Agile collaboration, Git workflows, and usability-tested features.",
      tech: ["React.js", "PHP", "MySQL", "Git", "GitHub"],
      demo: null,
      github: null,
      isCompanyCode: false,
    },

    // 6 — Advertising System
    {
      title: "Advertising Management System",
      subtitle: "Ad Management Tool",
      role: "Developer",
      period: "May 2023 – Aug 2023",
      description:
        "Web app enabling small businesses to manage and optimize product advertisements. Includes DB performance checks, black-box testing, and ~40% simulated cost improvement.",
      tech: ["PHP", "MySQL", "SQL", "Black-box Testing"],
      demo: null,
      github: null,
      isCompanyCode: false,
    },
  ];

  const [viewMode, setViewMode] = useState("grid");

  return (
    <section
      id="projects"
      className="relative w-full py-24 bg-gradient-to-b from-[#020812] to-[#060D1E] overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.12]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl font-bold text-cyan-400"
        >
          Featured Projects
        </motion.h2>
        <div className="w-40 h-1 bg-cyan-400 mx-auto mt-3 rounded-full shadow-[0_0_20px_#00e0ff]" />

        {/* Toggle Buttons */}
        <div className="mt-10 flex justify-center gap-3">
          {["grid", "carousel"].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                viewMode === mode
                  ? "bg-gradient-to-r from-[#00A9FF] to-[#00E0FF] text-[#001] shadow-[0_0_18px_#00eaff]"
                  : "border-white/10 text-white/70 hover:border-cyan-400"
              }`}
            >
              {mode === "grid" ? "Grid View" : "Carousel View"}
            </button>
          ))}
        </div>

        {/* GRID VIEW */}
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 0 25px rgba(0,224,255,0.35), 0 0 10px rgba(0,0,0,0.7)",
                }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="relative rounded-2xl border border-[rgba(0,255,255,0.2)] bg-[rgba(6,18,35,0.9)] backdrop-blur-xl p-6 shadow-[0_0_18px_rgba(0,224,255,0.18)]"
              >
                {/* Accent Bar */}
                <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-[#00E0FF] to-transparent rounded-r-full" />

                <div className="mb-3">
                  <p className="text-xs text-cyan-300/80">{project.period}</p>
                  <h3 className="text-xl font-semibold text-white mt-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-cyan-300">{project.subtitle}</p>
                </div>

                <p className="text-[14px] text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-[11px] uppercase bg-white/5 border border-cyan-400/30 text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto pt-2">
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="flex-1 text-center px-3 py-2 rounded-lg bg-gradient-to-r from-[#00A9FF] to-[#00E0FF] text-[#001] text-[13px] shadow-[0_0_16px_#00e0ff80]"
                    >
                      Demo
                    </Link>
                  )}

                  {project.isCompanyCode ? (
                    <button
                      disabled
                      className="flex-1 text-center px-3 py-2 rounded-lg border border-white/10 text-gray-400 bg-white/5 text-[13px]"
                    >
                      Private Code
                    </button>
                  ) : project.github ? (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex-1 text-center px-3 py-2 rounded-lg border border-cyan-400/60 text-cyan-200 text-[13px]"
                    >
                      GitHub
                    </Link>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CAROUSEL VIEW (SWIPER) */}
        {viewMode === "carousel" && (
          <div className="mt-14">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: ".project-next",
                prevEl: ".project-prev",
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
              }}
              pagination={{ clickable: true }}
              className="w-full"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-2xl border border-[rgba(0,255,255,0.25)] bg-[rgba(6,18,35,0.96)] backdrop-blur-2xl p-8 shadow-[0_0_30px_rgba(0,224,255,0.3)]"
                  >
                    {/* Accent Bar */}
                    <div className="absolute left-0 top-8 bottom-8 w-[4px] bg-gradient-to-b from-[#00E0FF] via-[#00A9FF] to-transparent rounded-r-full" />

                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <p className="text-xs text-cyan-300/80">
                          {project.period} • {project.role}
                        </p>

                        <h3 className="text-2xl font-semibold text-white mt-2">
                          {project.title}
                        </h3>

                        <p className="text-sm text-cyan-300">
                          {project.subtitle}
                        </p>

                        <p className="mt-4 text-[15px] text-gray-200 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full text-[11px] uppercase bg-white/5 border border-cyan-400/40 text-cyan-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col justify-end gap-3 lg:w-60">
                        {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            className="w-full text-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#00A9FF] to-[#00E0FF] text-[#001] text-[14px] shadow-[0_0_20px_#00e0ff99]"
                          >
                            View Demo
                          </Link>
                        )}

                        {project.isCompanyCode ? (
                          <button
                            disabled
                            className="w-full text-center px-4 py-2.5 rounded-lg border border-white/15 text-gray-400 bg-white/5 text-[14px]"
                          >
                            Private Code
                          </button>
                        ) : project.github ? (
                          <Link
                            href={project.github}
                            target="_blank"
                            className="w-full text-center px-4 py-2.5 rounded-lg border border-cyan-400/70 text-cyan-200 text-[14px]"
                          >
                            GitHub
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows */}
            <div className="flex justify-between mt-6">
              <button className="project-prev w-10 h-10 rounded-full border border-white/20 text-gray-300 hover:border-cyan-400 hover:text-cyan-200 transition flex items-center justify-center">
                ‹
              </button>
              <button className="project-next w-10 h-10 rounded-full border border-white/20 text-gray-300 hover:border-cyan-400 hover:text-cyan-200 transition flex items-center justify-center">
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
