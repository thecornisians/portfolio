import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import palmmoment from "../public/palmmoment.png";
import wbgroup from "../public/wbgroup.png";
import gaderin from "../public/gaderinn.png";
import obatours from "../public/obatours.png";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const secondaryProjects = [
  {
    title: "Oba Tours",
    role: "WEB DEVELOPMENT • USER EXPERIENCE",
    image: obatours,
    alt: "Oba Tours Platform",
    description:
      "A travel-focused website designed to help visitors explore destinations, discover experiences, and connect with travel services.",
    tags: ["React", "Next.js", "MongoDB", "Fullstack"],
    github: "#",
    live: "https://obatours.com",
  },
  {
    title: "WB Group",
    role: "WEB ENGINEERING • DIGITAL EXPERIENCE",
    image: wbgroup,
    alt: "WB Group site",
    description:
      "A modern digital presence for a creative group, focused on showcasing its work, services, and brand through a responsive web experience.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/thecornisians/wb-group",
    live: "https://wbgrouprepresents.com",
  },
  {
    title: "Palm Moments",
    role: "WEB DEVELOPMENT • DESIGN IMPLEMENTATION",
    image: palmmoment,
    alt: "Palm Moments Restaurant",
    description:
      "A visually engaging website that introduces the brand, showcases its offerings, and makes it easier for visitors to explore and make enquiries.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "#",
    live: "https://palmmoment.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative scroll-mt-20 px-4 sm:px-6 py-20 lg:py-24 max-w-6xl mx-auto text-[#F5F5F5]">
      {/* Section Header (PRD 4.4) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3 tracking-wider uppercase">
            <span>SELECTED WORK &amp; PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-3">
            Things I&apos;ve Built &amp; Shipped
          </h2>
          <p className="text-[#A3A3A3] text-base max-w-xl font-light leading-relaxed">
            A selection of products and projects I&apos;ve worked on, from early ideas to production-ready applications.
          </p>
        </div>

        <Link href="/portfolio" passHref>
          <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-[#252525] text-xs font-mono text-zinc-300 hover:text-white transition-all w-fit group">
            <span>View all 20+ projects</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </Link>
      </div>

      {/* Featured Primary Project: Gaderin (Full-Width Case-Study Card) */}
      <div className="mb-14 rounded-3xl bg-[#0D0D0D] border border-[#252525] hover:border-emerald-500/30 transition-all duration-300 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
        {/* Top Info & Metrics Section */}
        <div className="p-6 sm:p-8 lg:p-10 border-b border-[#252525] bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            {/* Left: Project Details */}
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Featured Project
                </span>
                <span className="text-[11px] font-mono text-zinc-500 tracking-wider uppercase">
                  FOUNDER &bull; FULL-STACK ENGINEERING &bull; PRODUCT STRATEGY
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] group-hover:text-emerald-300 transition-colors mb-3">
                Gaderin
              </h3>
              <p className="text-sm sm:text-base text-[#A3A3A3] font-light leading-relaxed mb-6">
                A platform helping people discover and book curated experiences, while giving hosts the tools to manage bookings, payments, and their growing communities.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Express", "MongoDB", "Paystack", "Tailwind CSS"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 text-xs font-mono text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: 3 Key Metrics + Action */}
            <div className="flex flex-col sm:items-end justify-between gap-6 shrink-0">
              <div className="grid grid-cols-3 gap-3 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-black/70 border border-[#252525] w-full sm:w-auto">
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#F5F5F5]">9,000+</div>
                  <div className="text-[11px] font-mono text-[#A3A3A3]">Bookings</div>
                </div>
                <div className="border-l border-white/10 pl-3 sm:pl-5 text-left">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#F5F5F5]">200+</div>
                  <div className="text-[11px] font-mono text-[#A3A3A3]">Hosts</div>
                </div>
                <div className="border-l border-white/10 pl-3 sm:pl-5 text-left">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#F5F5F5]">500+</div>
                  <div className="text-[11px] font-mono text-[#A3A3A3]">Experiences hosted</div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-start sm:justify-end">
                <a
                  href="https://thegaderin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F5F5F5] text-black hover:bg-zinc-200 text-xs font-semibold transition-all shadow-sm"
                >
                  <span>Visit Platform</span>
                  <ExternalLink size={13} />
                </a>
                <span className="text-xs font-mono text-zinc-500">
                  Live in Production
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Browser Mockup Frame with Full Natural Widescreen Screenshot */}
        <div className="p-4 sm:p-6 lg:p-8 bg-zinc-950/60">
          <div className="rounded-xl overflow-hidden border border-[#252525] bg-black shadow-2xl group/browser">
            {/* Browser Window Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/70 border-b border-[#252525]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/60 border border-white/5 text-[11px] font-mono text-zinc-400">
                <span className="text-emerald-400">🔒</span>
                <span>thegaderin.com</span>
              </div>
              <div className="w-12"></div>
            </div>

            {/* The Full High-Resolution Screenshot (Natural 1349x615 Aspect Ratio) */}
            <div className="relative w-full aspect-[1349/615] overflow-hidden bg-zinc-950">
              <Image
                src={gaderin}
                alt="Gaderin Marketplace Platform Interface"
                layout="fill"
                objectFit="contain"
                className="group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects Grid (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {secondaryProjects.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl bg-[#0D0D0D] border border-[#252525] hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            {/* Top Image Preview */}
            <div className="relative w-full h-48 overflow-hidden bg-zinc-950 border-b border-[#252525]">
              <Image
                src={project.image}
                alt={project.alt}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-50" />
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mb-1.5">
                  {project.role}
                </p>
                <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-emerald-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-[#A3A3A3] leading-relaxed font-light mb-5">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/5 text-[11px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#252525] flex items-center justify-between">
                  {project.github && project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      <Github size={13} />
                      <span>Source</span>
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-zinc-600">Client Project</span>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5F5F5] text-black hover:bg-zinc-200 text-xs font-semibold transition-all shadow-sm"
                    >
                      <span>Visit Website</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
