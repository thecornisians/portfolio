import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/Date";
import Footer from "../components/Footer";
import { ArrowUpRight, BookOpen, ExternalLink, PenTool } from "lucide-react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <div className="bg-black min-h-screen text-zinc-100 selection:bg-emerald-400 selection:text-black">
      <SEO
        title="Writing & Essays"
        description="Essays, algorithmic deep-dives, and technical notes on software engineering, architecture, and product building by Cornelius Owusu-Ansah."
        canonical="/blog"
      />
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-16 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 mb-3">
            <span>✍️</span>
            <span>Writing Archive</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Essays &amp; Tech Notes
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-light">
            Thoughts on algorithms, software design, psychology, and creative work.
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {allPostsData.map(({ id, date, title, shortDescription }) => (
            <article
              key={id}
              className="group p-6 sm:p-7 rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-white/20 transition-all backdrop-blur-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono text-emerald-400">
                  <Date dateString={date} />
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/5">
                  Internal Post
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                <Link href={`/blog/${id}`}>
                  <a className="inline-flex items-center gap-1.5">
                    <span>{title}</span>
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </Link>
              </h2>

              <p className="text-sm text-zinc-400 leading-relaxed font-light mb-4">
                {shortDescription}
              </p>

              <Link href={`/blog/${id}`}>
                <a className="text-xs font-mono text-emerald-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>Read article</span>
                  <ArrowUpRight size={12} />
                </a>
              </Link>
            </article>
          ))}

          {/* External Substack Article */}
          <article className="group p-6 sm:p-7 rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-white/20 transition-all backdrop-blur-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-mono text-emerald-400">
                September 20, 2021
              </span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                Substack Essay ↗
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
              <a
                href="https://cowans.substack.com/p/the-fear-of-starting-anything-in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <span>The Fear of Starting Anything in Life</span>
                <ExternalLink size={16} />
              </a>
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed font-light mb-4">
              Most people have the desire to do great things in life, however not everyone acts on this desire. One reason for this is our fear of making something lame. We are held back by the fear of our work not being good enough.
            </p>

            <a
              href="https://cowans.substack.com/p/the-fear-of-starting-anything-in"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-emerald-400 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>Read on Substack</span>
              <ExternalLink size={12} />
            </a>
          </article>
        </div>

        {/* Substack Newsletter Embed Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/10 text-center">
          <BookOpen size={24} className="text-emerald-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-2">
            Subscribe to Cornelius&apos;s Weekly Newsletter
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-6">
            Get weekly essays on technology, psychology, philosophy, and practical life frameworks delivered straight to your inbox.
          </p>
          <a
            href="https://cowans.substack.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <span>Subscribe on Substack</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
