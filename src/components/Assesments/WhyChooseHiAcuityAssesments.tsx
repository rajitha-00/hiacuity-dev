"use client";
import { reasons } from "@/constants";
import { Fade } from "react-awesome-reveal";
import { Eye, ArrowUpRight, Target, ParkingMeter } from "lucide-react"; // Importing icons

export const WhyChooseHiAcuityAssesments = () => {
  return (
    <div className="relative mx-auto w-full h-auto z-10">
      <div className="mx-auto flex flex-col gap-20 lg:flex-row items-center justify-between">
        <div className="text-start w-full lg:text-start">
          <Fade triggerOnce direction="left" delay={100}>
            <div className="border border-primary-dark rounded-3xl p-2 w-[160px] flex justify-center items-center mr-2 md:mb-4">
              <p className="text-lg font-semibold text-primary-dark">
                WHAT IS SISO
              </p>
            </div>
          </Fade>
          <Fade triggerOnce direction="left" delay={200}>
            <h2 className="text-3xl mt-5 max-w-3xl md:text-5xl font-semibold text-text-primary">
              AI-powered cloud platform for <br />
              automated skill assessment.
            </h2>
          </Fade>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 w-full mt-10">
          {reasons.map((reason, index) => {
            let icon;
            switch (reason.title) {
              case "Speed":
                icon = <ParkingMeter size={36} className="text-primary-dark" />;
                break;
              case "Insightful":
                icon = <Eye size={36} className="text-primary-dark" />;
                break;
              case "Scalable":
                icon = <ArrowUpRight size={36} className="text-primary-dark" />;
                break;
              case "Objective":
                icon = <Target size={36} className="text-primary-dark" />;
                break;
              default:
                icon = null;
            }

            return (
              <Fade
                triggerOnce
                key={reason.title}
                direction="right"
                delay={100 * index}
              >
                <div
                  key={reason.title}
                  className="col-span-1 outline outline-1 outline-gray-100 bg-gray-50 px-5 py-6 rounded-xl"
                >
                  <div className="flex items-start flex-col gap-3">
                    <div className="flex-shrink-0">{icon}</div>
                    <div>
                      <h3 className="text-xl font-medium text-text-title">
                        {reason.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
};
