import { useState } from "react";
import Image from "next/image";
import portfolioImg from "../public/portfolio-headshot.jpg";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiVercel,
  SiAmazonaws,
} from "react-icons/si";
import {
  Music,
  Film,
  BookOpen,
  ArrowUpRight,
  Compass,
  Cloud,
} from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const techCategories = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact, desc: "Dynamic UIs & State", color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, desc: "Full-Stack React Framework", color: "text-[#F5F5F5]" },
      { name: "TypeScript", icon: SiTypescript, desc: "Type-Safe Architecture", color: "text-[#3178C6]" },
      { name: "JavaScript", icon: SiJavascript, desc: "Core Language & Logic", color: "text-[#F7DF1E]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, desc: "Responsive Design Systems", color: "text-[#38BDF8]" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, desc: "Runtimes & Server Logic", color: "text-[#5FA04E]" },
      { name: "MongoDB", icon: SiMongodb, desc: "Document & Schema Modeling", color: "text-[#47A248]" },
      { name: "Express", icon: SiExpress, desc: "REST APIs & Middleware", color: "text-zinc-300" },
    ],
  },
  {
    category: "Infrastructure & Services",
    items: [
      { name: "AWS", icon: SiAmazonaws, desc: "Cloud & Infrastructure", color: "text-[#FF9900]" },
      { name: "Vercel", icon: SiVercel, desc: "Deployment & Edge Runtime", color: "text-zinc-100" },
      { name: "Git", icon: SiGit, desc: "Version Control", color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, desc: "Workflows & Collaboration", color: "text-zinc-200" },
      { name: "Cloudinary", icon: Cloud, desc: "Media Optimization", color: "text-sky-400" },
    ],
  },
];

