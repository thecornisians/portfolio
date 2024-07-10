import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Logos from "../components/Logos";
import Footer from "../components/Footer";
import About from "../components/About";
import BlogPosts from "../components/Blog";
import { IoMdMail } from "react-icons/io";

export default function Home({ portfolioImage }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      {/* <Logos /> */}
      <BlogPosts />
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
            Contact
          </h2>
          <p className="mb-4 md:mb-7 font-light text-center text-white dark:text-gray-400 sm:text-xl source-sans">
            Want to talk about a new project you have or have a question ? Send
            me an email and I will get back to you as soon as possible.
          </p>
          <div className="flex justify-center items-center text-lg md:text-xl source-sans">
            <IoMdMail />{" "}
            <a className="text-white" href="mailto:thecornisians@gmail.com">
              : thecornisians@gmail.com
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
