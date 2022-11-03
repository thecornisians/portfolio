import Navbar from "../components/Navbar"
import Form from "../components/Form"
import Link from 'next/link'
import Footer from "../components/Footer"

export default function Contact(){
    return(
        <main className=' dark:bg-gray-900 scroll-smooth' >
                <section className='min-h-screen'>
                    <Navbar />
                    <Form />         
                
                </section>
                <Footer />
        </main>
      
    )
}