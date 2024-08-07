import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function BlogPosts() {
  return (
    <section>
      <div className="text-center mb-10 md:mt-10 ">
        <h4 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
          Blog Posts
        </h4>
        <p className="text-base text-body-color pb-3 px-4 source-sans">
          Here are some of my most recent blog posts (Tech and Non-tech)
        </p>
      </div>

      <div className="mt-5 px-5 pb-4">
        <div className="mb-7 shadow-lg p-4 border border-gray-400 bg-[#363e44] rounded-md">
          <h1 className="font-bold text-2xl pb-3 source-sans">Binary Search</h1>
          <p className="pb-3 text-lg source-sans">
            Binary search is a searching algorithm designed for sorted array or
            list. Binary search efficiently narrows down the search space by
            repeatedly dividing our search interval in half until we locate the
            position of the element we are searching for.
          </p>
          <Link href="/blog/binarysearch" className="cursor-pointer">
            <div className="hover:text-cyan-300 flex content-center cursor-pointer">
              Read More
              <BsFillArrowUpRightCircleFill className="my-auto ml-1" />
            </div>
          </Link>
        </div>

        <div className="mb-7 shadow-lg p-4 border border-gray-400  rounded-md">
          <h1 className="font-bold text-2xl pb-3 source-sans">
            A simple introduction to the MVC Architechture
          </h1>
          <p className="pb-3 text-lg source-sans">
            The model-view controller is a way of implementing software design
            by diving it into components.In other words, it is a way of building
            software where you break down/separate the application into 3
            logical components namely Model,View,Controller
          </p>
          <a
            className="hover:text-cyan-300 flex content-center"
            href="https://docs.google.com/presentation/d/1jdN7KdOwbqepRAbr9qS1e5Z8ggfd_FOqg__I1UHWJgQ/edit#slide=id.g1385ac14774_2_117"
            target="_blank"
            rel="noreferrer"
          >
            Read More <BsFillArrowUpRightCircleFill className="my-auto ml-1" />
          </a>
        </div>

        <div className="mb-7 shadow-lg p-6 border border-gray-400 bg-gray-900 rounded-md">
          <h1 className="font-bold text-2xl pb-3 source-sans">
            The Fear of starting anything in life
          </h1>
          <p className="pb-3 text-lg source-sans">
            Most people have the desire to do great things in life however not
            everyone acts on this desire. One reason for this is our fear of
            making something lame. We are held back by the fear of our work not
            being good enough
          </p>
          <a
            className="hover:text-cyan-300 flex content-center"
            href="https://cowans.substack.com/p/the-fear-of-starting-anything-in"
            target="_blank"
            rel="noreferrer"
          >
            Read More <BsFillArrowUpRightCircleFill className="my-auto ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
