import { HeroSectionCommon } from "@/components/HeroSection";
import PricingHero from "../../assets/images/PricingPageHero.png";
import { Metadata } from "next";
import {
  HowSISOWorks,
  WhyChooseHiAcuityAssesments,
} from "@/components/Assesments";
import { AssesmentFlow } from "@/components/Assesments/AssementFlow";
import { RequestDemoOrTrial } from "@/components/JobOpenings";

export const metadata: Metadata = {
  title: "HiAcuity | Employee Assements",
};

export default function Pricing() {
  return (
    <div className="flex w-full flex-col items-center  justify-center">
      <HeroSectionCommon
        title1="Beyond Ordinary"
        title2="SISO : Skill Assessments"
        title3=""
        url={PricingHero}
        cta=""
        heroText="In today’s fast-paced business world, skills assessment is the key to unlocking true potential. SISO, an AI-powered, cloud-hosted Skills Assessment Platform, revolutionizes the way organizations evaluate skills across candidates, employees, and partners ensuring you make informed, data-driven decisions."
        hasImage={false}
      />
      <div className="h-auto   w-full ">
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <WhyChooseHiAcuityAssesments />
        </div>
      </div>
      <AssesmentFlow />
      <div className="h-auto   w-full ">
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <HowSISOWorks />
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
