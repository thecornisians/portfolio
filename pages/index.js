import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import BlogPosts from "../components/Blog";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen selection:bg-emerald-400 selection:text-black">
      <SEO
        title="Cornelius Owusu-Ansah — Software Engineer & Founder"
        description="Cornelius Owusu-Ansah is a Ghanaian software engineer, product builder, and co-founder of Gaderin based in Accra. Building scalable digital products, web systems, and consumer tech."
        canonical="/"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <BlogPosts />
        <Form />
      </main>
      <Footer />
    </div>
  );
}
