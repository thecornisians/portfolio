import Amargaret from "../public/Amargaret.png"
import chill from "../public/chill.png"
import Image from "next/image"


export default function Projects(){
    return(
        <section>
            <h3> Built for Companies including: </h3>
            <div className="flex">
                <a href='https://shopamargaret.com/' target='_blank' rel="noreferrer" className="h-20 w-20"><Image src={Amargaret}  /></a>
                <a href='https://thechillgh.com/' target='_blank' rel="noreferrer" className="h-20 w-20"><Image src={chill} /></a>
            </div>

        </section>
    )
}