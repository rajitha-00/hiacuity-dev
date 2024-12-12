"use client";
import { BLOG_DATA } from "@/constants";
import BlogCard from "./BlogCard";
import { Fade } from "react-awesome-reveal";

export const BlogCards = () => {
  return (
    <div className="relative isolate px-6 w-full lg:px-8 max-w-[1600px] mx-auto ">
      <div className="grid md:grid-cols-3 lg:grid-cols-3.5 gap-10 mt-14 text-white">
        {BLOG_DATA.map((blog, index) => (
          <Fade
            key={blog.id}
            triggerOnce
            direction="up"
            delay={100 * index} // Staggered delay
          >
            <BlogCard
              id={blog.id}
              imageSrc={blog.imageSrc}
              title={blog.title}
              date={blog.date}
              shares={blog.shares}
              description={blog.description}
            />
          </Fade>
        ))}
      </div>
    </div>
  );
};
