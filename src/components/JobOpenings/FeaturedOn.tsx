"use client";
import { JOB_OPENINGS_FETURED } from "@/constants";
import { Fade } from "react-awesome-reveal";

export const FeaturedOn = () => {
  return (
    <>
      <div className="text-center  w-full flex flex-col gap-5 z-10">
        <h2 className="text-balance font-extrabold tracking-tight ">
          <Fade direction="up" triggerOnce delay={0}>
            <span className="text-text-title font-bold md:text-6xl text-4xl">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 text-text-primary">
        {JOB_OPENINGS_FETURED.map((value, index) => (
          <Fade
            key={value.title}
            triggerOnce
            direction="up"
            delay={100 * index}
          >
            <div key={value.title} className="col-span-1 max-w-sm my-5">
              <div className="bg-[#ECF5F2] w-24 h-24 flex rounded-lg justify-center items-center p-2">
                <div
                  className={`rounded-full w-12 h-12 m-auto text-text-title`}
                >
                  {value.icon}
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text-title mr-2 md:mb-4">
                {value.title}
              </h3>
              <p className="text-md mt-3">{value.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </>
  );
};
