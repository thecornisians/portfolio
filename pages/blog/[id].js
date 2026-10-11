import SEO from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getAlllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function Post({ postData }) {
  return (
    <div className="bg-black min-h-screen text-zinc-100 selection:bg-emerald-400 selection:text-black">
      <SEO
        title={postData.title}
        description={postData.shortDescription}
        canonical={`/blog/${postData.id}`}
        ogType="article"
        publishedTime={postData.date}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: postData.title,
          description: postData.shortDescription,
          datePublished: postData.date,
          author: {
            "@type": "Person",
            name: "Cornelius Owusu-Ansah",
            url: "https://thecornisians.com",
          },
          publisher: {
            "@type": "Person",
            name: "Cornelius Owusu-Ansah",
          },
        }}
      />
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-16 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link href="/blog">
          <a className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to all posts</span>
          </a>
        </Link>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 mb-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <Date dateString={postData.date} />
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {postData.title}
          </h1>
        </header>

        {/* Article Body */}
        <div
          className="article-content font-sans"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />

        {/* Bottom Navigation */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] flex items-center justify-between">
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft size={14} />
              <span>Back to blog archive</span>
            </a>
          </Link>

          <a
            href="https://cowans.substack.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-emerald-400 hover:underline"
          >
            Read more on Substack ↗
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAlllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
