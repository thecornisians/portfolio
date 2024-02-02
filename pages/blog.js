import Navbar from "../components/Navbar";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/Date";

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
    <div className="text-white">
      <Navbar />
      <section>
        <h3 className="text-4xl mb-12 source-sans font-extrabold text-center lg:text-center">
          Blog Posts
        </h3>
        <ul className="p-5 md:p-8">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="source-sans mb-3 md:mb-6">
              <p className=" text-xl md:text-2xl md:text-left mb-2 source-sans">
                <Link href={`/posts/${id}`}>{title}</Link>
              </p>
              <p>
                <Date dateString={date} />
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
