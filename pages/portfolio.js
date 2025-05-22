import Portfolio from "../components/Portfolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AllProjects from "../components/AllProjects";

export default function portfolioPage() {
  return (
    <section className="bg-slate-400">
      <Navbar />
      <AllProjects className="min-h-full" />

      <Footer />
    </section>
  );
}
