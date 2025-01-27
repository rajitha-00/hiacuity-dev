import { HeroSectionCommon } from "@/components/HeroSection";
import PricingHero from "../../assets/images/PricingPageHero.png";
import { Metadata } from "next";
import {
  FeaturedOn,
  RequestDemoOrTrial,
  WhatSetUsApart,
  WhyChooseHiAcuity,
} from "@/components/JobOpenings";
import { HowItWorks } from "@/components/JobOpenings/HowItWorks";
export const metadata: Metadata = {
  title: "HiAcuity | Employee Assements",
};
export default function Pricing() {
  return (
    <div className="flex w-full flex-col items-center  justify-center">
      <HeroSectionCommon
        title1="Beyond Ordinary"
        title2="Skill Assessments"
        title3=""
        url={PricingHero}
        cta=""
        heroText="HiAcuity  Web transforms job recruitment with AI-driven precision. Automate candidate screening, match talent to the right roles, and streamline hiring with smart insights."
        hasImage={false}
      />
      <div className="h-auto   w-full ">
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <WhyChooseHiAcuity />
        </div>
      </div>

      <div className="relative h-auto w-full mt-20 md:mt-32 py-20 bg-[radial-gradient(circle,rgba(255,255,255,1)_10%,rgba(224,255,240,0.8)_80%)] min-h-[500px]">
        {/* Content Wrapper with Background Image */}
        <div
          className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto z-10 min-h-[500px]"
          style={{
            backgroundImage: "url('/assets/images/WhatsSetusApart.png')",
          }}
        >
          <HowItWorks />
        </div>
      </div>
      <div className="h-auto   w-full mt-20 md:mt-32  ">
        <div className="relative  isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <WhatSetUsApart />
        </div>
      </div>
      <div className="h-auto bg-white  w-full mt-20 md:mt-32  ">
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <FeaturedOn />
        </div>
      </div>
      <div className="h-auto   w-full mt-20 md:mt-32  ">
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <RequestDemoOrTrial />
        </div>
      </div>
    </div>
  );
}
