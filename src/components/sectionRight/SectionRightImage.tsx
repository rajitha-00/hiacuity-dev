"use client";
import { ArrowRight } from "@/icons/Icons";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";

interface ISectionRightImage {
  label?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  imageSrc: string;
  hasBg?: boolean;
  hasPadding?: boolean;
}

export const SectionRightImage = (props: ISectionRightImage) => {
  const { label, title, description, buttonLabel, imageSrc, hasBg, hasPadding } = props;
  return (
    <div
      className={`relative mx-auto w-full h-auto rounded-3xl z-10
        ${
          hasBg
            ? "bg-gradient-to-bl from-[rgba(210,240,212,0.4)] via-[rgba(210,240,212,0.2)] to-transparent backdrop-blur-md rounded-3xl border shadow-lg border-primary-light/30 hover:shadow-xl  transition-all duration-500 ease-out hover:scale-[1.01]"
            : "border-transparent"
        }
      `}
    >
      <div
        className={`mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between
          ${hasPadding ? "py-5 md:py-20 px-5 md:px-16" : ""}
        `}
      >
        <div className="text-start md:text-center w-full max-w-2xl justify-center lg:text-start">
          <Fade triggerOnce direction="up" delay={100}>
            <p className="text-lg font-semibold text-green-700 mr-2 md:mb-4">{label}</p>
          </Fade>
          <Fade triggerOnce direction="up" delay={200}>
            <h2 className="text-3xl md:text-5xl font-semibold text-text-primary">{title}</h2>
          </Fade>
          <Fade triggerOnce direction="up" delay={300}>
            <p className="mt-2 text-start text-sm md:text-lg md:text-justify text-text-primary">{description}</p>
          </Fade>
          <Fade triggerOnce direction="up" delay={400}>
            {buttonLabel && (
              <Button className="relative mt-4 rounded-xl bg-primary-light px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-md transition duration-300 ease-in-out">
                {buttonLabel}
                <span aria-hidden="true">
                  <ArrowRight />
                </span>
              </Button>
            )}
          </Fade>
        </div>
        <div className="relative w-full max-w-2xl h-auto" style={{ aspectRatio: "16 / 10" }}>
          <Fade triggerOnce delay={100}>
            <Image
              alt="HIAcuity is ai hiring platform"
              src={imageSrc}
              fill
              className="object-contain" // Ensures the image covers the entire container
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};
