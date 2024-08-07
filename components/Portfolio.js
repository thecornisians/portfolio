import Link from "next/link";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Happynotes from "../public/happynotes.gif";
import Image from "next/image";
import creativeConnect from "../public/creativesConnect.gif";
import Nanaasomani from "../public/nanaasomani.png";
import cornelius from "../public/wbgroup.png";
import creativeconnect from "../public/creativeconnect.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-smooth p-5">
      <div className="text-center">
        <h3 className="font-semibold text-lg text-primary mb-2"> Portfolio</h3>
        <h4 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
          Recent Projects
        </h4>
        <p className="text-base text-body-color source-sans">
          Here are some of my most recent projects and freelance work. View all
          projects
          <Link href="/portfolio">
            <span className="text-[#1DB67D] cursor-pointer "> Here</span>
          </Link>
        </p>
      </div>

      <div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap source-sans">
          <div className="flex-1 mb-2">
            <Image
              src={creativeconnect}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg object-contain md:hover:scale-105 transition duration-300 ease-in-out"
              alt="creative-connect"
            />
            <p className="text-sm mt-1 mb-1 md:text-md source-sans">
              Full stack application with authentication built with Node,
              express, MongoDB and EJS.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://github.com/thecornisians/Creatives-connect"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://creativeconnect.cyclic.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <div className="flex-1 mb-2">
            <Image
              src={Nanaasomani}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg object-contain md:hover:scale-105 transition duration-300 ease-in-out"
              alt="nanaasomani"
            />
            <p className="text-sm mt-1 mb-1 md:text-md source-sans">
              Portfolio website for client built with HTML, CSS, Javascript.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="#"
              >
                Github Repo
              </a>
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://nanaasomani.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <div className="flex-1 mb-2">
            <Image
              src={Happynotes}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg object-contain md:hover:scale-105 transition duration-300 ease-in-out"
              alt="happynotes"
            />
            <p className="text-sm mt-1 mb-1 md:text-md source-sans">
              Client website built with NextJS, Framer-motion and Tailwind CSS
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://github.com/thecornisians/happy-notes"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://www.n3dstudios.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src={cornelius}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg object-contain md:hover:scale-105 transition duration-300 ease-in-out"
              alt="cornelius owusu-ansah"
            />
            <p className="text-sm mt-1 mb-1 md:text-md source-sans">
              Client site built with React/NextJS and Tailwind CSS
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://github.com/thecornisians/wb-group"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://wbgrouprepresents.com"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
