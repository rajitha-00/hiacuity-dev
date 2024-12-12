import { HeroSectionCommon } from "@/components/HeroSection";
import { PricingCards } from "@/components/PricingCards";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing",
};
export default function Pricing() {
  return (
    <div className="flex w-full flex-col items-center  justify-center">
      <HeroSectionCommon
        title1="Predictable  "
        title2="Pricing"
        title3="Designed to scale"
        url={""}
        cta=""
        heroText=""
        hasImage={false}
      />
      <div
        className="h-auto py-10  w-full mt-20 md:mt-40"
        style={{ background: "linear-gradient(135deg, #031602 0%, #194D1F 50%, #194D1F 100%)" }}
      >
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <PricingCards />
        </div>
      </div>
    </div>
  );
}
