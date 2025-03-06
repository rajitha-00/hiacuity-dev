import { HeroSectionCommon } from "@/components/HeroSection";
import HiringHomePageImage from "../../assets/homepage/HiringHomePage.svg";
import { SectionLeftImage } from "@/components/sectionLeft";
import { SectionRightImage } from "@/components/sectionRight";
import { OurValues } from "@/components/OurValues";
import { BecomeATeamMember } from "@/components/BecomeATeamMember";
import OurMissionImage from "../../assets/images/OurMission.svg";
import OurVisionImage from "../../assets/images/OurVision.svg";
import OurStoryImage from "../../assets/images/OurStory.svg";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "HiAcuity | About Us",
};
export default function About() {
  return (
    <div className="flex w-full flex-col items-center  justify-center">
      {/* Hero Section: Displays the main introduction and key messaging of the website */}
      <HeroSectionCommon
        title1="Revolutionizing "
        title2="Empower"
        title3="with AI Precision"
        url={HiringHomePageImage}
        cta=""
        heroText=""
        hasImage
      />
      <div className="relative isolate px-6 pt-20 md:pt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(41,250,66,0.1) 5%, rgba(111,250,170,0.1) 40%, transparent 70%)",
          }}
          className="absolute hidden md:block -left-[35%] top-[40%] z-0 w-[800px] h-[800px] rounded-full "
        ></div>

        <div className="flex flex-col z-10 gap-16  md:gap-32 pt-10 md:pt-20">
          <SectionRightImage
            title="Our Mission"
            description="At HIAcuity, our mission is to revolutionize insights, enabling organizations to make transformative, data-driven decisions with precision and confidence. Through advanced AI technologies, we bridge the gap between data and actionable intelligence, fostering a future of informed and innovative decision-making."
            imageSrc={OurMissionImage}
          />
          <SectionLeftImage
            title="Our Vision"
            description="We envision a world where every organization has access to cutting-edge AI insights that drive transformative outcomes and operational efficiency. Our vision is to be the leading source of innovative AI solutions that revolutionize industries."
            imageSrc={OurVisionImage}
          />
        </div>
      </div>

      <div
        className="h-auto py-10  w-full mt-20 md:mt-40"
        style={{
          background:
            "linear-gradient(135deg, #031602 0%, #194D1F 50%, #194D1F 100%)",
        }}
      >
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <OurValues />
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
        <div className="flex flex-col z-10 gap-16  md:gap-32 pt-10 md:pt-20">
          <SectionLeftImage
            label="Jane Doe : CEO"
            title="Meet Our Founder "
            description="Jane Doe, our visionary founder, brings over two decades of experience in AI and technology. Her passion for leveraging AI and data to improve decision-making has driven HIAcuity's mission since its inception. Under her leadership, we continue to push the boundaries of what's possible with AI innovation."
            imageSrc={
              "https://media.licdn.com/dms/image/v2/D5603AQGLxY-3THLH5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722490038263?e=1746662400&v=beta&t=2s_kaVd7ThSgJ8dn_xyvP6PIXZWSe9IZKaAe8wv8DlQ"
            }
          />
          <SectionRightImage
            title="Our Story"
            description="HIAcuity started as a small startup with a big dream: to harness the power of AI and data to transform industries. Over the years, our dedication to innovation and excellence has propelled us to the forefront of AI analytics. Today, we are proud to support organizations worldwide in their quest for transformative outcomes through AI-driven insights."
            imageSrc={OurStoryImage}
          />
        </div>
      </div>
      <div className="relative isolate px-6 pt-20 md:pt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <BecomeATeamMember
          title="Become a team member"
          description="Are you passionate about making a difference with AI? At HIAcuity, we are always looking for talented individuals who share our values and vision. Our AI-powered tools, such as job openings CV filters and AI-supported assessment generators, enhance our recruitment process. Join us and be part of a dynamic team that is shaping the future of insights. Explore our current openings and apply today!"
          buttonLable="See Open Roles"
        />
      </div>
    </div>
  );
}
