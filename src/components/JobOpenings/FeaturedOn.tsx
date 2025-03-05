"use client";
import { JOB_OPENINGS_FETURED } from "@/constants";
import { Fade } from "react-awesome-reveal";

export const FeaturedOn = () => {
  return (
    <>
      <div className="text-center  w-full flex flex-col gap-5 z-10">
        <h2 className="text-balance font-extrabold tracking-tight ">
          <Fade direction="up" triggerOnce delay={0}>
            <span className="text-text-title font-semibold md:text-6xl text-5xl">
              Featured on
            </span>
          </Fade>
        </h2>
        <Fade direction="up" triggerOnce delay={300}>
          <p className=" text-pretty md:text-lg font-medium text-text-primary text-center sm:text-xl/8">
            HiAcuity is free to trial for as long as you’d like
          </p>
        </Fade>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mt-20 text-text-primary">
        {JOB_OPENINGS_FETURED.map((value, index) => (
          <div
            key={value.title}
            className="col-span-1 max-w-sm my-5 relative group"
          >
            <Fade triggerOnce direction="up" delay={100 * index}>
              {/* Icon Box with Hover Effect */}
              <div className="bg-[#ECF5F2] w-12 h-12 flex rounded-lg justify-center items-center p-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                <div className="w-6 h-6 m-auto transition-all duration-300 group-hover:scale-110 group-hover:text-primary-dark">
                  {value.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-5 md:text-xl font-semibold text-text-title mr-2 md:mb-4 transition-all duration-300 group-hover:text-primary-dark">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-md md:mt-3 opacity-80 transition-all duration-300 group-hover:opacity-100">
                {value.description}
              </p>
            </Fade>

            {/* Gradient Divider (More Subtle & Responsive) */}
            {index < JOB_OPENINGS_FETURED.length && (
              <div className="absolute bottom-[-12px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-light to-transparent md:h-[3px] opacity-75"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
