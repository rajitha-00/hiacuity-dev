"use client";
import { Fade } from "react-awesome-reveal";
import {
  CheckMark,
  MegaPhone,
  MagnifyingGlass,
  Folder,
  ClipBoard,
  Speech,
  Bulb,
  Briefcase,
} from "@/icons/Icons";
export const HowItWorks = () => {
  return (
    <>
      <div className="text-center  w-full flex flex-col gap-5 z-10">
        <h2 className="text-balance font-extrabold tracking-tight ">
          <Fade direction="up" triggerOnce delay={0}>
            <span className="text-text-title font-bold md:text-6xl text-4xl">
              How it works
            </span>
          </Fade>
        </h2>
      </div>

      {/* Process Steps */}
      <div className="flex justify-center flex-row md:flex-col gap-10 max-w-5xl mx-auto mt-20">
        <div className="flex flex-row md:flex-col items-start">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 relative">
            {/* Row 1 */}
            {[
              {
                number: "01",
                text: "Job Request Approved",
                icon: <CheckMark className="text-primary-dark" />,
              },
              {
                number: "03",
                text: "Analyze Applicants",
                icon: <MagnifyingGlass className="text-primary-dark" />,
              },
              {
                number: "05",
                text: "Skills Assessment",
                icon: <ClipBoard className="text-primary-dark" />,
              },
              {
                number: "07",
                text: "Make Decision",
                icon: <Bulb className="text-primary-dark " />,
              },
            ].map((item) => (
              <div key={item.number} className="col-span-1 flex justify-center">
                <div className="group bg-white hover:bg-primary-dark w-44 h-44 rounded-2xl flex flex-col items-center justify-center shadow-md transition-all duration-300 outline-1 outline outline-gray-100">
                  <div className="rounded-full w-12 h-12 mb-2">{item.icon}</div>

                  <p className="text-3xl font-bold text-primary-dark group-hover:text-white transition-all duration-300">
                    {item.number}
                  </p>
                  <p className="text-center text-sm group-hover:text-white transition-all duration-300">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end mt-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 relative">
            {/* Row 2 */}
            {[
              {
                number: "02",
                text: "Job Posting",
                icon: <MegaPhone className="text-primary-dark" />,
              },
              {
                number: "04",
                text: "Shortlist Applicants",
                icon: <Folder className="text-primary-dark" />,
              },
              {
                number: "06",
                text: "Human Interviews",
                icon: <Speech className="text-primary-dark" />,
              },
              {
                number: "08",
                text: "Offer Job",
                icon: <Briefcase className="text-primary-dark" />,
              },
            ].map((item) => (
              <div key={item.number} className="col-span-1 flex justify-center">
                <div className="group bg-white hover:bg-primary-dark w-44 h-44 rounded-2xl flex flex-col items-center justify-center shadow-md transition-all duration-300 outline-1 outline outline-gray-100">
                  <div className="rounded-full w-12 h-12 mb-2">{item.icon}</div>

                  <p className="text-3xl font-bold text-primary-dark group-hover:text-white transition-all duration-300">
                    {item.number}
                  </p>
                  <p className="text-center text-sm group-hover:text-white transition-all duration-300">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
