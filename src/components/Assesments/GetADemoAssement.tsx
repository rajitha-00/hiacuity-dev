"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";
import CardImage from "../../assets/images/WhatsSetusApart.png";
import BGImage from "../../assets/images/GetADemoBg.png";

export const GetADemoAssesment = () => {
  return (
    <div className="relative mx-auto w-full h-auto z-10">
      <div className="relative mx-auto flex rounded-[50px] shadow-md flex-col lg:flex-row outline outline-1 outline-gray-100 items-center justify-between overflow-hidden px-20 py-40">
        <Image
          src={BGImage}
          alt="Graduation Hat"
          layout="fill"
          objectFit="cover"
          className="absolute  inset-0 z-0 "
        />
        {/* Overlay for better readability */}

        {/* Left Section - Image */}
        <div
          className="relative w-full h-auto z-10 md:block hidden"
          style={{ aspectRatio: "16 / 10" }}
        >
          <Fade triggerOnce delay={100}>
            <Image
              alt="HIAcuity is AI hiring platform"
              src={CardImage}
              fill
              className="object-contain "
            />
          </Fade>
        </div>

        {/* Right Section - Content */}
        <div className="relative text-start md:p-16 w-full justify-center z-10">
          <Fade triggerOnce direction="up" delay={200}>
            <h2 className="text-3xl md:text-5xl font-medium text-white">
              Hire Smarter, <br /> Faster & With Confidence
            </h2>
          </Fade>
          <Fade triggerOnce direction="up" delay={300}>
            <p className="mt-2 text-start text-sm md:text-lg md:text-justify text-white">
              Unlock the power of HiAcuity to streamline your hiring process,
              eliminate guesswork, and identify top talent with precision.
            </p>
          </Fade>
          <Fade triggerOnce direction="up" delay={400}>
            <div className="flex gap-2">
              <Button className="relative mt-4 rounded-xl bg-primary-light px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-md transition duration-300 ease-in-out">
                Start Your Free Trial
              </Button>
              <Button className="relative mt-4 rounded-xl bg-primary-light px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-md transition duration-300 ease-in-out">
                Get a Demo
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
