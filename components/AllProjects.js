import Link from "next/link";
import Happynotes from "../public/happynotes.gif";
import Image from "next/image";
import creativeConnect from "../public/creativesConnect.gif";
import chillgh from "../public/chillresort.png";
import shopamargaret from "../public/shopamargaret.png";
import Nanaasomani from "../public/nanaasomani.png";
import cornelius from "../public/wbgroup.png";
import creativeconnect from "../public/creativeconnect.png";
import larryjay from "../public/larryjay.png";
import haleoptions from "../public/haleoptions.png";
import alwoman from "../public/alwoman.png";
import nurtureholiks from "../public/nurtureholiks.png";

export default function AllProjects() {
  return (
    <section id="portfolio" className="scroll-smooth p-5 ">
      <div className="text-center">
        <h3 className="font-semibold text-lg text-primary mb-2"> Portfolio</h3>
        <h4 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
          Recent Projects
        </h4>
        <p className="text-base text-body-color">
          Here are some of my most recent projects and freelance work
        </p>
      </div>

      <div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 mb-3 object-contain md:hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={creativeconnect}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg "
              alt="creative-connect"
            />
            <p className="text-sm mt-1 mb-1 md:text-md">
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

          <div className="basis-1/3 flex-1 mb-3 object-contain md:hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={Nanaasomani}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg"
              alt="nanaasomani"
            />
            <p className="text-sm mt-1 mb-1 md:text-md">
              Portfolio website for client built with HTML, CSS, Javascript.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://github.com/thecornisians/nanaasomani-website"
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
          <div className="basis-1/3 flex-1 mb-3 object-contain md:hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={Happynotes}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg"
              alt="happynotes"
            />
            <p className="text-sm mt-1 mb-1 md:text-md">
              Full stack to-do application built with Node, express, MongoDB and
              bootstrap for styling.
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
                href="https://happynotes.cyclic.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <div className="basis-1/3 flex-1 mb-3 object-contain md:hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={cornelius}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg"
              alt="cornelius owusu-ansah"
            />
            <p className="text-sm mt-1 mb-1 md:text-md">
              client site built with React/NextJS and Tailwind CSS
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
                href="https://wbgrouprepresents.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <div className="basis-1/3 flex-1 mb-3 object-contain md:hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={chillgh}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg"
              alt="Chill River Resort"
            />
            <p className="text-sm mt-1 mb-1 md:text-md">
              Website built for the Chill River Resort.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://thechillgh.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>
          <div className="basis-1/3 flex-1 mb-3 object-contain md:hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={shopamargaret}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg"
              alt="amargaretgh"
            />
            <p className="text-sm mt-1 mb-1 md:text-md">
              Ecommerce website built for Amargaretgh.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://shopamargaret.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <div className="basis-1/3 flex-1 mb-3 object-contain md:hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={alwoman}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg"
              alt="shopalwoman"
            />
            <p className="text-sm mt-1 mb-1 md:text-md">
              Ecommerce Website built for Alwoman.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://shopalwoman.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>
          <div className="basis-1/3 flex-1 mb-3 object-contain md:hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={nurtureholiks}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg"
              alt="nurtureholiks"
            />
            <p className="text-sm mt-1 mb-1 md:text-md">
              Ecommerce website built for Nurtureholiks.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://nurtureholiks.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <div className="basis-1/3 flex-1 mb-3 object-contain md:hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={larryjay}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg"
              alt="larry jay Ghana"
            />
            <p className="text-sm mt-1 mb-1 md:text-md">
              Ecommerce fashion website built for Larry Jay Ghana
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://larryjayghana.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <div className="basis-1/3 flex-1 mb-3 object-contain md:hover:scale-105 transition duration-300 ease-in-out">
            <Image
              src={haleoptions}
              className="rounded-lg max-w-full h-8 w-8 shadow-lg"
              alt="haleoptions"
            />
            <p className="text-sm mt-1 mb-1 md:text-md">
              Website built with Html, Bootstrap, Javascript
            </p>
            <div className="flex gap-3 mt-2">
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Github Repo
              </a>
              <a
                className="px-1.5 py-1.5 mr-2 text-white rounded-md bg-gray-800 hover:bg-gray-400 text-sm"
                href="https://haleoptionz.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>

      <Link href="/">
        <p className="text-[#1DB67D] cursor-pointer text-center hover:text-black text-2xl ">
          Back to Home
        </p>
      </Link>
    </section>
  );
}
