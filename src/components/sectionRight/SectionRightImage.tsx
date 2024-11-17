"use client";
import { ArrowRight } from "@/icons/Icons";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";

interface ISectionRightImage {
  label?: string;
  title: string;
  description: string;
  buttonLabel: string;
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
            ? "bg-radial-gradient backdrop-blur-md bg-opacity-30  border shadow-lg border-primary-light"
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
          <p className="text-lg font-semibold text-green-700 mr-2 md:mb-4">{label}</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-text-primary">{title}</h2>
          <p className="mt-2 text-start text-sm md:text-md md:text-justify text-text-greyDark">{description}</p>
          <Button className="relative mt-4 rounded-xl bg-primary-light px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-md outline outline-2 outline-transparent hover:outline-neon animate-outline transition duration-300 ease-in-out">
            {buttonLabel}{" "}
            <span aria-hidden="true">
              <ArrowRight />
            </span>
          </Button>
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
