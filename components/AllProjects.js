"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Search } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Projects = [
  {
    id: 0,
    image: "/obatours.png",
    title: "Oba Tours",
    description:
      "Full-stack travel and tour platform built with React, Next.js, and MongoDB for booking curated travel experiences.",
    githubLink: "#",
    liveLink: "https://obatours.com",
    tags: ["React", "Next.js", "MongoDB", "Fullstack"],
    category: "fullstack",
  },
  {
    id: 1,
    image: "/n3d1.png",
    title: "N3D Studios",
    description:
      "Client website built with NextJS, Framer-motion and Tailwind CSS.",
    githubLink: "#",
    liveLink: "https://www.n3dstudios.com/",
    tags: ["NextJS", "Framer Motion", "Tailwind CSS"],
    category: "client",
  },
  {
    id: 2,
    image: "/gaderinn.png",
    title: "Gaderin",
    description:
      "Fullstack project - marketplace where you can find and book activities.",
    githubLink: "#",
    liveLink: "https://www.thegaderin.com/",
    tags: [
      "NextJS",
      "Framer Motion",
      "Tailwind CSS",
      "Next-auth",
      "Mongodb",
      "Cloudinary",
    ],
    category: "fullstack",
  },
  {
    id: 3,
    image: "/palmmoment.png",
    title: "Palm moments",
    description:
      "Client website built with NextJS, Framer-motion and Tailwind CSS.",
    githubLink: "#",
    liveLink: "https://palmmoment.netlify.app/",
    tags: ["NextJS", "Framer Motion", "Tailwind CSS"],
    category: "client",
  },
  {
    id: 4,
    image: "/christiansaint.png",
    title: "Christian Saint",
    description:
      "Client website built with NextJS, Framer-motion and Tailwind CSS",
    githubLink: "https://christiansaint.co",
    liveLink: "https://christiansaint.co",
    tags: ["NextJS", "Framer Motion", "Tailwind CSS"],
    category: "portfolio",
  },
  {
    id: 5,
    image: "/creativesConnect.gif",
    title: "Creatives Connect",
    description:
      "Full stack application with authentication built with Node, Express, MongoDB and EJS.",
    githubLink: "https://github.com/thecornisians/Creatives-connect",
    liveLink: "https://creativeconnect.cyclic.app/",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Authentication"],
    category: "fullstack",
  },
  {
    id: 6,
    image: "/grace.png",
    title: "GP Consulting",
    description:
      "Portfolio and Ecommerce Website built for GP consulting using NextJs and Stripe.",
    githubLink: "#",
    liveLink: "https://gracepatrice.com/",
    tags: ["NextJS", "Stripe", "Ecommerce"],
    category: "ecommerce",
  },
  {
    id: 7,
    image: "/tris.png",
    title: "The Remedy Is Solidarity",
    description:
      "Client Website built with NextJS, Tailwind CSS and Framer Motion.",
    githubLink: "#",
    liveLink: "https://www.theremedyissolidarity.com/",
    tags: ["NextJS", "Tailwind CSS", "Framer Motion"],
    category: "client",
  },
  {
    id: 8,
    image: "/nanaasomani.png",
    title: "Nana Asomani",
    description:
      "Portfolio website for client built with HTML, CSS, Javascript.",
    githubLink: "https://github.com/thecornisians/nanaasomani-website",
    liveLink: "https://nanaasomani.com/",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "portfolio",
  },
  {
    id: 9,
    image: "/wbgroup.png",
    title: "WB Group",
    description: "Client site built with React/NextJS and Tailwind CSS.",
    githubLink: "https://github.com/thecornisians/wb-group",
    liveLink: "https://wbgrouprepresents.com/",
    tags: ["React", "NextJS", "Tailwind CSS"],
    category: "client",
  },
  {
    id: 10,
    image: "/jermainebleu.png",
    title: "Jermaine Bleu",
    description: "Ecommerce Website built for Jermaine Bleu.",
    githubLink: "#",
    liveLink: "https://www.jermainebleu.studio/",
    tags: ["Ecommerce", "Web Design"],
    category: "ecommerce",
  },
  {
    id: 11,
    image: "/chillresort.png",
    title: "Chill River Resort",
    description: "Website built for the Chill River Resort.",
    githubLink: "#",
    liveLink: "https://thechillgh.com/",
    tags: ["Web Design", "Hospitality"],
    category: "client",
  },
  {
    id: 12,
    image: "/ampofofrema.png",
    title: "Ampofo & Frema",
    description:
      "Wedding website built with NextJS, Tailwind CSS and Framer Motion.",
    githubLink: "#",
    liveLink: "https://ampofoandfrema.com/",
    tags: ["NextJS", "Tailwind CSS", "Framer Motion"],
    category: "wedding",
  },
  {
    id: 13,
    image: "/fiifiabban.png",
    title: "Fiifi Abban",
    description: "Portfolio website for Client.",
    githubLink: "#",
    liveLink: "https://www.fiifiabban.com/",
    tags: ["Portfolio", "Web Design"],
    category: "portfolio",
  },
  {
    id: 14,
    image: "/vivaaccra.png",
    title: "Viva Accra",
    description: "Ecommerce website built for Viva Accra.",
    githubLink: "#",
    liveLink: "https://vivaaccra.com/",
    tags: ["Ecommerce", "Web Design"],
    category: "ecommerce",
  },
  {
    id: 15,
    image: "/happynotes.gif",
    title: "Happy Notes",
    description:
      "Full stack to-do application built with Node, Express, MongoDB and Bootstrap for styling.",
    githubLink: "https://github.com/thecornisians/happy-notes",
    liveLink: "https://happynotes.cyclic.app/",
    tags: ["Node.js", "Express", "MongoDB", "Bootstrap"],
    category: "fullstack",
  },
  {
    id: 16,
    image: "/nurtureholiks2.png",
    title: "Nurtureholiks",
    description: "Ecommerce website built for Nurtureholiks.",
    githubLink: "#",
    liveLink: "https://nurtureholiks.com/",
    tags: ["Ecommerce", "Web Design"],
    category: "ecommerce",
  },
  {
    id: 17,
    image: "/alwoman.png",
    title: "Alwoman",
    description: "Ecommerce Website built for Alwoman.",
    githubLink: "#",
    liveLink: "https://shopalwoman.com/",
    tags: ["Ecommerce", "Web Design"],
    category: "ecommerce",
  },
  {
    id: 18,
    image: "/shopamargaret.png",
    title: "Amargaret",
    description: "Ecommerce website built for Amargaretgh.",
    githubLink: "#",
    liveLink: "https://shopamargaret.com/",
    tags: ["Ecommerce", "Web Design"],
    category: "ecommerce",
  },
  {
    id: 19,
    image: "/alphaaesthetika.png",
    title: "Alpha Aesthetika",
    description: "Website for Alphaaesthetika",
    githubLink: "#",
    liveLink: "https://alphaaesthetika.com/",
    tags: ["Web Design"],
    category: "client",
  },
  {
    id: 20,
    image: "/larryjay2.png",
    title: "Larry Jay Ghana",
    description: "Ecommerce fashion website built for Larry Jay Ghana.",
    githubLink: "#",
    liveLink: "https://larryjayghana.com/",
    tags: ["Ecommerce", "Fashion", "Web Design"],
    category: "ecommerce",
  },
  {
    id: 21,
    image: "/lotusopticals.png",
    title: "Lotus Opticals",
    description: "Ecommerce Website for Lotus Opticals.",
    githubLink: "#",
    liveLink: "https://thelotusopticals.com/",
    tags: ["Ecommerce", "Web Design"],
    category: "ecommerce",
  },
  {
    id: 22,
    image: "/haleoptions.png",
    title: "Hale Options",
    description: "Website built with Html, Bootstrap, Javascript.",
    githubLink: "https://github.com/thecornisians/Hale-Options",
    liveLink: "https://haleoptionz.com/",
    tags: ["HTML", "Bootstrap", "JavaScript"],
    category: "client",
  },
  {
    id: 23,
    image: "/victorhart.png",
    title: "Victor Hart",
    description: "Ecommerce Website for Victor Hart.",
    githubLink: "#",
    liveLink: "https://victor-hart.com/",
    tags: ["Ecommerce", "Web Design"],
    category: "ecommerce",
  },
];

