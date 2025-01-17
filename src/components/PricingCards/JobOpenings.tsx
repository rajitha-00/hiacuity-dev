"use client";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";
import { Call } from "@/icons/Icons";

const BUSINESS_TYPES = [
  {
    title: "Small Business",
    priceMonthly: "$200",
    priceYearly: "$2200",
    bgColor: "rgba(100,200,100,0.7)",
    textColor: "text-title",
  },
  {
    title: "Medium Business",
    priceMonthly: "$500",
    priceYearly: "$5500",
    bgColor: "rgba(100,200,100,0.7)",
    textColor: "text-title",
  },
  {
    title: "Large Business",
    priceMonthly: "$900",
    priceYearly: "$9900",
    bgColor: "rgba(50,150,150,0.7)",
    textColor: "text-title",
  },
  {
    title: "Large Enterprise",
    priceMonthly: "Call us for the price",
    priceYearly: "",
    bgColor: "rgba(200,100,100,0.7)",
    textColor: "text-title",
  },
];

export const JobOpenings = () => {
  const getRoundedClass = (index: number, totalCards: number) => {
    if (index === 0) {
      return "rounded-lg sm:rounded-b-none md:rounded-l-lg md:rounded-r-none";
    } else if (index === totalCards - 1) {
      return "rounded-lg sm:rounded-t-none md:rounded-r-lg md:rounded-l-none border-r border-white";
    } else {
      return "rounded-lg md:rounded-none";
    }
  };

  return (
    <div className="py-10 h-auto">
      <div className="text-center  w-full flex flex-col gap-5 z-10">
        <h2 className="text-balance font-extrabold tracking-tight ">
          <Fade direction="up" triggerOnce delay={0}>
            <span className="text-text-title font-bold md:text-6xl text-4xl">
              Job Openings
            </span>
          </Fade>
        </h2>
        <Fade direction="up" triggerOnce delay={300}>
          <p className=" text-pretty md:text-lg font-medium text-text-primary text-center sm:text-xl/8">
            HiAcuity is free to trial for as long as you’d like
          </p>
        </Fade>
      </div>
      <div className="grid grid-cols-2 min-h-[380px] gap-4 md:gap-0 h-auto max-w-5xl mx-auto md:grid-cols-4 items-center mt-10 group">
        {BUSINESS_TYPES.map((card, index) => (
          <Fade key={card.title} triggerOnce direction="up" delay={100 * index}>
            <div
              className={`relative px-5 md:px-10 py-8 bg-[${card.bgColor}] 
                z-10 hover:!blur-none md:hover:h-[380px] min-h-[360px] hover:z-30 md:hover:rounded-lg
                outline outline-primary-dark outline-1 bg-gradient-to-bl from-[rgba(210,240,212,0.4)] via-[rgba(210,240,212,0.2)] to-transparent backdrop-blur-md rounded-3xl border shadow-lg border-primary-light/30 hover:shadow-xl  transition-all duration-500 ease-out 
                  
                ${getRoundedClass(
                  index,
                  BUSINESS_TYPES.length
                )} hover:rounded-lg`}
            >
              <h3
                className={`text-md uppercase font-semibold ${card.textColor} `}
              >
                {card.title}
              </h3>
              <p className={`mt-2 text-sm md:text-md ${card.textColor}`}>
                Our experienced team is well-versed in
              </p>
              <Button className="mt-4 w-full px-4 py-2 text-primary-dark">
                Start For Free
              </Button>
              {card.priceMonthly !== "Call us for the price" ? (
                <div className="mt-6">
                  <p className={`text-sm ${card.textColor}`}>From</p>
                  <p
                    className={`text-xl lg:text-3xl font-bold ${card.textColor}`}
                  >
                    {card.priceMonthly}
                    <span className="text-sm lg:text-xl font-medium">
                      / Month
                    </span>
                  </p>
                  <div className="border-t border-primary-dark  my-4"></div>
                  {card.priceYearly && (
                    <p
                      className={`text-xl lg:text-3xl font-bold ${card.textColor}`}
                    >
                      {card.priceYearly}{" "}
                      <span className="text-sm lg:text-xl font-medium">
                        / Year
                      </span>
                    </p>
                  )}
                </div>
              ) : (
                <div className="mt-6">
                  <Call className="w-8 h-8 my-5 mx-auto" />
                  <p
                    className={`md:text-3xl font-bold text-center ${card.textColor}`}
                  >
                    {card.priceMonthly}
                  </p>
                </div>
              )}
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};
