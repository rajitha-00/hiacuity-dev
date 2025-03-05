"use client";
import { useParams, notFound } from "next/navigation";
import { BLOG_DATA } from "@/constants";

export default function BlogDetail() {
  const params = useParams();
  const blogId = Array.isArray(params.blogId)
    ? params.blogId[0]
    : params.blogId;
  const parsedId = blogId ? parseInt(blogId, 10) : null;

  if (!parsedId) {
    return <div>Loading...</div>;
  }

  const blog = BLOG_DATA.find((blog) => blog.id === parsedId);

  if (!blog) {
    return notFound(); // Redirect to the default Next.js 404 page
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={blog.imageSrc}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
      <div className="text-gray-500 text-sm mb-4">
        <span>{blog.date}</span>
        <span className="text-gray-400 mx-2">•</span>
        <span>{blog.shares} shares</span>
      </div>
      <p className="text-gray-700">{blog.description}</p>
    </div>
  );
}
