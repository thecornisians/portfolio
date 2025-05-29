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
      "Fullstack project - NextJS, TailwindCSS, MongoDB, Cloudinary, NextAuth, Paystack api, and more.",
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
    category: "client",
  },
  {
    id: 3,
    image: "/palmmoment.png",
    title: "Palm moments",
    description:
      "Client website built with NextJS, Framer-motion and Tailwind CSS.",
    githubLink: "#",
    liveLink: "https://www.palmmoment.com/",
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
    category: "client",
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

  const categories = ["All", ...new Set(Projects.map((p) => p.category))];

  const filteredProjects = Projects.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="px-4 md:px-8 py-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full md:w-1/2">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={18}
          />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="w-full md:w-auto text-white bg-black">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <p className="text-center text-muted-foreground mt-10">
          No projects found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white p-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition "
            >
              <div className="relative w-full h-48 overflow-hidden mt-[-40px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  {project.githubLink && project.githubLink !== "#" && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button size="sm" variant="ghost">
                        <Github size={16} className="mr-1" />
                        Code
                      </Button>
                    </Link>
                  )}

                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="link">
                        Live <ExternalLink size={16} className="ml-1" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
