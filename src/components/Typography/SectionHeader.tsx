"use client";
import { Fade } from "react-awesome-reveal";

interface ISectionHeader {
  title: string;
  hasLightTitle?: boolean;
}

export const SectionHeader = (props: ISectionHeader) => {
  const { title, hasLightTitle } = props;
  return (
    <div className="text-center z-10 w-full flex flex-col gap-5">
      <h2 className="text-balance font-extrabold tracking-tight">
        <Fade direction="up" triggerOnce delay={0}>
          <span
            className={`${
              hasLightTitle ? "text-primary-light" : "text-text-title"
            } ${
              hasLightTitle ? "font-semibold" : "font-semibold"
            } md:text-6xl text-4xl`}
          >
            {title}
          </span>
        </Fade>
      </h2>
    </div>
  );
};
