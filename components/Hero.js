import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaArrowDown,
} from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="h-[90vh] flex flex-col justify-center items-center bg-black text-white px-6 relative overflow-hidden mt-10">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1DB67D]/20 rounded-full blur-[120px] -z-10" />

      <section className="max-w-4xl mx-auto text-center z-10">
        <div className="mb-10 space-y-6">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4">
            Hello, I&apos;m <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB67D] to-[#2dd495]">
              Cornelius
            </span>
            .
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Full-stack Software Engineer building digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link href="/portfolio">
              <a className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300">
                Explore Portfolio
                <span className="absolute inset-0 rounded-full ring-2 ring-white ring-offset-2 ring-offset-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex justify-center gap-8 text-3xl mt-12 text-gray-500">
          <a
            href="https://www.linkedin.com/in/corneliusoa/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/thecornisians"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://github.com/thecornisians"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaGithubSquare />
          </a>
        </div>
      </section>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <FaArrowDown size={24} />
      </div>
    </main>
  );
}
