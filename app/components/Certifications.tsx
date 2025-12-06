"use client";

import { motion } from "framer-motion";

type Certification = {
  title: string;
  issuer: string;
  year: string;
};

const certifications: Certification[] = [
  {
    title: "JPMorgan Software Engineering",
    issuer: "JPMorgan Chase",
    year: "2025",
  },
  {
    title: "Google Cybersecurity",
    issuer: "Google",
    year: "2024",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    year: "2024",
  },
  {
    title: "AWS Security",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    title: "Penetration Testing Workshop",
    issuer: "Security Training",
    year: "2024",
  },
  {
    title: "Java Programming",
    issuer: "GreatLearning",
    year: "2023",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl md:text-5xl font-bold text-cyan-400"
        >
          Certifications
        </motion.h2>

        <div className="mx-auto mt-3 h-1 w-32 rounded-full bg-cyan-400 shadow-[0_0_20px_#00e0ff]"></div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
              }}
              whileHover={{
                y: -4,
                scale: 1.01,
                transition: { type: "spring", stiffness: 180, damping: 20 },
              }}
              className="relative overflow-hidden rounded-2xl border border-cyan-500/15 bg-[rgba(4,10,26,0.95)] shadow-[0_0_22px_rgba(0,224,255,0.2)] hover:shadow-[0_0_40px_rgba(0,224,255,0.55)] transition-all duration-300"
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-transparent to-transparent opacity-60 mix-blend-screen"></div>

              <div className="relative flex items-start gap-4 px-6 py-5 md:px-7 md:py-6">

                {/* Icon */}
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00A9FF] to-[#00E0FF] shadow-[0_0_30px_rgba(0,224,255,0.7)]">
                  <span className="text-xl text-[#001]">🎓</span>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-[17px] md:text-lg font-semibold text-slate-50">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300/80">
                    {cert.issuer}
                  </p>
                </div>

                {/* Year pill */}
                <div className="ml-2 rounded-full border border-cyan-400/40 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-cyan-300 shadow-[0_0_14px_rgba(0,224,255,0.4)]">
                  {cert.year}
                </div>
              </div>

              {/* Bottom ribbon */}
              <div className="relative flex items-center justify-end px-6 pb-4 md:px-7 md:pb-5">
                <div className="flex items-center gap-2 text-xs text-cyan-200/60">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900/80 text-[13px]">
                    🏅
                  </span>
                  <span className="tracking-wide">Verified Achievement</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
