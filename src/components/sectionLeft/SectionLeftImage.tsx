"use client";
import Image, { StaticImageData } from "next/image";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";
import { ArrowRight } from "@/icons/Icons";

interface ISectionLeftImage {
  label?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  imageSrc: string | StaticImageData;
  hasBg?: boolean;
  hasPadding?: boolean;
}

export const SectionLeftImage = (props: ISectionLeftImage) => {
  const {
    label,
    title,
    description,
    buttonLabel,
    imageSrc,
    hasBg,
    hasPadding,
  } = props;
  return (
    <div
      className={`relative mx-auto w-full h-auto  z-10
        ${
          hasBg
            ? "absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,1)_10%,rgba(224,255,240,0.8)_95%)]  rounded-3xl border shadow-lg border-primary-light/30 hover:shadow-xl  transition-all duration-500 ease-out hover:scale-[1.01]"
            : "border-transparent"
        }
      `}
    >
      <div
        className={`mx-auto flex flex-col-reverse lg:flex-row gap-10 items-center justify-between
          ${hasPadding ? "py-5 md:py-20 px-5 " : ""}
        `}
      >
        <div
          className="relative max-w-2xl w-full h-auto"
          style={{ aspectRatio: "16 / 10" }}
        >
          <Fade triggerOnce delay={100}>
            <Image
              alt="HIAcuity is ai hiring platform"
              src={imageSrc}
              fill
              className="object-cover md:object-contain" // Ensures the image covers the entire container
            />
          </Fade>
        </div>
        <div className="text-start md:text-center w-full max-w-2xl justify-center md:pr-16 lg:text-start">
          <Fade triggerOnce direction="up" delay={100}>
            <p className="text-sm md:text-lg font-semibold text-green-700 mr-2 md:mb-4">
              {label}
            </p>
          </Fade>
          <Fade triggerOnce direction="up" delay={200}>
            <h2 className="text-xl md:text-6xl font-semibold text-text-primary">
              {title}
            </h2>
          </Fade>
          <Fade triggerOnce direction="up" delay={300}>
            <p className="mt-5 text-start text-sm md:text-xl md:text-justify text-text-primary">
              {description}
            </p>
          </Fade>
          <Fade triggerOnce direction="up" delay={400}>
            {buttonLabel && (
              <Button className="relative mt-4 rounded-xl  px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-md    transition duration-300 ease-in-out">
                {buttonLabel}{" "}
                <span aria-hidden="true">
                  <ArrowRight />
                </span>
              </Button>
            )}
          </Fade>
        </div>
      </div>
    </div>
  );
};
