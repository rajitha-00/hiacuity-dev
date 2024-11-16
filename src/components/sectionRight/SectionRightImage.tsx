"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

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
          ${hasPadding ? "py-20 px-16" : ""}
        `}
      >
        <div className="text-center w-full max-w-2xl justify-center lg:text-start">
          <p className="text-lg font-semibold text-green-700 mr-2 mb-4">{label}</p>
          <h2 className="text-5xl font-bold text-text-primary">{title}</h2>
          <p className="mt-2 text-justify text-text-greyDark">{description}</p>
          <button className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-primary-dark bg-white bg-opacity-20 rounded-lg hover:bg-primary-main backdrop-blur-sm border border-green-300 hover:bg-opacity-30">
            {buttonLabel} <span className="ml-2">→</span>
          </button>
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
