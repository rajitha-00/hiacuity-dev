import { BecomeATeamMember } from "@/components/BecomeATeamMember";
import { BlogCards } from "@/components/BlogCard";
import { BlogsHeroSection } from "@/components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};
export default function Blogs() {
  return (
    <div className="flex w-full flex-col items-center  justify-center">
      <BlogsHeroSection />
      <BlogCards />
      <div className="relative isolate px-6 pt-20 md:pt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <BecomeATeamMember
          title="Stay Inspired with Our Latest Blogs"
          description="Discover valuable insights, creative ideas, and expert tips to keep you informed and inspired. Don’t miss out on stories that spark curiosity and fuel your passion."
          buttonLable="Subscribe to News Letters!"
        />
      </div>
    </div>
  );
}
