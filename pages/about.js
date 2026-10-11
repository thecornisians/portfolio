import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-zinc-100 selection:bg-emerald-400 selection:text-black">
      <SEO
        title="About"
        description="Cornelius Owusu-Ansah is a Ghanaian software engineer and entrepreneur with 5+ years of experience building digital products and leading engineering."
        canonical="/about"
      />
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-16">
        <About />
      </main>
      <Footer />
    </div>
  );
}
