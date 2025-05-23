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
      "Full stack application with authentication built with NextJS, express, MongoDB, Paystack API etc.",
    github: "#",
    live: "https://thegaderin.com/",
  },
  {
    title: "Nana Asomani",
    image: Nanaasomani,
    alt: "Nana Asomani",
    description:
      "Portfolio website for client built with HTML, CSS, Javascript.",
    live: "https://nanaasomani.com/",
  },
  {
    title: "Palm Moments",
    image: palmmoment,
    alt: "Palm Moments",
    description:
      "Client website built with NextJS, Framer-motion and Tailwind CSS",
    github: "https://github.com/thecornisians/happy-notes",
    live: "https://www.palmmoment.com/",
  },
  {
    title: "WB Group",
    image: wbgroup,
    alt: "WB Group",
    description: "Client site built with React/NextJS and Tailwind CSS",
    github: "https://github.com/thecornisians/wb-group",
    live: "https://wbgrouprepresents.com",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-smooth p-5">
      <div className="text-center">
        <h3 className="font-semibold text-lg text-primary mb-2">Portfolio</h3>
        <h4 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
          Recent Projects
        </h4>
        <p className="text-base text-body-color source-sans">
          Here are some of my most recent projects and freelance work. View all
          projects
          <Link href="/portfolio">
            <span className="text-[#1DB67D] cursor-pointer"> Here</span>
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 source-sans">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ image, alt, description, github, live, title }) {
  return (
    <div className="group border rounded-2xl overflow-hidden bg-black text-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-full h-[11rem]">
        <Image
          src={image}
          alt={alt}
          layout="fill"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-[200px]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3 my-4">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          {github ? (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost">
                <Github size={18} />
              </Button>
            </a>
          ) : (
            <span />
          )}

          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="rounded-full hover:text-gray-500">
                Visit Site <ExternalLink size={14} className="ml-1" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
