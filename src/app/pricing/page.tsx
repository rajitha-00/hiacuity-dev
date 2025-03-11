import { HeroSectionCommon } from "@/components/HeroSection";
import { PricingCards } from "@/components/PricingCards";
import { JobOpenings } from "@/components/PricingCards/JobOpenings";
import PricingHero from "../../assets/images/PricingPageHero.png";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "HiAcuity | Pricing",
};
export default function Pricing() {
  return (
    <div className="flex w-full flex-col items-center  justify-center">
      <HeroSectionCommon
        title1="Predictable  "
        title2="Pricing"
        title3="Designed to scale"
        url={PricingHero}
        cta=""
        heroText=""
        hasImage={true}
      />
      <div className="relative hidden md:block w-full">
        <div className="relative w-full overflow-x-hidden md:pl-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950"></div>
          <div className="w-full h-px border-t border border-primary-main dark:border-neutral-600"></div>
        </div>
        <div className="absolute flex items-center justify-center w-auto h-auto px-3 py-1.5 uppercase tracking-widest space-x-1 text-[0.6rem] md:-translate-x-1/2 -translate-y-1/2 border rounded-full bg-white dark:bg-neutral-900 text-primary-dark left-0 md:ml-0 ml-5 md:left-1/2 border-primary-main dark:border-neutral-800 shadow-sm">
          <p className="leading-none font-semibold">
            Expore Our Affordable Prices
          </p>
          <div className="flex items-center justify-center w-5 h-5 translate-x-1 border rounded-full border-primary-dark dark:border-neutral-800">
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="h-auto   w-full mt-20 md:mt-32  ">
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <JobOpenings />
        </div>
      </div>
      <div className="h-auto py-10  w-full mt-20 md:mt-32  bg-gradient-to-r from-primary-dark via-text-title to-primary-dark ">
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <PricingCards />
        </div>
      </div>
      <h2 className="text-3xl md:text-5xl mt-20 md:mt-40 font-semibold text-text-primary">
        <span className="text-balance md:text-8xl text-7xl font-extrabold tracking-tight bg-gradient-to-tr from-primary-dark bg-primary-main bg-clip-text text-transparent">
          TRY 1 MONTHS FOR FREE!
        </span>
      </h2>
    </div>
  );
}
