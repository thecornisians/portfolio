import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 overflow-hidden bg-[#050505] text-[#F5F5F5]">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/2 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Crisp Subtle Grid Mask */}
      <div className="absolute inset-0 bg-vercel-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-50" />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        {/* Eyebrow: Software Engineer & Founder */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.07] border border-[#252525] text-xs text-[#A3A3A3] backdrop-blur-md mb-8 transition-all cursor-default">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] text-emerald-400 font-medium">
            Software Engineer &amp; Founder
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-[#A3A3A3] hidden sm:inline text-[11px]">Accra / Remote</span>
        </div>

        {/* Hero Headline (Max-width ~760px) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] mb-6 leading-[1.1] max-w-[760px]">
          Building thoughtful digital products,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
            from idea to scale.
          </span>
        </h1>

        {/* Hero Description (Max-width ~580px, no individual technologies) */}
        <p className="text-base sm:text-lg text-[#A3A3A3] max-w-[580px] font-normal leading-relaxed mb-10">
          Hey, I&apos;m <span className="text-[#F5F5F5] font-medium">Cornelius Owusu-Ansah</span>, a full-stack software engineer and founder. I build performant web applications and intuitive digital experiences that solve real problems.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5F5F5] text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 group shadow-sm"
          >
            <span>Explore My Work</span>
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D0D0D] hover:bg-zinc-900 text-[#F5F5F5] font-medium text-sm border border-[#252525] hover:border-zinc-700 transition-all"
          >
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        {/* Social Links (Understated secondary navigation) */}
        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-12">
          <a
            href="https://github.com/thecornisians"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex items-center gap-1.5 text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
          >
            <FaGithub size={14} />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href="https://twitter.com/thecornisians"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter profile"
            className="flex items-center gap-1.5 text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
          >
            <FaTwitter size={14} />
            <span>Twitter</span>
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href="https://www.linkedin.com/in/corneliusoa/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex items-center gap-1.5 text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
          >
            <FaLinkedin size={14} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Useful Capabilities & Direction Panel (PRD 4-card content) */}
        <div className="w-full max-w-3xl rounded-2xl bg-[#0D0D0D] border border-[#252525] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden text-left">
          {/* Window Chrome Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#252525] bg-zinc-900/30">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                cornelius ~ capabilities &amp; focus
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
              Full-Stack &bull; Product
            </span>
          </div>

          {/* 4 Cards Grid */}
          <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-[#252525] flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5] font-semibold">
                  Engineering
                </h3>
              </div>
              <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                Building robust, performant applications from frontend to backend.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-[#252525] flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5] font-semibold">
                  Product Thinking
                </h3>
              </div>
              <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                Turning complex problems into simple, intuitive experiences.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-[#252525] flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5] font-semibold">
                  Architecture
                </h3>
              </div>
              <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                Designing systems that are maintainable, reliable, and ready to grow.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/40 border border-[#252525] flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5] font-semibold">
                  Currently Building
                </h3>
              </div>
              <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                Building Gaderin, a platform connecting people through real-world experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
