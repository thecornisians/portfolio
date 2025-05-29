import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function BlogPosts() {
  const posts = [
    {
      title: "Binary Search",
      description:
        "Binary search is a searching algorithm designed for sorted arrays. It efficiently narrows the search space by dividing the interval in half until the target is found.",
      link: "/blog/binarysearch",
      external: false,
    },
    {
      title: "A Simple Introduction to the MVC Architecture",
      description:
        "MVC is a way of building software where you separate it into three logical components: Model, View, and Controller.",
      link: "https://docs.google.com/presentation/d/1jdN7KdOwbqepRAbr9qS1e5Z8ggfd_FOqg__I1UHWJgQ/edit#slide=id.g1385ac14774_2_117",
      external: true,
    },
    {
      title: "The Fear of Starting Anything in Life",
      description:
        "Many people want to do great things but are held back by the fear that their work won't be good enough. This fear can paralyze action and progress.",
      link: "https://cowans.substack.com/p/the-fear-of-starting-anything-in",
      external: true,
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="text-center mb-14">
        <h4 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
          Blog Posts
        </h4>
        <p className="text-base text-gray-400 max-w-xl mx-auto px-2">
          Here are some of my most recent blog posts (Tech and Non-tech)
        </p>
      </div>

      <div className="grid gap-8 px-6 md:px-20 lg:grid-cols-3">
        {posts.map(({ title, description, link, external }, idx) => (
          <div
            key={idx}
            className="backdrop-blur-sm bg-white/5 border border-gray-700 rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="font-semibold text-xl md:text-2xl mb-3">{title}</h2>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              {description}
            </p>
            {external ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-[#1DB67D] hover:text-white transition"
              >
                Read More <BsFillArrowUpRightCircleFill className="ml-2" />
              </a>
            ) : (
              <a
                href={link}
                className="inline-flex items-center text-[#1DB67D] hover:text-white transition"
              >
                Read More <BsFillArrowUpRightCircleFill className="ml-2" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