export default function About() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const displayedItems =
    techCategories.find((c) =>
      c.category.toLowerCase().includes(activeCategory.toLowerCase())
    )?.items || techCategories[0].items;

  return (
    <section
      id="about"
      className="relative bg-[#050505] text-[#F5F5F5] px-4 sm:px-6 py-20 lg:py-24 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Section Header (PRD 4.3) */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3 tracking-wider uppercase">
          <span>A LITTLE ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-4">
          Engineering with logic,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
            creating with soul.
          </span>
        </h2>
        <p className="text-[#A3A3A3] text-base sm:text-lg max-w-2xl font-light leading-relaxed">
          I believe great products sit at the intersection of thoughtful engineering, intuitive design, and a deep understanding of people.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Personal Profile Card */}
        <div className="lg:col-span-5 rounded-2xl bg-[#0D0D0D] border border-[#252525] p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none -z-10" />

          <div>
            {/* Image Container with Badges */}
            <div className="relative mx-auto mb-7 w-fit">
              {/* Top Speech Badge */}
              <div className="absolute -top-3 -left-3 px-3 py-1 rounded-full bg-[#111111] border border-[#252525] text-[11px] font-mono text-zinc-300 shadow-xl -rotate-6 z-20 flex items-center gap-1.5 hover:rotate-0 transition-transform">
                <span>👋</span>
                <span>Hey, I&apos;m Cornelius!</span>
              </div>

              {/* Headshot Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-[#252525] shadow-[0_0_25px_rgba(16,185,129,0.12)]">
                <Image
                  src={portfolioImg}
                  alt="Cornelius Owusu-Ansah"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500 ease-out"
                  priority
                />
              </div>

              {/* Bottom Badge */}
              <div className="absolute -bottom-3 -right-3 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#252525] text-[11px] font-mono text-amber-300 shadow-xl rotate-3 z-20 flex items-center gap-1.5 hover:rotate-0 transition-transform">
                <span>🎬</span>
                <span>Director &amp; Beats</span>
              </div>
            </div>

            {/* Status & Name */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#252525] text-xs font-mono text-[#A3A3A3] mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Accra, Ghana 🇬🇭 • Worldwide Remote</span>
            </div>

            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-1">Cornelius Owusu-Ansah</h3>
            <p className="text-xs font-mono text-emerald-400 mb-5">
              Software Engineer &bull; Founder &bull; Product Builder
            </p>

            {/* PRD Exact Biography Copy with Breathing Room */}
            <div className="space-y-4 text-sm text-[#A3A3A3] leading-relaxed font-light">
              <p>
                I&apos;m a Ghanaian software engineer and entrepreneur with over five years of experience building digital products.
              </p>
              <p>
                My work spans full-stack engineering, product development, and technical leadership. I enjoy solving complex problems, simplifying how people interact with technology, and taking ideas from early concepts to products people use.
              </p>
              <p>
                I&apos;m also the co-founder of <span className="text-[#F5F5F5] font-medium">Gaderin</span>, where we&apos;re building technology to make discovering and enjoying experiences across Africa easier.
              </p>
            </div>
          </div>

          {/* Profile Card Links: GitHub, LinkedIn, Substack */}
          <div className="pt-6 mt-6 border-t border-[#252525] flex flex-wrap gap-2.5">
            <a
              href="https://github.com/thecornisians"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-[#252525] text-xs font-mono text-[#A3A3A3] hover:text-[#F5F5F5] transition-all"
            >
              <FaGithub size={12} />
              <span>GitHub</span>
              <ArrowUpRight size={10} className="text-zinc-500" />
            </a>

            <a
              href="https://www.linkedin.com/in/corneliusoa/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-[#252525] text-xs font-mono text-[#A3A3A3] hover:text-[#F5F5F5] transition-all"
            >
              <FaLinkedin size={12} />
              <span>LinkedIn</span>
              <ArrowUpRight size={10} className="text-zinc-500" />
            </a>

            <a
              href="https://cowans.substack.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 border border-[#252525] text-xs font-mono text-[#A3A3A3] hover:text-[#F5F5F5] transition-all"
            >
              <BookOpen size={12} className="text-emerald-400" />
              <span>Substack</span>
              <ArrowUpRight size={10} className="text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Right Column: Tools & Technologies and Beyond the Code */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Tools & Technologies Card */}
          <div className="rounded-2xl bg-[#0D0D0D] border border-[#252525] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#F5F5F5] mb-1">Tools &amp; Technologies</h3>
                <p className="text-xs text-[#A3A3A3]">
                  Technologies and tools I use to design, build, and ship products.
                </p>
              </div>

              {/* Scannable Category Filter Pills */}
              <div className="flex flex-wrap gap-1 bg-black/60 p-1 rounded-xl border border-white/5 w-fit">
                {[
                  { id: "frontend", label: "Frontend" },
                  { id: "backend", label: "Backend" },
                  { id: "infra", label: "Infrastructure" },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveCategory(id)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${activeCategory === id
                      ? "bg-zinc-800 text-[#F5F5F5] font-medium shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Tech Items with Official Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {displayedItems.map(({ name, icon: Icon, desc, color }) => (
                <div
                  key={name}
                  className="p-3.5 rounded-xl border border-[#252525] bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all flex items-start gap-3 group"
                >
                  <span className="p-2 rounded-lg bg-black/70 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className={`text-lg ${color}`} />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F5F5] group-hover:text-emerald-300 transition-colors">
                      {name}
                    </h4>
                    <p className="text-[11px] text-[#A3A3A3] line-clamp-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Beyond the Code Cards (2x2 Grid) */}
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-1">Beyond the Code</h3>
              <p className="text-xs text-[#A3A3A3]">
                Multidisciplinary interests, writing, and creative perspectives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#252525] hover:border-zinc-700 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Music size={16} className="text-white" />
                </div>
                <h4 className="text-sm font-semibold text-[#F5F5F5] mb-1.5">Music &amp; Beat Production</h4>
                <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                  Exploring Afro-fusion, alternative soul, and lo-fi sounds through music and beat production.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#252525] hover:border-zinc-700 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Film size={16} className="text-white" />
                </div>
                <h4 className="text-sm font-semibold text-[#F5F5F5] mb-1.5">Film &amp; Storytelling</h4>
                <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                  Exploring storytelling through writing, short films, and visual narratives.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#252525] hover:border-zinc-700 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <BookOpen size={16} className="text-white" />
                </div>
                <h4 className="text-sm font-semibold text-[#F5F5F5] mb-1.5">Writing &amp; Ideas</h4>
                <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                  Thoughts on psychology, technology, personal growth, and the things I&apos;m learning. Occasionally on{" "}
                  <a
                    href="https://cowans.substack.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 underline hover:text-white transition-colors"
                  >
                    Substack
                  </a>
                  .
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#252525] hover:border-zinc-700 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Compass size={16} className="text-white" />
                </div>
                <h4 className="text-sm font-semibold text-[#F5F5F5] mb-1.5">Always Learning</h4>
                <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">
                  Continuously exploring software architecture, systems design, and better ways to build products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
