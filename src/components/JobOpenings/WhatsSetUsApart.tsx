"use client";
import { JOB_OPENINGS_WHAT_SET_US_APART } from "@/constants";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const WhatSetUsApart = () => {
  return (
    <>
      <div className="text-center  w-full flex flex-col gap-5 z-10">
        <h2 className="text-balance font-extrabold tracking-tight ">
          <Fade direction="up" triggerOnce delay={0}>
            <span className="text-text-title font-semibold md:text-6xl text-5xl">
              What sets us apart?{" "}
            </span>
          </Fade>
        </h2>
        <Fade direction="up" triggerOnce delay={300}>
          <p className=" text-pretty md:text-lg font-medium text-text-primary text-center sm:text-xl/8">
            End to end modular recruiting platform for all stages of the
            recruiting process.
          </p>
        </Fade>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 text-text-primary">
        {JOB_OPENINGS_WHAT_SET_US_APART.map((value, index) => (
          <Fade
            key={value.title}
            triggerOnce
            direction="up"
            delay={100 * index}
          >
            <div
              key={value.title}
              className="col-span-1 bg-white p-5 rounded-3xl outline outline-1 outline-gray-100 shadow-md my-5 
             transition-all duration-300 ease-in-out transform group hover:shadow-lg "
            >
              <div className="flex flex-col justify-between min-h-[450px]">
                <div>
                  <h3
                    className="mt-5 text-xl font-semibold text-text-title mr-2 md:mb-4 
                   transition-colors duration-300 group-hover:text-primary-dark"
                  >
                    {value.title}
                  </h3>

                  <p className="text-md mt-3 transition-opacity duration-300 group-hover:opacity-80">
                    {value.description}
                  </p>
                </div>
                <div
                  className="relative w-full mt-5"
                  style={{ aspectRatio: "16 / 11" }}
                >
                  <Image
                    alt=""
                    src={value.url}
                    fill
                    className="object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </>
  );
};
