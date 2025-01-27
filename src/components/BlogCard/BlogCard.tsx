import React from "react";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  id: number;
  imageSrc: string;
  title: string;
  date: string;
  shares: number;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  imageSrc,
  title,
  date,
  shares,
  description,
}) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative w-[95%] h-80 p-2 mt-2 rounded-lg mx-auto border border-red-50 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <div className="text-sm text-gray-500 mb-3 flex items-center space-x-2">
          <span>{date}</span>
          <span className="text-gray-400">•</span>
          <span>{shares} shares</span>
        </div>
        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
      </div>
      <div className="p-4 flex justify-start">
        <Link
          href={`/blogs/${id}`}
          passHref
          className="text-sm text-primary-dark font-semibold hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
