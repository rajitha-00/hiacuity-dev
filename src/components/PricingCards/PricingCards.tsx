"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";
import { Users } from "@/icons/Icons";

type BusinessType = "small" | "medium" | "large" | "enterprise";

const BUSINESS_TYPES: Record<
  BusinessType,
  {
    label: string;
    description: string;
    cards: { title: string; priceMonthly: string; priceYearly: string }[];
  }
> = {
  small: {
    label: "Small Business",
    description: "Suitable for less than 20 Employees",
    cards: [
      { title: "Job Candidates", priceMonthly: "$200", priceYearly: "$2200" },
      {
        title: "Employee Performance",
        priceMonthly: "$50",
        priceYearly: "$500",
      },
      {
        title: "Partner Performance",
        priceMonthly: "$50",
        priceYearly: "$500",
      },
    ],
  },
  medium: {
    label: "Medium Business",
    description: "Suitable for 20-50 Employees",
    cards: [
      { title: "Job Candidates", priceMonthly: "$400", priceYearly: "$4000" },
      {
        title: "Employee Performance",
        priceMonthly: "$100",
        priceYearly: "$1000",
      },
      {
        title: "Partner Performance",
        priceMonthly: "$100",
        priceYearly: "$1000",
      },
    ],
  },
  large: {
    label: "Large Business",
    description: "Suitable for 50-200 Employees",
    cards: [
      { title: "Job Candidates", priceMonthly: "$600", priceYearly: "$6000" },
      {
        title: "Employee Performance",
        priceMonthly: "$150",
        priceYearly: "$1500",
      },
      {
        title: "Partner Performance",
        priceMonthly: "$150",
        priceYearly: "$1500",
      },
    ],
  },
  enterprise: {
    label: "Large Enterprise",
    description: "Suitable for 200+ Employees",
    cards: [
      { title: "Job Candidates", priceMonthly: "$1000", priceYearly: "$10000" },
      {
        title: "Employee Performance",
        priceMonthly: "$250",
        priceYearly: "$2500",
      },
      {
        title: "Partner Performance",
        priceMonthly: "$250",
        priceYearly: "$2500",
      },
    ],
  },
};

export const PricingCards = () => {
  const [selectedType, setSelectedType] = useState<BusinessType>("small");

  const handleTypeChange = (type: BusinessType) => {
    setSelectedType(type);
  };

  const currentData = BUSINESS_TYPES[selectedType];
  const getRoundedClass = (index: number, totalCards: number) => {
    if (index === 0) {
      return "rounded-t-lg sm:rounded-b-none md:rounded-l-lg md:rounded-r-none border-b md:border-r border-white";
    } else if (index === totalCards - 1) {
      return "rounded-b-lg sm:rounded-t-none md:rounded-r-lg md:rounded-l-none border-t md:border-l border-white";
    } else {
      return "rounded-none";
    }
  };
  return (
    <div className="py-10 h-auto">
      <div className="text-center  w-full flex flex-col gap-5 z-10">
        <h2 className="text-balance font-extrabold tracking-tight ">
          <Fade direction="up" triggerOnce delay={0}>
            <span className="text-primary-light font-bold md:text-6xl text-4xl">
              Assesments
            </span>
          </Fade>
        </h2>
        <Fade direction="up" triggerOnce delay={300}>
          <p className=" text-pretty md:text-lg font-medium text-white text-center sm:text-xl/8">
            HiAcuity is free to trial for as long as you’d like
          </p>
        </Fade>
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center mt-6 gap-4 space-4 mx-auto md:bg-primary-light p-1 max-w-fit rounded-xl md:rounded-full">
        {Object.keys(BUSINESS_TYPES).map((type) => (
          <button
            key={type}
            onClick={() => handleTypeChange(type as BusinessType)}
            className={`px-4 py-2 w-[200px] md:w-auto rounded-full md:font-medium ${
              selectedType === type
                ? "bg-primary-dark text-white"
                : "bg-primary-light md:bg-transparent"
            }`}
          >
            {BUSINESS_TYPES[type as BusinessType].label}
          </button>
        ))}
      </div>
      <Users className="w-10 h-10 mt-10 mx-auto text-primary-light" />
      {/* Description */}
      <p className="text-center  text-white mt-6">{currentData.description}</p>
      {/* Cards */}
      <div className="grid grid-cols-1 min-h-[380px] h-auto max-w-5xl mx-auto md:grid-cols-3 items-center mt-10 group">
        {currentData.cards.map((card, index) => (
          <Fade key={card.title} triggerOnce direction="up" delay={100 * index}>
            <div
              className={`relative px-10 py-8 bg-[rgba(210,240,212,0.54)] backdrop-blur-md transition-all duration-300 ease-in-out 
      z-10 hover:!blur-none hover:h-[380px] hover:z-30 hover:rounded-lg
      hover:outline hover:outline-primary-light hover:outline-1 
      hover:bg-gradient-to-r hover:from-primary-dark hover:via-text-title hover:to-primary-dark 
      hover:text-white 
               ${getRoundedClass(
                 index,
                 currentData.cards.length
               )} hover:rounded-lg`}
            >
              <h3 className="text-md font-medium uppercase text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm md:text-md text-white">
                Our experienced team is well-versed in
              </p>
              <Button className="mt-4 w-full px-4 py-2 text-primary-dark">
                Start For Free
              </Button>
              <div className="mt-6">
                <p className="text-sm text-white">From</p>
                <p className="text-3xl font-bold text-white">
                  {card.priceMonthly}{" "}
                  <span className="text-xl font-medium">/ Month</span>
                </p>
                <div className="border-t border-white my-4"></div>
                <p className="text-3xl font-bold text-white">
                  {card.priceYearly}{" "}
                  <span className="text-xl font-medium">/ Year</span>
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};
