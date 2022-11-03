import Image from "next/image"
import Amargaret from '../public/Amargaret.png'
import Chill from '../public/chill.png'
import Asomani from '../public/nanaasomani.png'

export default function Logos(){
    return(
   
    <div className="relative flex overflow-x-hidden text-white sm:hidden md:block bg-black">
        <div className="py-12 animate-marquee ">
          <span className="text-4xl mx-4 hover:text-gray-400 "><a href="http://thechillgh.com/" target="_blank" rel="noreferrer">ChillRiver Resort</a></span>
          <span className="text-4xl mx-4 text-[#1DB67D] "><a href="https://nanaasomani.com/" target="_blank" rel="noreferrer">Nana Asomani</a></span>
          <span className="text-4xl mx-4 "><a href="https://shopamargaret.com/ " target="_blank" rel="noreferrer">Amargaret</a></span>
          <span className="text-4xl mx-4 text-[#1DB67D] "><a href="http://larryjayghana.com/" target="_blank" rel="noreferrer">LarryJay Ghana</a></span>
          <span className="text-4xl mx-4 "><a href="https://nurtureholiks.com/" target="_blank" rel="noreferrer">Nurture Skin</a></span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span className="text-4xl mx-4 "><a href="http://thechillgh.com/"  target="_blank" rel="noreferrer">ChillRiver Resort</a></span>
          <span className="text-4xl mx-4 text-[#1DB67D] "><a href="https://nanaasomani.com/" target="_blank" rel="noreferrer">Nana Asomani</a></span>
          <span className="text-4xl mx-4 "><a href="https://shopamargaret.com/ " target="_blank" rel="noreferrer">Amargaret</a></span>
          <span className="text-4xl mx-4 text-[#1DB67D] "><a href="http://larryjayghana.com/" target="_blank" rel="noreferrer">LarryJay Ghana</a></span>
          <span className="text-4xl mx-4 "><a href="https://haleoptionz.com/" target="_blank" rel="noreferrer">HaleOptions</a></span>
        </div>
</div>

    )
}


