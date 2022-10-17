import Head from 'next/head'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio'
import Image from "next/image"
import Logos from '../components/Logos';
import Footer from '../components/Footer';



export default function Home({ portfolioImage }) {
  return (
      <div className='bg-[#161C2D] min-h-full'>
          <Navbar />
          <Hero />
          <Portfolio />
          <Logos />
          
        <Footer />
    
      </div>
      // className='container bg-[#161C2D] px-10 md:px-20 scroll-smooth'

  )
}
{/* <div className='min-h-screen'>
<Header />
<Hero  />
</div>
<Portfolio />
<Logos />
<Footer /> */}