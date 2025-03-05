"use client";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";
import { ArrowRight } from "@/icons/Icons";
import Image, { StaticImageData } from "next/image";
import BGPattern from "../../assets/hero/heroPattern.svg";
interface IHeroSectionCommon {
  title1: string;
  title2: string;
  title3: string;
  heroText?: string;
  cta?: string;
  hasImage?: boolean;
  url: string | StaticImageData;
}

export const HeroSectionCommon = (props: IHeroSectionCommon) => {
  const { title1, title2, title3, heroText, cta, url, hasImage } = props;
  return (
    <>
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={BGPattern}
          alt="Hero Background"
          layout="fill"
          objectFit="contain"
          className="opacity-50"
        />
      </div>
      <div className="relative isolate px-6 pt-14 lg:px-8 w-full max-w-[1600px] mx-auto ">
        <div
          className={`mx-auto py-20 pt-44  flex flex-col lg:flex-row gap-10 items-center justify-between ${
            hasImage ? "md:min-h-[75vh]" : "md:min-h-[50vh]"
          }`}
        >
          <div
            className={`w-full flex flex-col gap-5 z-10 ${
              hasImage ? "text-center lg:text-start" : "text-center"
            }`}
          >
            <h2>
              <Fade direction="up" triggerOnce delay={0}>
                <span className="text-text-title font-semibold md:text-6xl text-3xl">
                  {title1}
                </span>
              </Fade>
            </h2>
            <h1 className="text-balance font-semibold tracking-tight bg-gradient-to-tr from-primary-dark bg-primary-main bg-clip-text text-transparent">
              <Fade direction="up">
                <span className="text-balance md:text-8xl text-5xl font-semibold tracking-tight bg-gradient-to-tr from-primary-dark bg-primary-main bg-clip-text text-transparent">
                  {title2}
                </span>
              </Fade>
            </h1>
            <h2>
              <Fade direction="up" triggerOnce delay={100}>
                <span className="text-text-title pt-5 font-semibold md:text-6xl text-5xl">
                  {title3}
                </span>
              </Fade>
            </h2>
            <Fade direction="up" triggerOnce delay={300}>
              <p
                className={`text-pretty md:mt-5 mx-auto text-sm md:text-lg font-medium ${
                  hasImage ? "max-w-max" : "max-w-4xl"
                } text-text-primary sm:text-xl/8`}
              >
                {heroText}
              </p>
            </Fade>
            {cta && (
              <Fade direction="up" triggerOnce delay={400}>
                <div className="flex gap-x-6 justify-center lg:justify-start">
                  <Button className="relative rounded-xl bg-primary-light px-4 py-2.5 text-sm font-semibold text-primary-dark">
                    {cta}
                    <span aria-hidden="true">
                      <ArrowRight />
                    </span>
                  </Button>
                </div>
              </Fade>
            )}
          </div>
          {hasImage && (
            <div
              className="relative w-full h-auto"
              style={{ aspectRatio: "16 / 10" }}
            >
              <Fade triggerOnce delay={100}>
                <Image
                  alt="HIAcuity is ai hiring platform"
                  src={url}
                  fill
                  className="object-contain"
                />
              </Fade>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
