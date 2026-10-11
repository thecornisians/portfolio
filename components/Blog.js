import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function BlogPosts() {
  const posts = [
    {
      title: "Binary Search",
      tag: "Computer Science",
      readTime: "4 min read",
      description:
        "An intuitive breakdown of the logarithmic search algorithm designed for sorted arrays, narrowing search space with O(log n) efficiency.",
      link: "/blog/binarysearch",
      external: false,
    },
    {
      title: "A Simple Introduction to MVC Architecture",
      tag: "Software Engineering",
      readTime: "6 min read",
      description:
        "Understanding how Model, View, and Controller separate concerns cleanly in scalable production web applications.",
      link: "https://docs.google.com/presentation/d/1jdN7KdOwbqepRAbr9qS1e5Z8ggfd_FOqg__I1UHWJgQ/edit#slide=id.g1385ac14774_2_117",
      external: true,
    },
    {
      title: "The Fear of Starting Anything in Life",
      tag: "Philosophy & Mindset",
      readTime: "5 min read",
      description:
        "Why so many of us hesitate before launching creative and technical projects — and how to overcome the paralysis of perfectionism.",
      link: "https://cowans.substack.com/p/the-fear-of-starting-anything-in",
      external: true,
    },
  ];

  return (
    <section id="writing" className="relative scroll-mt-20 px-4 sm:px-6 py-20 lg:py-24 max-w-6xl mx-auto text-[#F5F5F5]">
      {/* Header (PRD 4.5) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3 tracking-wider uppercase">
            <span>THOUGHTS &amp; IDEAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-3">
            Articles &amp; Essays
          </h2>
          <p className="text-[#A3A3A3] text-base max-w-xl font-light leading-relaxed">
            Things I&apos;m learning, questions I&apos;m exploring, and ideas worth sharing.
          </p>
        </div>

        <a
          href="https://cowans.substack.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-[#252525] text-xs font-mono text-zinc-300 hover:text-white transition-all w-fit group"
        >
          <span>Read more on Substack</span>
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Grid of Posts (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(({ title, tag, readTime, description, link, external }, idx) => (
          <div
            key={idx}
            className="group rounded-2xl bg-[#0D0D0D] border border-[#252525] hover:border-zinc-700 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            <div>
              {/* Badges */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-md bg-zinc-900 border border-white/5 text-[11px] font-mono text-emerald-400">
                  {tag}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">{readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5] mb-3 group-hover:text-emerald-300 transition-colors leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed font-light mb-6">
                {description}
              </p>
            </div>

            {/* Read Link */}
            <div className="pt-4 border-t border-[#252525]">
              {external ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={13} />
                </a>
              ) : (
                <Link href={link} passHref>
                  <a className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-emerald-400 transition-colors">
                    <span>Read Article</span>
                    <ArrowUpRight size={13} />
                  </a>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
