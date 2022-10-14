import Contact from "../pages/contact";
import Link from "next/link";
import Image from "next/image"
import { FaTwitterSquare } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";


export default function Cta(){
    return(
        <section>
                  <h3 className="text-3xl text-center text-white mt-10">Connect with me</h3>   
                    <div className='text-4xl flex justify-center gap-9 text-white mb-8 mt-6 lg:mt-8 mx-auto'>
                        <a href="https://www.linkedin.com/in/corneliusoa/" target="_blank" className="hover:text-slate-600 hover:animate-spin"><FaLinkedin /></a>
                        <a href="https://twitter.com/thecornisians" target="_blank" className="hover:text-slate-600 hover:animate-spin"><FaTwitterSquare/></a>
                        <a href="https://github.com/thecornisians" target="_blank" className="hover:text-slate-600 hover:animate-spin">< FaGithubSquare /></a>
                    </div>
        </section>
    )
}