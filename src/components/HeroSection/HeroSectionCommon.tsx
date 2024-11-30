"use client";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";
import { ArrowRight } from "@/icons/Icons";
import Image from "next/image";

interface IHeroSectionCommon {
  title1: string;
  title2: string;
  title3: string;
  heroText?: string;
  cta?: string;
  url: string;
}

export const HeroSectionCommon = (props: IHeroSectionCommon) => {
  const { title1, title2, title3, heroText, cta, url } = props;
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 w-full max-w-[1600px] mx-auto ">
      <div
        style={{
          background: "radial-gradient(circle, rgba(41,250,66,0.1) 5%, rgba(111,250,170,0.1) 40%, transparent 70%)",
        }}
        className="absolute hidden md:block -left-[35%] top-[70%] z-0 w-[800px] h-[800px] rounded-full "
      ></div>
      <div className="mx-auto py-20 min-h-[75vh] flex flex-col lg:flex-row gap-10 items-center justify-between">
        <div className="text-center lg:text-start w-full flex flex-col gap-5 z-10">
          <h1 className="text-balance text-7xl font-extrabold tracking-tight bg-gradient-to-tr from-primary-dark bg-primary-main  bg-clip-text text-transparent ">
            <Fade direction="up" triggerOnce delay={0}>
              <span className="text-text-title font-bold md:text-6xl text-5xl">{title1}</span>
            </Fade>
            <Fade direction="up">
              <span className="text-balance md:text-8xl text-7xl  font-extrabold tracking-tight bg-gradient-to-tr from-primary-dark bg-primary-main  bg-clip-text text-transparent ">
                {title2}
              </span>
            </Fade>
            <Fade direction="up" triggerOnce delay={100}>
              <span className="text-text-title font-bold md:text-6xl text-5xl">{title3}</span>
            </Fade>
          </h1>
          <Fade direction="up" triggerOnce delay={300}>
            <p className=" text-pretty text-lg font-medium text-text-primary sm:text-xl/8">{heroText}</p>
          </Fade>
          {cta && (
            <Fade direction="up" triggerOnce delay={400}>
              <div className=" flex  gap-x-6 justify-center  lg:justify-start">
                <Button className="relative rounded-xl bg-primary-light px-4 py-2.5 text-sm font-semibold text-primary-dark ">
                  {cta}
                  <span aria-hidden="true">
                    <ArrowRight />
                  </span>
                </Button>
              </div>
            </Fade>
          )}
        </div>
        <div className="relative w-full h-auto" style={{ aspectRatio: "16 / 10" }}>
          <div
            style={{
              background: "radial-gradient(circle, rgba(41,250,66,0.2) 5%, rgba(111,250,170,0.5) 40%, transparent 70%)",
            }}
            className="absolute hidden md:block right-10 -top-20 w-[700px] h-[700px] rounded-full "
          ></div>
          <Fade triggerOnce delay={100}>
            <Image
              alt="HIAcuity is ai hiring platform"
              src={url}
              fill
              className="object-cover" // Ensures the image covers the entire container
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};
