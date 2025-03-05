"use client";
import { Fade } from "react-awesome-reveal";
import { HowItWorksVT, HowItWorksHT } from "@/icons/Icons";
import { STEPS } from "@/constants";

export const HowItWorks = () => {
  return (
    <section className="relative flex flex-col items-center w-full px-6 md:px-12">
      {/* Title */}
      <div className="text-center w-full flex flex-col gap-5 z-10">
        <h2 className="text-balance font-extrabold tracking-tight">
          <Fade direction="up" triggerOnce delay={0}>
            <span className="text-text-title font-semibold md:text-6xl text-4xl">
              How it works
            </span>
          </Fade>
        </h2>
      </div>

      {/* Steps Container */}
      <div className="relative flex flex-col items-center lg:flex-row mt-20 mx-auto md:mt-60">
        {/* Desktop Horizontal Wave */}
        <Fade triggerOnce>
          <HowItWorksHT className="hidden lg:block" />
        </Fade>
        {/* Mobile Vertical Wave */}
        <Fade triggerOnce delay={100}>
          <HowItWorksVT className="lg:hidden" />
        </Fade>

        {/* Steps */}
        {STEPS.map((item, index) => (
          <Fade
            direction="up"
            triggerOnce
            delay={index * 100}
            key={item.number}
          >
            <div
              className={`relative flex flex-col items-center ${
                index % 2 === 0
                  ? "-translate-x-32 lg:translate-y-32 lg:translate-x-0"
                  : "lg:-translate-y-32  translate-x-32 lg:translate-x-0"
              }`}
            >
              {/* Step Card */}
              <div className="relative flex flex-col items-center md:bg-transparent  md:min-h-[160px] rounded-xl  transition-all duration-300">
                {/* Step Icon */}
                <div className="rounded-full w-12 h-12  flex items-center justify-center ">
                  {item.icon}
                </div>

                {/* Step Number */}
                <div className="bg-primary-main/20 backdrop-blur-lg p-2 px-6 w-[120px] rounded-full mt-3 shadow-sm">
                  <p className="text-md font-semibold text-primary-dark tracking-wide">
                    STEP {item.number}
                  </p>
                </div>

                {/* Step Text */}
                <p className="text-center font-semibold text-primary-dark mt-4 text-lg max-w-[150px] md:max-w-auto">
                  {item.text}
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};
