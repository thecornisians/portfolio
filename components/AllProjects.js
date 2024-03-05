import Link from "next/link";
import Image from "next/image";

export default function AllProjects() {
  return (
    <section id="portfolio" className="scroll-smooth p-5 ">
      <div className="text-center">
        <h3 className="font-semibold text-lg text-primary mb-2"> Portfolio</h3>
        <h4 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 source-sans">
          Recent Projects
        </h4>
        <p className="text-base source-sans mb-4 md:mb-8">
          Here are some of my most recent projects and freelance work
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto place-items-center mb-6">
          {Projects.map(({ image, title, githubLink, liveLink }, index) => {
            return (
              <div key={index} className="flex flex-col items-center mb-2">
                <Image
                  src={image}
                  width={400}
                  height={220}
                  className="rounded-lg image shadow-lg "
                  alt="creative-connect"
                />
                <p className="text-base mt-1  source-sans px-3">{title}</p>

                <div className="md:mb-12 flex gap-3 mt-3">
                  {/* <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black text-white source-sans py-1 px-4 rounded inline-flex "
                  >
                    Github
                  </a> */}

                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black hover:bg-gray-700 text-white text-sm source-sans py-1 px-3 rounded inline-flex "
                  >
                    Live Site
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Link href="/">
        <p className="text-[#1DB67D] cursor-pointer text-center hover:text-black text-2xl source-sans">
          Back to Home
        </p>
      </Link>
    </section>
  );
}

const Projects = [
  {
    image: "/n3d1.png",
    title: "Client website built with NextJS, Framer-motion and Tailwind CSS",
    githubLink: "#",
    liveLink: "https://www.n3dstudios.com/",
  },
  {
    image: "/creativesConnect.gif",
    title:
      "Full stack application with authentication built with Node,express, MongoDB and EJS.",
    githubLink: "https://github.com/thecornisians/Creatives-connect",
    liveLink: "https://creativeconnect.cyclic.app/",
  },

  {
    image: "/happynotes.gif",
    title:
      " Full stack to-do application built with Node, express, MongoDB and bootstrap for styling.",
    githubLink: "https://github.com/thecornisians/happy-notes",
    liveLink: "https://happynotes.cyclic.app/",
  },
  {
    image: "/nanaasomani.png",
    title: "Portfolio website for client built with HTML, CSS, Javascript.",
    githubLink: "https://github.com/thecornisians/nanaasomani-website",
    liveLink: "https://nanaasomani.com/",
  },

  {
    image: "/wbgroup.png",
    title: "Client site built with React/NextJS and Tailwind CSS",
    githubLink: "https://github.com/thecornisians/wb-group",
    liveLink: "https://wbgrouprepresents.com/",
  },
  {
    image: "/chillresort.png",
    title: "Website built for the Chill River Resort.",
    githubLink: "#",
    liveLink: "https://thechillgh.com/",
  },
  {
    image: "/fiifi.png",
    title: "Portfolio website for Client",
    githubLink: "#",
    liveLink: "https://www.fiifiabban.com/",
  },
  {
    image: "/shopamargaret.png",
    title: "Ecommerce website built for Amargaretgh.",
    githubLink: "#",
    liveLink: "https://shopamargaret.com/",
  },
  {
    image: "/alwoman.png",
    title: "Ecommerce Website built for Alwoman.",
    githubLink: "#",
    liveLink: "https://shopalwoman.com/",
  },
  {
    image: "/nurtureholiks.png",
    title: "Ecommerce website built for Nurtureholiks.",
    githubLink: "#",
    liveLink: "https://nurtureholiks.com/",
  },
  {
    image: "/alphaaesthetika.png",
    title: "Website for Alphaaesthetika",
    githubLink: "#",
    liveLink: "https://alphaaesthetika.com/",
  },
  {
    image: "/larryjay2.png",
    title: "Ecommerce fashion website built for Larry Jay Ghana",
    githubLink: "#",
    liveLink: "https://larryjayghana.com/",
  },
  {
    image: "/haleoptions.png",
    title: "Website built with Html, Bootstrap, Javascript",
    githubLink: "https://github.com/thecornisians/Hale-Options",
    liveLink: "https://haleoptionz.com/",
  },
  {
    image: "/victorhart.png",
    title: "Ecommerce Website for Victor Hart",
    githubLink: "#",
    liveLink: "https://victor-hart.com/",
  },
];

//  {
//     image: "",
//     title: "",
//     githubLink: "",
//     liveLink: "",
//   },
