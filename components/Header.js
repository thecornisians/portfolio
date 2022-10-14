import Link from "next/link";
import Head from 'next/head'
import { useState } from "react";
// import {BsFillMoonStarsFill} from 'react-icons/bs'
import contact from "../pages/contact";
import about from "../pages/about";

export default function Header(){
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div>
            <head>
                <title>Cornelius Owusu-Ansah</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
            </head>

            <header>
                <nav className="py-10  mb-12 flex justify-between text-black" >
                    <Link href="/">
                        <h1 className="text-3xl cursor-pointer font-thin font-sans text-[#1DB67D]">Cornelius.</h1>
                    </Link>
                    
                    <ul className='flex items-center text-white cursor-pointer text-xl gap-4'>
                            <li className="text-white hover:bg-gray-300 dark:hover:bg-[#424242] py-0.5 px-2 rounded text-base">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="text-white hover:bg-gray-300 dark:hover:bg-[#424242] py-0.5 px-2 rounded text-base">
                                <Link href="/">Portfolio</Link>
                            </li>
                            <li className="hover:bg-gray-300 dark:hover:bg-[#424242] py-0.5 px-2 rounded text-base">
                                <a href="https://cowans.substack.com/" target='_blank' rel="noreferrer">Blog</a>
                            </li>
                            <li className="hover:bg-gray-300 dark:hover:bg-[#424242] py-0.5 px-2 rounded text-base">
                                <Link href="/contact">Contact</Link>
                            </li>

                            {/* <li>
                                <BsFillMoonStarsFill onClick={ () =>{
                                    setDarkMode(!darkMode)
                                        }}/>
                            </li> */}
                    </ul>
                    
                </nav>
            </header>
        </div>    
    )
}

