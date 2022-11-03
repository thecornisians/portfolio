import { FaLinkedin } from "react-icons/fa";
import Image from "next/image"
import { FaTwitterSquare } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"

export default function Footer(){
    return (   
        <footer className="p-4 shadow md:items-center md:justify-between md:p-6 dark:bg-gray-800 md:flex lg:flex bg-black text-white">
            <span className="text-md text-gray-500 sm:text-center dark:text-gray-400">© 2022 Cornelius Owusu-Ansah. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center gap-2 mt-3 text-md text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://www.linkedin.com/in/corneliusoa/" target="_blank" rel="noreferrer" className="hover:text-slate-600 mr-4 hover:underline md:mr-6 text-xl"><FaLinkedin /></a>
                </li>
                <li>
                <a href="https://twitter.com/thecornisians" target="_blank" rel="noreferrer" className="hover:text-slate-600 mr-4 hover:underline md:mr-6 text-xl"><FaTwitterSquare/></a>
                </li>
                <li>
                <a href="https://github.com/thecornisians" target="_blank" rel="noreferrer" className="hover:text-slate-600  mr-4 hover:underline md:mr-6 text-xl">< FaGithubSquare /></a>
                </li>
            </ul>
        </footer>

    )
}



                      
                       