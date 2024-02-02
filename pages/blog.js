import Navbar from "../components/Navbar";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/Date";
import Footer from "../components/Footer";

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
        <ul className="px-10 md:px-20">
          {allPostsData.map(({ id, date, title, shortDescription }) => (
            <li key={id} className="mb-8 md:mb-12">
              <div>
                <h4 className=" text-xl md:text-2xl font-bold md:text-left source-sans hover:text-gray-400">
                  <Link href={`/posts/${id}`}>{title}</Link>
                </h4>
                <p className="text-sm my-2 text-gray-300 source-sans">
                  Published <Date dateString={date} />
                </p>
              </div>
              <p className="source-sans">{shortDescription}</p>
            </li>
          ))}

          {/* This is a static link for my substack aricle */}
          <li className="mb-3 md:mb-8">
            <div>
              <h4 className=" text-xl md:text-2xl font-bold md:text-left source-sans hover:text-gray-400">
                <Link
                  href="https://cowans.substack.com/p/the-fear-of-starting-anything-in"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Fear of starting anything in life (External)
                </Link>
              </h4>
              <p className="text-sm my-2 text-gray-300 source-sans">
                Published September 20, 2021
              </p>
            </div>
            <p className="source-sans">
              Most people have the desire to do great things in life however not
              everyone acts on this desire. One reason for this is our fear of
              making something lame. We are held back by the fear of our work
              not being good enough
            </p>
          </li>
        </ul>
      </section>
      {/* <div>
        <iframe
          src="https://cowans.substack.com/embed"
          width="480"
          height="320"
          style={{
            // border: "1px solid #EEE",
            background: "white",
            marginInline: "auto",
          }}
        ></iframe>
      </div> */}
      <Footer />
    </div>
  );
}
