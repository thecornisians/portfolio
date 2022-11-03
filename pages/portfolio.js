import Portfolio from "../components/Portfolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function portfolioPage(){
    return (
        <section className="bg-gray-200">
            <Navbar />
            <Portfolio className="min-h-full"/>
            {/* <Projects /> */}
            <Footer />
        </section>
    )
} 

