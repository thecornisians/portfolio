import { FaLinkedin,FaTwitterSquare, FaGithubSquare, FaArrowCircleDown } from "react-icons/fa";
import Image from "next/image"
import Hi from "../public/hi.png"


export default function Hero(){
    return(
    <main className="min-h-full mb-4">
        {/* md:flex md:align-middle lg:flex lg:align-middle p-4  */}
        <section className={`min-h-full`} >
            <div className="text-center px-6 md:px-5 py-5 md:pt-28 lg:pt-28 mb-5">
                <div className="mb-8">
                    <h2 className='text-5xl md:text-7xl mb-6 font-semibold p-4'>Hello, my name is <span className="text-[#1DB67D] animate-pulse hover:animate-bounce">Cornelius</span>.</h2>
                    <p className='text-m py-5 leading-8  md:text-xl max-w-xl mx-auto mb-6 lg:mb-8'> I am a Full-stack Software Engineer currently based in Accra,Ghana.</p>
                    <a href="#portfolio" className="rounded-full my-5 bg-[#1DB67D] px-10 py-5 outline-none scroll-smooth hover:bg-cyan-200 bg-white-500  mb-6">Explore Portfolio</a>  
                </div>

                <div className=" flex justify-center gap-3 text-5xl mt-6">
                    <a href="https://www.linkedin.com/in/corneliusoa/" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin mt-3"><FaLinkedin /></a>
                    <a href="https://twitter.com/thecornisians" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin mt-3"><FaTwitterSquare/></a>
                    <a href="https://github.com/thecornisians" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin mt-3">< FaGithubSquare /></a>
                </div>
               
            </div>


            <a className="flex justify-center mt-6 mb-10" href="#about"><FaArrowCircleDown className="text-center text-5xl animate-bounce"/></a>
        </section>

        
       
    </main>
    )
    
}


