"use client";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";
import Image from "next/image";
import HireSmater from "../../assets/images/HireSmaterImage.svg";
import Link from "next/link";
interface IRequestDemoTrial {
  isJobOpenings?: boolean;
}
export const RequestDemoOrTrial = (props: IRequestDemoTrial) => {
  const { isJobOpenings } = props;
  return (
    <div className={`relative mx-auto w-full h-auto  z-10`}>
      <div
        className={`mx-auto flex rounded-xl md:rounded-[50px] shadow-md flex-col-reverse lg:flex-row  outline outline-1 outline-gray-100 items-center justify-between`}
      >
        <div
          className="relative w-full h-auto"
          style={{ aspectRatio: "16 / 10" }}
        >
          <Fade triggerOnce delay={100}>
            <Image
              alt="HIAcuity is ai hiring platform"
              src={HireSmater}
              fill
              className="object-cover md:rounded-[50px]"
            />
          </Fade>
        </div>
        <div className="text-start p-6 md:p-16 w-full justify-center ">
          <Fade triggerOnce direction="up" delay={200}>
            <h2 className="text-4xl md:text-6xl font-semibold text-text-primary">
              {isJobOpenings ? "Hire Smarter," : "Assess Smarter,"} <br />{" "}
              Faster & With Confidence
            </h2>
          </Fade>
          <Fade triggerOnce direction="up" delay={300}>
            <p className="mt-5 text-start text-sm md:text-lg md:text-justify text-text-primary">
              {isJobOpenings
                ? "Unlock the power of HiAcuity to streamline your hiring process, eliminate guesswork, and identify top talent with precision."
                : "Unlock the power of HiAcuity to streamline your assessment process, eliminate guesswork, and identify the best available candidates, employees and partners.r"}
            </p>
          </Fade>
          <Fade triggerOnce direction="up" delay={400}>
            <div className="flex md:flex-row flex-col gap-2">
              <Link href="/pricing">
                <Button className="relative mt-4 rounded-xl bg-primary-dark px-4 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out">
                  Start Your Free Trial
                </Button>
              </Link>

              <Link href="/contact">
                <Button className="relative mt-4 rounded-xl outline outline-2 outline-primary-dark px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-md transition duration-300 ease-in-out">
                  Get a Demo
                </Button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
