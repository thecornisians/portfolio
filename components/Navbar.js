import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode classes on <html> element (optional enhancement)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  };

  const navLinks = [
    { href: "/blog", label: "Blog + Newsletter" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <Head>
        <title>Cornelius Owusu-Ansah</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="bg-black dark:bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
        <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <Link href="/" passHref>
            <a className="flex items-center text-[#1DB67D] font-semibold text-base md:text-2xl tracking-wide cursor-pointer select-none">
              Cornelius OA
            </a>
          </Link>

          {/* Hamburger / Close Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#1DB67D]"
            aria-label="Toggle navigation menu"
          >
            {navbarOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`w-full md:w-auto md:flex md:items-center ${
              navbarOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-lg font-semibold source-sans text-white dark:text-gray-300">
              {navLinks.map(({ href, label }) => (
                <li
                  key={href}
                  className="py-2 px-4 rounded hover:bg-gray-700 hover:text-[#1DB67D] transition-colors cursor-pointer"
                  onClick={() => setNavbarOpen(false)} // close menu on link click
                >
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              ))}

              {/* Dark Mode Toggle */}
              {/* <li
                onClick={toggleDarkMode}
                className="flex items-center justify-center cursor-pointer px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                title="Toggle dark mode"
              >
                {darkMode ? (
                  <MdOutlineLightMode className="text-yellow-400 w-6 h-6" />
                ) : (
                  <MdOutlineDarkMode className="text-gray-300 w-6 h-6" />
                )}
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
