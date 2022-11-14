import Head from 'next/head'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio'
import Image from "next/image"
import Logos from '../components/Logos';
import Footer from '../components/Footer';
import About from '../components/About'
import Form from '../components/Form';
import BlogPosts from '../components/Blog';
import { useState } from 'react';



export default function Home({ portfolioImage }) {
  const[ darkMode, setDarkMode] = useState(false)

  return (
    // bg-[#161C2D]
      <div>
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          {/* <Logos /> */}
          <BlogPosts />
          <Form />
          
        <Footer />
    
      </div>

  )
}
