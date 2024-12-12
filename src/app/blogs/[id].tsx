import { useRouter } from "next/router";
import { BLOG_DATA } from "@/constants";

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

  const blogId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);

  const blog = BLOG_DATA.find((blog) => blog.id === blogId);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={blog?.imageSrc} alt={blog?.title} className="w-full h-80 object-cover rounded-md mb-6" />
      <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>
      <div className="text-gray-500 text-sm mb-4">
        <span>{blog?.date}</span>
        <span className="text-gray-400 mx-2">•</span>
        <span>{blog?.shares} shares</span>
      </div>
      <p className="text-gray-700">{blog?.description}</p>
    </div>
  );
}
