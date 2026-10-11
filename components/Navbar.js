import { useState } from "react";
import Link from "next/link";
import { Copy, Check, Menu, X, ArrowUpRight, Github } from "lucide-react";
import { copyObfuscatedEmail } from "../lib/email";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await copyObfuscatedEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Writing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 max-w-5xl mx-auto px-4 sm:px-6">
      <nav className="relative flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-black/75 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)] transition-all">
        {/* Left: Brand + Status */}
        <div className="flex items-center gap-3">
          <Link href="/" passHref>
            <a className="group flex items-center gap-2 pl-2">
              <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-zinc-200 text-black font-mono font-bold text-xs flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_12px_rgba(16,185,129,0.4)]">
                CO
              </span>
              <span className="font-semibold text-sm tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                Cornelius
              </span>
            </a>
          </Link>

          {/* Vercel-style status pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>available</span>
          </div>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              <a className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all">
                {label}
              </a>
            </Link>
          ))}
        </div>

        {/* Right: Quick Actions */}
        <div className="flex items-center gap-2">
          {/* Quick Copy Email Pill */}
          {/* <button
            onClick={handleCopyEmail}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all group"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald-400" />
                <span className="text-emerald-400">copied!</span>
              </>
            ) : (
              <>
                <Copy size={12} className="text-zinc-400 group-hover:text-white transition-colors" />
                <span className="text-zinc-400 group-hover:text-zinc-200">Copy Email</span>
              </>
            )}
          </button> */}

          {/* GitHub link */}
          <a
            href="https://github.com/thecornisians"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <Github size={16} />
          </a>

          {/* Primary CTA button */}
          <Link href="/#contact" passHref>
            <a className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 font-medium text-xs transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]">
              Let&apos;s Talk
              <ArrowUpRight size={12} />
            </a>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {navbarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {navbarOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-2 duration-200 flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-400">Available for projects</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white"
            >
              {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copied ? "Copied" : "Copy Email"}</span>
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <a
                  onClick={() => setNavbarOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  {label}
                </a>
              </Link>
            ))}
          </div>

          <Link href="/#contact" passHref>
            <a
              onClick={() => setNavbarOpen(false)}
              className="mt-2 text-center py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide shadow-md"
            >
              Let&apos;s Talk
            </a>
          </Link>
        </div>
      )}
    </header>
  );
}
