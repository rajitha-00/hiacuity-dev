"use client";
import { reasons } from "@/constants";
import { Fade } from "react-awesome-reveal";
import { Eye, ArrowUpRight, Target, ParkingMeter } from "lucide-react"; // Importing icons

export const WhyChooseHiAcuityAssesments = () => {
  return (
    <div className="relative mx-auto w-full h-auto z-10">
      <div className="mx-auto flex flex-col md:gap-20 lg:flex-row items-center justify-between">
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
              AI-Driven Hiring,
              <br />
              Smarter Teams
            </h2>
          </Fade>
          <Fade triggerOnce direction="up" delay={300}>
            <p className="mt-5 text-start text-sm md:text-lg md:text-justify text-text-primary">
              The only way to measure real ability.
            </p>
          </Fade>
        </div>

        <div className="grid gap-5 grid-cols-2 w-full mt-10">
          {reasons.map((reason, index) => {
            let icon;
            switch (reason.title) {
              case "Speed":
                icon = (
                  <ParkingMeter
                    size={36}
                    className="text-primary-main drop-shadow-md"
                  />
                );
                break;
              case "Insightful":
                icon = (
                  <Eye size={36} className="text-primary-main drop-shadow-md" />
                );
                break;
              case "Scalable":
                icon = (
                  <ArrowUpRight
                    size={36}
                    className="text-primary-main drop-shadow-md"
                  />
                );
                break;
              case "Objective":
                icon = (
                  <Target
                    size={36}
                    className="text-primary-main drop-shadow-md"
                  />
                );
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
                  className="col-span-1 bg-white/80 backdrop-blur-md border border-white/30 shadow-md shadow-black/10 px-6 py-6 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                >
                  <div className="flex items-start flex-col gap-4">
                    <div className="flex-shrink-0 ">{icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-dark">
                        {reason.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {reason.description}
                      </p>
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
