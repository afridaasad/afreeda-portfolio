"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 bg-transparent">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Let's Connect
          </h2>

          <div className="mt-3 h-1 w-32 bg-cyan-400 rounded-full shadow-[0_0_20px_#00e0ff]"></div>

          <p className="text-slate-300 mt-8 leading-relaxed text-[15px] md:text-base max-w-md">
            I'm currently open to opportunities in development, testing, and
            engineering roles. Whether you have a question, want to collaborate,
            or just want to say hi — feel free to reach out!
          </p>

          <p className="text-slate-300 mt-5 leading-relaxed text-[15px] md:text-base max-w-md">
            I specialize in full-stack development, quality assurance, and API
            testing. Let’s build something amazing together!
          </p>
        </motion.div>

        {/* RIGHT CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-cyan-500/20 bg-[rgba(4,10,26,0.95)] shadow-[0_0_30px_rgba(0,224,255,0.25)] p-8"
        >
          <h3 className="text-xl font-semibold text-cyan-300 flex items-center gap-2">
            <span className="text-2xl">💬</span> Contact Information
          </h3>

          <div className="mt-8 space-y-5">

            {/* EMAIL */}
            <a
              href="mailto:afreedaaasad.1808@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-cyan-400/20 hover:bg-cyan-500/10 transition"
            >
              <Mail className="text-cyan-300 w-6 h-6" />
              <div>
                <p className="text-sm text-cyan-200/70">Email</p>
                <p className="text-slate-100">afreedaasad.1808@gmail.com</p>
              </div>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/afreedaasad"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-cyan-400/20 hover:bg-cyan-500/10 transition"
            >
              <Github className="text-cyan-300 w-6 h-6" />
              <div>
                <p className="text-sm text-cyan-200/70">GitHub</p>
                <p className="text-slate-100">github.com/afreedaasad</p>
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/afreedaasad"
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-cyan-400/20 hover:bg-cyan-500/10 transition"
            >
              <Linkedin className="text-cyan-300 w-6 h-6" />
              <div>
                <p className="text-sm text-cyan-200/70">LinkedIn</p>
                <p className="text-slate-100">linkedin.com/in/afreedaasad</p>
              </div>
            </a>
          </div>

          {/* EMAIL BUTTON */}
          <a
            href="mailto:afreeda.asad@example.com"
            className="mt-8 w-full block text-center py-3 rounded-xl font-semibold text-[#001] bg-gradient-to-r from-[#00A9FF] to-[#00E0FF] shadow-[0_0_25px_rgba(0,224,255,0.4)] hover:shadow-[0_0_35px_rgba(0,224,255,0.75)] transition"
          >
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
