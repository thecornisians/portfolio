import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" passHref>
          <a className="text-xl font-bold tracking-tight text-white hover:text-gray-300 transition-colors">
            Cornelius OA
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden text-white hover:text-gray-300 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {navbarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                {label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Nav Overlay */}
        {navbarOpen && (
          <div className="absolute top-20 left-0 w-full bg-black border-b border-white/10 md:hidden flex flex-col items-center py-8 space-y-6">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <a
                  onClick={() => setNavbarOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
