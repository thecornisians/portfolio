import Link from "next/link";
import Image from "next/image";
import palmmoment from "../public/palmmoment.png";
import Nanaasomani from "../public/nanaasomani.png";
import cornelius from "../public/wbgroup.png";
import gaderin from "../public/gaderin.png";

const projects = [
  {
    image: gaderin,
    alt: "gaderin",
    description:
      "Full stack application with authentication built with NextJS, express, MongoDB, Paystack API etc.",
    github: "#",
    live: "https://thegaderin.com/",
  },
  {
    image: Nanaasomani,
    alt: "nanaasomani",
    description:
      "Portfolio website for client built with HTML, CSS, Javascript.",
    live: "https://nanaasomani.com/",
  },
  {
    image: palmmoment,
    alt: "palm moments",
    description:
      "Client website built with NextJS, Framer-motion and Tailwind CSS",
    github: "https://github.com/thecornisians/happy-notes",
    live: "https://www.palmmomemt.com/",
  },
  {
    image: cornelius,
    alt: "cornelius owusu-ansah",
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

function ProjectCard({ image, alt, description, github, live }) {
  return (
    <div className="flex flex-col mb-2">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <Image
          src={image}
          className="absolute inset-0 rounded-lg shadow-lg object-cover md:hover:scale-105 transition duration-300 ease-in-out"
          alt={alt}
          layout="fill"
        />
      </div>
      <p className="text-sm my-3 md:text-md source-sans">{description}</p>
      <div className="flex gap-3 mt-2">
        {/* {github && (
          <a
            className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            Github Repo
          </a>
        )} */}
        <a
          className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
          href={live}
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
      </div>
    </div>
  );
}
