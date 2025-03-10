import { HeroSectionCommon } from "@/components/HeroSection";
import HiringHomePageImage from "../../assets/homepage/ContactHero.svg";
import { SectionHeader } from "@/components/Typography";
import { ValuesCard } from "@/components/ContactUs/ValuesCard";
import { Metadata } from "next";
import ContactForm from "@/components/ContactUs/ContactForm";

export const metadata: Metadata = {
  title: "HiAcuity | Contact Us",
};

export default function Contact() {
  return (
    <div className="flex w-full flex-col items-center  justify-center">
      <HeroSectionCommon
        title1="Ready to"
        title2="Level Up"
        title3="Your Business"
        url={HiringHomePageImage}
        cta=""
        heroText=""
        hasImage
      />
      <div className="h-auto z-20 py-10 bg-text-title w-full mt-20 md:0">
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <SectionHeader hasLightTitle title="Contact Our Friendly Team" />
          <ValuesCard />
        </div>
      </div>
      <div className="relative isolate px-6 pt-20 md:pt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(41,250,66,0.1) 5%, rgba(111,250,170,0.1) 40%, transparent 70%)",
          }}
          className="absolute hidden md:block -right-[35%] top-[30%] z-0 w-[800px] h-[800px] rounded-full "
        ></div>
        <SectionHeader title="Get in Touch" />
        <ContactForm />
      </div>
    </div>
  );
}
