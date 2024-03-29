import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import contact from "../pages/contact";
import about from "../pages/about";
import portfolio from "../pages/portfolio";
import { FaBars, FaTimes, FaRegMoon } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <Head>
        <title>Cornelius Owusu-Ansah</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* bg-[#161C2D] */}
      <header className="bg-black border-5 border-white">
        <nav className="px-2 sm:px-4 py-2.5 rounded ">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/" className="flex items-center cursor-pointer">
              <span className="self-center text-lg md:text-2xl source-sans font-semibold text-[#1DB67D] cursor-pointer">
                Cornelius OA
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              id="display-navigation"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setNavbar(!navbar)}
            >
              <span className="sr-only">Open main menu</span>
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            <div
              className={`w-full md:block md:w-auto ${
                navbar ? "block" : "hidden"
              }`}
              id="display-navigation"
            >
              <ul
                className={`leading-8 flex flex-col p-4 mt-4 text-center rounded-lg text-lg source-sans font-semibold md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ${
                  darkMode ? "text-black" : "text-white"
                } `}
              >
                <li className="hover:bg-gray-300 hover:text-black dark:hover:bg-[#424242] py-0.5 px-2 rounded text-lg">
                  <Link href="/blog">Blog + Newsletter</Link>
                </li>
                <li className="hover:bg-gray-300 hover:text-black dark:hover:bg-[#424242] py-0.5 px-2 rounded text-lg">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="hover:bg-gray-300 hover:text-black dark:hover:bg-[#424242] py-0.5 px-2 rounded text-lg">
                  <Link href="/contact">Contact</Link>
                </li>
                {/* <li onClick={() => setDarkMode(!darkMode)} className="flex text-lg dark:hover:bg-[#424242]"> <MdOutlineDarkMode className="text-center"/></li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