export default function AllProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "client", "fullstack", "ecommerce", "portfolio", "wedding"];

  const filteredProjects = Projects.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" || p.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="px-4 sm:px-6 max-w-6xl mx-auto text-white">
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
          <span>🚀</span>
          <span>Project Archive • 20+ Builds</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          Projects &amp; Products
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-light">
          An archive of full-stack platforms, client websites, ecommerce stores, and experiments built by Cornelius.
        </p>
      </div>

      {/* Search and Category Filter */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
            size={16}
          />
          <input
            type="text"
            placeholder="Search by title, stack, keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-zinc-950/80 border border-white/10 text-white placeholder-zinc-500 text-xs font-mono focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono capitalize transition-all ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-6">
        <span>
          Showing {filteredProjects.length} of {Projects.length} projects
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-emerald-400 hover:underline"
          >
            Clear search
          </button>
        )}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center rounded-3xl bg-zinc-950/40 border border-white/5">
          <p className="text-zinc-400 text-sm mb-2">No projects matched your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-xs font-mono text-emerald-400 underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              alt={project.title}
              description={project.description}
              github={project.githubLink}
              live={project.liveLink}
              title={project.title}
              tags={project.tags}
              category={project.category}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectCard({ image, alt, description, github, tags, live, title, category }) {
  return (
    <div className="group rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between backdrop-blur-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-zinc-900 border-b border-white/[0.06]">
        <Image
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 uppercase">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-zinc-400"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-zinc-500">
                +{tags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action row */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
          {github && github !== "#" ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={13} />
              <span>Source</span>
            </a>
          ) : (
            <span className="text-[10px] font-mono text-zinc-600">Client Project</span>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold transition-all group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <span>Visit</span>
              <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
