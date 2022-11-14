import Image from "next/image"
import { icons } from "react-icons"
import cornelius from "../public/cornelius.JPG"
import { FaReact,FaBootstrap,FaHtml5 } from 'react-icons/fa'
import { TbBrandNextjs,TbBrandJavascript,TbBrandCss3,TbBrandTailwind } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiPostman,SiMongodb,SiExpress } from "react-icons/si";


export default function About(){
    return( 
        // bg-[#2B69B3]
                <section className='p-4 smooth-scroll bg-[#ebf1f8] mb-5 '  id="about">
                    <div className="lg:flex lg:flex-row-reverse align-center justify-center scroll-smooth sm:gap-10 ">
                      {/* flex flex-col-reverse md:gap-6 align-center justify-center scroll-smooth sm:gap-10 */}
                      <div className='mx-auto my-auto rounded-full h-60 w-60 mt-20 md:mb-20 overflow-hidden md:h-96 md:w-96'>
                             <Image src={cornelius}  alt="cornelius-owusu-ansah" className="max-w-100 rounded-full"/>
                        </div>
                        
                      <div className=" text-md md:text-xl sm:mb-5 max-w-4xl align-middle my-9 text-center p-3">
                        <h3 className="text-4xl mb-12 font-extrabold text-center lg:text-right">About Me</h3>
                          <p className="font-md md:font-xl md:text-left mb-2 ">I am a Full stack Software Engineer who loves building products that help make the world a little better. Skilled in solving problems with HTML, CSS, JavaScript, React, Nextjs, Node, Express, MongoDB.</p>
                          <p className="font-md md:font-xl md:text-left mb-2 " >A lifelong learner with interests spanning different disciplines. We can have a chat about psychology, philosophy, Economics, Physics, etc. I write about my learnings in my weekly newsletter  <a href="https://cowans.substack.com" rel="noreferrer" className="text-[#1DB67D]" target='_blank'>here. </a>
                            When I am not writing code, you can find me listening to or making music. I occassionaly also write and direct short films/ creative projects. You can see some of my past projects  <a href="https://instagram.com/thecornisians" rel="noreferrer" className="text-[#1DB67D]" target='_blank'>here.</a>
                          </p>  
                      </div>
                    </div>

                  <section className="text-center">
                    <h3 className=" text-2xl md:text-4xl md:mb-12 font-extrabold">Tech Stack and Frameworks</h3>
                    <div className="flex text-6xl gap-2 md:gap-4 mx-auto py-12 justify-center">
                      <FaReact />
                      <TbBrandNextjs />
                      <TbBrandJavascript />
                      <FaHtml5 />
                      <TbBrandCss3 />
                      <TbBrandTailwind />
                      <FaBootstrap />
                      <DiNodejs />
                      <SiExpress />
                      <SiMongodb />
                      <SiPostman />
                    </div>

                  </section>
                </section>
      
    )
}
