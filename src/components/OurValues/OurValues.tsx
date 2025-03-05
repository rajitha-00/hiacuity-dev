"use client";
import { OUR_VALUES } from "@/constants";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
export const OurValues = () => {
  return (
    <div className="y-10">
      <div className="text-start md:text-center w-full justify-center  lg:text-start ">
        <Fade triggerOnce direction="up" delay={100}>
          <h2 className="text-3xl md:text-6xl font-semibold text-primary-light">
            Our values
          </h2>
        </Fade>
        <Fade triggerOnce direction="up" delay={200}>
          <p className="mt-10 lg:text-start max-w-4xl text-sm md:text-2xl text-center text-gray-50">
            Automated filtering quickly identifies top candidates, making it
            easy to spot the most qualified individuals early in the hiring
            process.
          </p>
        </Fade>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-3xl ">
          <div className="grid grid-cols-2 gap-10 mt-14 text-white">
            {OUR_VALUES.map((value, index) => (
              <Fade
                key={value.title}
                triggerOnce
                direction="up"
                delay={100 * index} // Staggered delay
              >
                <div className="col-span-1 max-w-sm">
                  <div className="rounded-full w-10 h-10">{value.icon}</div>
                  <h3 className="mt-3 text-2xl font-semibold text-primary-main/90 mr-2 md:mb-4">
                    {value.title}
                  </h3>
                  <p className="text-xl mt-3">{value.description}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
        <div className="max-w-2xl w-full">
          <div
            className="w-full mt-14 rounded-lg relative"
            style={{ paddingTop: "56.25%" }}
          >
            <Fade triggerOnce delay={100}>
              <Image
                alt="HIAcuity is AI hiring platform"
                src={
                  "https://www.hiacuity.com/static/media/HiAcuity_Employer-Assessment_1.024bfe83d6bdd201db59.png"
                }
                fill
                className="rounded-3xl object-cover"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
