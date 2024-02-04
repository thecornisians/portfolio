import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getAlllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import Head from "next/head";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <div className="text-white container">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navbar />
      <section className="px-6 md:px-[5rem] mx-auto">
        <h4 className="text-4xl mb-2 source-sans font-extrabold text-center lg:text-center">
          {postData.title} <br />
        </h4>
        <span className="flex justify-center mb-12">
          <Date dateString={postData.date} />
        </span>

        <div
          className="md:text-lg source-sans "
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </section>
      <p className="text-center mt-3 md:mt-6 uppercase hover:text-gray-700">
        {" "}
        <Link href="/blog">Back to blog posts</Link>
      </p>
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
