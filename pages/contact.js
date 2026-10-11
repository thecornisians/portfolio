import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-black min-h-screen text-zinc-100 selection:bg-emerald-400 selection:text-black">
      <SEO
        title="Contact"
        description="Get in touch with Cornelius Owusu-Ansah for software engineering opportunities, product leadership, and collaboration."
        canonical="/contact"
      />
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-16">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
