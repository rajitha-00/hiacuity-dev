"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

interface ICard {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  navigateTo: string;
}
export const FeatureCard = (props: ICard) => {
  const { title, description, imageSrc, navigateTo } = props;
  return (
    <div className="flex flex-col p-5">
      <div
        className="relative max-w-2xl w-full h-auto"
        style={{ aspectRatio: "16 / 10" }}
      >
        <Fade triggerOnce delay={100}>
          <Image
            alt="HIAcuity is ai hiring platform"
            src={imageSrc}
            fill
            className="object-cover rounded-[30px]" // Ensures the image covers the entire container
          />
        </Fade>
      </div>
      <div className="text-start md:text-center w-full max-w-2xl justify-center lg:text-start">
        <Fade triggerOnce direction="up" delay={200}>
          <Link href={navigateTo}>
            <h2 className="text-3xl mt-5  font-semibold text-green-700 ">
              {title}
            </h2>
          </Link>
        </Fade>
        <Fade triggerOnce direction="up" delay={300}>
          <p className="mt-2 text-start text-sm md:text-lg md:text-justify text-text-primary">
            {description}
          </p>
        </Fade>
      </div>
    </div>
  );
};
