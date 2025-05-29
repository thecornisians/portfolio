import Image from "next/image";
import cornelius from "../public/cornelius.JPG";
import { FaReact, FaBootstrap, FaHtml5 } from "react-icons/fa";
import {
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandCss3,
  TbBrandTailwind,
} from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiPostman, SiMongodb, SiExpress } from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto"
    >
      <div className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-16">
        {/* Image container */}
        <div className="mx-auto my-10 w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden relative shadow-lg ring-4 ring-[#1DB67D]">
          <Image
            src={cornelius}
            alt="cornelius-owusu-ansah"
            className="object-cover w-full h-full rounded-full"
            priority
          />
        </div>

        {/* Text content */}
        <div className="max-w-3xl text-center lg:text-left">
          <h4 className="text-3xl md:text-4xl font-extrabold mb-4">About Me</h4>
          <p className="text-lg leading-relaxed mb-6 font-light">
            I am a Full stack Software Engineer who loves building products that
            help make the world a little better. Skilled in solving problems
            with HTML, CSS, JavaScript, React, Next.js, Node, Express, and
            MongoDB.
          </p>
          <p className="text-lg leading-relaxed font-light">
            A lifelong learner with interests spanning different disciplines. We
            can have a chat about psychology, philosophy, economics, physics,
            etc. I write about my learnings in my weekly newsletter{" "}
            <a
              href="https://cowans.substack.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#1DB67D] font-semibold underline-offset-4 hover:underline transition"
            >
              here
            </a>
            . When I am not writing code, you can find me listening to or making
            music. I occasionally also write and direct short films and creative
            projects. You can see some of my past projects{" "}
            <a
              href="https://instagram.com/thecornisians"
              target="_blank"
              rel="noreferrer"
              className="text-[#1DB67D] font-semibold underline-offset-4 hover:underline transition"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>

      {/* Tech stack section */}
      <section className="mt-16 text-center">
        <h4 className="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12">
          Tech stack and frameworks
        </h4>
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-11 gap-6 max-w-3xl mx-auto text-[#1DB67D] text-5xl md:text-6xl">
          <FaReact className="hover:scale-110 transition-transform cursor-pointer" />
          <TbBrandNextjs className="hover:scale-110 transition-transform cursor-pointer" />
          <TbBrandJavascript className="hover:scale-110 transition-transform cursor-pointer" />
          <FaHtml5 className="hover:scale-110 transition-transform cursor-pointer" />
          <TbBrandCss3 className="hover:scale-110 transition-transform cursor-pointer" />
          <TbBrandTailwind className="hover:scale-110 transition-transform cursor-pointer" />
          <FaBootstrap className="hover:scale-110 transition-transform cursor-pointer" />
          <DiNodejs className="hover:scale-110 transition-transform cursor-pointer" />
          <SiExpress className="hover:scale-110 transition-transform cursor-pointer" />
          <SiMongodb className="hover:scale-110 transition-transform cursor-pointer" />
          <SiPostman className="hover:scale-110 transition-transform cursor-pointer" />
        </div>
      </section>
    </section>
  );
}
