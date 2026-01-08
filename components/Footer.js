import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-sm text-gray-500">
          © {new Date().getFullYear()} Cornelius Owusu-Ansah. All rights
          reserved.
        </span>

        <div className="flex gap-6 text-2xl text-gray-500">
          <a
            href="https://www.linkedin.com/in/corneliusoa/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/thecornisians"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://github.com/thecornisians"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </footer>
  );
}
