import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { ArrowUpRight, Mail } from "lucide-react";
import { getObfuscatedEmail } from "../lib/email";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#252525] bg-[#050505] text-[#A3A3A3] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#252525]">
          {/* Brand & Title */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-zinc-200 text-black font-mono font-bold text-xs flex items-center justify-center">
              CO
            </span>
            <span className="text-sm font-semibold text-[#F5F5F5]">Cornelius Owusu-Ansah</span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="text-xs font-mono text-[#A3A3A3]">
              Software Engineer &bull; Founder
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <Link href="/">
              <a className="hover:text-[#F5F5F5] transition-colors">Home</a>
            </Link>
            <Link href="/#about">
              <a className="hover:text-[#F5F5F5] transition-colors">About</a>
            </Link>
            <Link href="/#portfolio">
              <a className="hover:text-[#F5F5F5] transition-colors">Projects</a>
            </Link>
            <Link href="/#writing">
              <a className="hover:text-[#F5F5F5] transition-colors">Writing</a>
            </Link>
            <Link href="/#contact">
              <a className="hover:text-[#F5F5F5] transition-colors">Contact</a>
            </Link>
            <a
              href="https://cowans.substack.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Substack</span>
              <ArrowUpRight size={10} />
            </a>
          </div>
        </div>

        {/* Bottom row (PRD 4.8) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {currentYear} Cornelius Owusu-Ansah.</p>

          <div className="flex items-center gap-4 text-base text-[#A3A3A3]">
            <a
              href="https://github.com/thecornisians"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-[#F5F5F5] hover:scale-110 transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/thecornisians"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-[#F5F5F5] hover:scale-110 transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/corneliusoa/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#F5F5F5] hover:scale-110 transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
