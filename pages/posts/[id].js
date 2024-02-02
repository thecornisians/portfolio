import Navbar from "../../components/Navbar";
import { getAlllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/Date";
import Head from "next/head";

export default function Post({ postData }) {
  return (
    <div className="text-white">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navbar />
      <section className="p-5 md:px-[5rem]">
        <h4 className="text-4xl mb-2 source-sans font-extrabold text-center lg:text-center">
          {postData.title} <br />
        </h4>
        <span className="flex justify-center mb-12">
          <Date dateString={postData.date} />
        </span>

        <div
          className="md:text-lg"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </section>
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
