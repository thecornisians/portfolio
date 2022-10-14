import Header from "../components/Header"
import Form from "../components/Form"
import Link from 'next/link'
import Footer from "../components/Footer"
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image"
import { FaTwitterSquare } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
import cornelius from "../public/cornelius.JPG"

export default function About(){
    return(
        <main className=' bg-[#161C2D] px-10 dark:bg-gray-900 md:px-20 scroll-smooth' >
                <section className='min-h-screen'>
                    <Header />

                    <div className="md:flex md:gap-6 align-center mt-10 mb-3 scroll-smooth sm:gap-10">
                      <div className="text-white text-xl sm:mb-5 max-w-4xl">
                        <h3 className="text-4xl mb-12 font-mono">About Me</h3>
                          <p className="leading-8 ">I am a Full stack Software Engineer who loves building products that help make the world a little better. Skilled in solving problems with HTML, CSS, JavaScript, React, Node, Express, MongoDB etc. 
                          A firm believer in the "whole is greater than the sum of its parts" and hence focused on being a valuable member of any team I am on and helping the team rise together.
                          </p>
                          <p className="leading-8">A lifelong learner with interests spanning different disciplines. We can have a chat about psychology, philosophy, Economics, Physics, etc. I write about my learnings in my weekly newsletter  <a href="https://cowans.substack.com" rel="noreferrer" className="text-[#1DB67D]" target='_blank'>here</a></p>
                      </div>

                      <div className="w-1/2 sm:mt-20 ">
                        <Image src={cornelius} className='max-w-100 sm:object-contain sm:h-48 sm:w-96' />
                      </div>
         
                    </div>

                    <p className="text-xl text-center text-white mt-10">Connect with me</p>   
                    <div className='text-4xl flex justify-center gap-9 text-white mb-8 mt-6 lg:mt-8 mx-auto'>
                        <a href="https://www.linkedin.com/in/corneliusoa/" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin"><FaLinkedin /></a>
                        <a href="https://twitter.com/thecornisians" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin"><FaTwitterSquare/></a>
                        <a href="https://github.com/thecornisians" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin">< FaGithubSquare /></a>
                    </div>
                </section>
                <Footer />
        </main>
      
    )
}
