import { FaLinkedin } from "react-icons/fa";
import Image from "next/image"
import { FaTwitterSquare } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
import Hi from "../public/hi.png"


export default function Hero(){
    return(
    <main className="min-h-full">
        <div className="md:flex md:align-middle lg:flex lg:align-middle p-4 ">
            <div className="text-center px-6 md:px-5 py-5 md:pt-28 lg:pt-28">
                <div>
                    <h2 className='text-5xl  text-white md:text-5xl mb-6 font-semibold font-mono p-4'>Hello, my name is <span className="text-[#1DB67D] animate-pulse hover:animate-bounce">Cornelius</span>.</h2>
                    <p className='text-m py-5 leading-8 text-white md:text-md max-w-xl mx-auto mb-6 lg:mb-8'> I am a Full-stack Software Engineer currently based in Accra,Ghana. I specialize
                    in building web applications.Skilled in solving problems with HTML, CSS, JavaScript, React, Nextjs, Node, Express, MongoDB.</p>
                    <a href="#portfolio" className="rounded-full my-5 bg-[#1DB67D] px-10 py-5 outline-none scroll-smooth hover:bg-cyan-200 bg-white-500 text-white mb-5">Explore Portfolio</a>  
                </div>

                <div className="mt- flex justify-center gap-2 text-white text-4xl">
                    <a href="https://www.linkedin.com/in/corneliusoa/" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin"><FaLinkedin /></a>
                    <a href="https://twitter.com/thecornisians" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin"><FaTwitterSquare/></a>
                    <a href="https://github.com/thecornisians" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin">< FaGithubSquare /></a>
                </div>
               
            </div>


            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-20 overflow-hidden md:h-96 md:w-96'>
                <Image src={Hi} layout="fill" objectFit='cover' className="m-auto "  alt="cornelius-owusu-ansah"/>
            </div>
        </div>
       
    </main>
    )
    
}


{/* <div className="bg">
<div className="flex flex-col items-center">
          <div className='text-center px-5 md:px-5 py-5 md:pt-28 lg:pt-28'>
              <h2 className='text-5xl py-2 text-white md:text-5xl mb-6 align-middle font-semibold  text-primary block font-mono'>Hello, my name is <span className="text-[#1DB67D] hover:animate-bounce">Cornelius</span>.</h2>
              <p className='text-m py-5 leading-8 text-white md:text-md max-w-xl mx-auto mb-6 lg:mb-8'> I am a Full-stack Software Engineer currently based in Accra,Ghana. I specialize
                  in building web applications.</p>
              <a href="#portfolio" className="rounded-full my-5 bg-[#1DB67D] px-10 py-5 outline-none scroll-smooth hover:bg-cyan-200 bg-white-500 text-white">Explore Portfolio</a>
          </div>
          <div className='text-4xl flex justify-center gap-9 text-white mb-8 mt-6 lg:mt-8 mx-auto'>
              <a href="https://www.linkedin.com/in/corneliusoa/" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin"><FaLinkedin /></a>
              <a href="https://twitter.com/thecornisians" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin"><FaTwitterSquare/></a>
              <a href="https://github.com/thecornisians" target="_blank" rel="noreferrer" className="hover:text-slate-600 hover:animate-spin">< FaGithubSquare /></a>
          </div>
         
</div>
<div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-20 overflow-hidden md:h-96 md:w-96 hover:animate-pulse'>
  <Image src={Hi} layout="fill" objectFit='cover' className="m-auto" />
</div>
</div> */}