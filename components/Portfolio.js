import Link from "next/link";
import Image from "next/image";
import palmmoment from "../public/palmmoment.png";
import Nanaasomani from "../public/nanaasomani.png";
import wbgroup from "../public/wbgroup.png";
import gaderin from "../public/gaderinn.png";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Gaderin",
    image: gaderin,
    alt: "Gaderin",
    description:
      "Full stack platform with auth, built using Next.js, Express, MongoDB, and Paystack API.",
    github: "#",
    live: "https://thegaderin.com/",
  },
  {
    title: "Nana Asomani",
    image: Nanaasomani,
    alt: "Nana Asomani",
    description: "Elegant personal site built with HTML, CSS, and JavaScript.",
    live: "https://nanaasomani.com/",
  },
  {
    title: "Palm Moments",
    image: palmmoment,
    alt: "Palm Moments",
    description:
      "Photography brand site built with Next.js, Framer Motion & Tailwind CSS.",
    github: "https://github.com/thecornisians/happy-notes",
    live: "https://www.palmmoment.com/",
  },
  {
    title: "WB Group",
    image: wbgroup,
    alt: "WB Group",
    description: "Corporate website using React, Next.js, and Tailwind CSS.",
    github: "https://github.com/thecornisians/wb-group",
    live: "https://wbgrouprepresents.com",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-smooth px-5 py-12 text-white">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-[#1DB67D] text-sm tracking-widest uppercase font-medium mb-2">
          Portfolio
        </h3>
        <h4 className="text-3xl md:text-4xl font-extrabold mb-4">
          Recent Projects
        </h4>
        <p className="text-base text-zinc-400">
          Explore some of my latest work across client and personal projects.
          View all
          <Link href="/portfolio">
            <span className="text-[#1DB67D] ml-1 underline cursor-pointer">
              here
            </span>
          </Link>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ image, alt, description, github, live, title }) {
  return (
    <div className="group bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-zinc-800">
      <div className="relative w-full h-44 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          layout="fill"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 flex flex-col justify-between h-[220px]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-zinc-400 line-clamp-3">{description}</p>
        </div>

        <div className="flex items-center justify-between pt-4">
          {github ? (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-[#1DB67D]"
              >
                <Github size={18} />
              </Button>
            </a>
          ) : (
            <span />
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="rounded-full text-white border border-white hover:border-[#1DB67D] hover:text-[#1DB67D] transition-colors"
              >
                Visit Site <ExternalLink size={14} className="ml-2" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
