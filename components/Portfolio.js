import Happynotes from '../public/happynotes.gif'
import Image from "next/image"
import creativeConnect from '../public/creativesConnect.gif'
import Nanaasomani from '../public/nanaasomani.gif'
import Drinks from '../public/drinks.gif'

export default function Portfolio(){
    return (
        <section id='portfolio' className='scroll-smooth'>

              <div className="flex flex-wrap -mx-4 text-white">
                <div className="w-full px-4">
                  <div className="text-center mx-auto mb-[60px] max-w-[510px]">
                    <span className="font-semibold text-lg text-primary mb-2 block">
                      Portfolio
                    </span>
                    <h2
                      className="
                        font-bold
                        text-3xl
                        sm:text-4xl
                        md:text-[40px]
                        text-dark
                        mb-4
                      ">
                      Recent Projects
                    </h2>
                    <p className="text-base text-body-color">
                     Here are some of my most recent projects and freelance work
                    </p>
                  </div>
                </div>
              </div>
              <div>
                      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                          <div className='basis-1/3 flex-1'>
                              <Image src={creativeConnect} className="rounded-lg max-w-full h-15 w-15" />
                              <div className='flex gap-3 mt-2'>
                                <button className="px-5 py-3 text-white rounded-md bg-gray-800 hover:bg-gray-400"> <a href='https://github.com/thecornisians/Creatives-connect'>Github Repo</a></button>
                                <button className="px-5 py-3 text-white rounded-md bg-gray-800 hover:bg-gray-400"> <a href='#'>Live Site</a></button>
                              </div>
                          </div>

                          <div className='basis-1/3 flex-1'>
                            <Image src={Nanaasomani} className="rounded-lg max-w-full h-15 w-15" />
                            <div className='flex gap-3 mt-2'>
                                <button className="px-5 py-3 text-white rounded-md bg-gray-800 hover:bg-gray-400"> <a href='#'>Github Repo</a></button>
                                <button className="px-5 py-3 text-white rounded-md bg-gray-800 hover:bg-gray-400"> <a href='https://nanaasomani.com/' target='_blank'>Live Site</a></button>
                              </div>
                          </div>

                          <div className='basis-1/3 flex-1'>
                            <Image src={Happynotes} className="rounded-lg max-w-full h-15 w-15" />
                            <div className='flex gap-3 mt-2'>
                                <button className="px-5 py-3 text-white rounded-md bg-gray-800 hover:bg-gray-400"> <a href='https://github.com/thecornisians/happy-notes' target='_blank'>Github Repo</a></button>
                                <button className="px-5 py-3 text-white rounded-md bg-gray-800 hover:bg-gray-400"> <a href='#'>Live Site</a></button>
                              </div>
                          </div>
                          
                          <div className='basis-1/3 flex-1'>
                            <Image src={Drinks} className="rounded-lg max-w-full h-15 w-15" />
                            <div className='flex gap-3 mt-2'>
                                <button className="px-5 py-3 text-white rounded-md bg-gray-800 hover:bg-gray-400"> <a href='https://github.com/thecornisians/cocktail-recipe'>Github Repo</a></button>
                                <button className="px-5 py-3 text-white rounded-md bg-gray-800 hover:bg-gray-400"> <a href=''>Live Site</a></button>
                              </div>
                          </div>
                      </div>
              </div>
                
              <span className="font-semibold text-lg text-primary mb-2 block text-white text-center">
                      Past Clients
                    </span>
           
        </section>
    )
}




