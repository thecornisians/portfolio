import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AllProjects from "../components/AllProjects";

export default function PortfolioPage() {
  return (
    <div className="bg-black min-h-screen text-zinc-100 selection:bg-emerald-400 selection:text-black">
      <SEO
        title="Projects"
        description="Explore engineering projects, web applications, and digital platforms built by Cornelius Owusu-Ansah."
        canonical="/portfolio"
      />
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-16">
        <AllProjects />
      </main>
      <Footer />
    </div>
  );
}
