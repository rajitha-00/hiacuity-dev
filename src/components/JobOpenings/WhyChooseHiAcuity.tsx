"use client";
import { Fade } from "react-awesome-reveal";

interface Reason {
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    title: "Resumes Can be Misleading",
    description: "Candidates may exaggerate or falsify details.",
  },
  {
    title: "Online Tests Are Easy to Cheat",
    description: "Impersonation and internet searches distort results.",
  },
  {
    title: "Human Reviews Are Slow & Biased",
    description: "Time-consuming and subjective evaluations.",
  },
  {
    title: "Recruiters Lack Time & Expertise",
    description: "Validation requires deep technical knowledge.",
  },
];

export const WhyChooseHiAcuity = () => {
  return (
    <div className="relative mx-auto w-full h-auto z-10">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-start w-full lg:text-start">
          <Fade triggerOnce direction="up" delay={100}>
            <div className="border border-primary-dark rounded-3xl p-2 w-[120px] md:w-[160px] flex justify-center items-center mr-2 md:mb-4">
              <p className="text-sm md:text-lg font-semibold text-primary-dark">
                Why Choose
              </p>
            </div>
          </Fade>
          <Fade triggerOnce direction="up" delay={200}>
            <h2 className="text-5xl mt-5 md:text-6xl font-semibold text-text-primary">
              HIAcuity;
              <br />
              Smarter Hiring,
              <br />
              Stronger Teams
            </h2>
          </Fade>
          <Fade triggerOnce direction="up" delay={300}>
            <p className="mt-5 text-start text-sm md:text-lg md:text-justify text-text-primary">
              The only way to measure real ability.
            </p>
          </Fade>
        </div>
        <div className="grid gap-5 mt-10 md:mt-0 grid-cols-1 md:grid-cols-2 w-full">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="col-span-1 outline outline-1 outline-gray-100 bg-white/80 backdrop-blur-lg border border-white/30 shadow-lg shadow-black/10 px-6 py-5 rounded-2xl md:min-h-[150px] transition-transform duration-300 hover:scale-[1.02]"
            >
              <h3 className="mt-2 text-lg md:text-xl font-semibold  text-primary-dark mr-2 md:mb-3 ">
                {reason.title}
              </h3>
              <p className="text-sm md:text-md my-3 text-text-title">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
