"use client";
import { OUR_VALUES } from "@/constants";

import { Fade } from "react-awesome-reveal";
export const PricingCards = () => {
  return (
    <div className="y-10">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="grid grid-cols-4 mt-14 text-white">
          {OUR_VALUES.map((value, index) => (
            <Fade
              key={value.title}
              triggerOnce
              direction="up"
              delay={100 * index} // Staggered delay
            >
              <div className="col-span-1 max-w-sm bg-slate-50 h-[400px]">
                <div className="rounded-full w-10 h-10">{value.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-primary-light mr-2 md:mb-4">{value.title}</h3>
                <p className="text-md mt-3">{value.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};
