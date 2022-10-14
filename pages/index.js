import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio'
import Image from "next/image"
import Logos from '../components/Logos';
import Footer from '../components/Footer';
import { useState } from 'react';


export default function Home({ portfolioImage }) {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ""}>
      <main className=' bg-[#161C2D] px-10 dark:bg-gray-900 md:px-20 scroll-smooth' >
        <div className='min-h-screen'>
            <Header />
            <Hero  />
        </div>
        <Portfolio />
        <Logos />
        <Footer />
      </main>
    </div>
  )
}
