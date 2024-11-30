"use client";
import { CONTACT_US } from "@/constants";
import { Fade } from "react-awesome-reveal";

export const ValuesCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20 text-white">
      {CONTACT_US.map((value, index) => (
        <Fade key={value.title} triggerOnce direction="up" delay={100 * index}>
          <div key={value.title} className="col-span-1 max-w-sm">
            <div className={`rounded-full w-10 h-10`}>{value.icon}</div>
            <h3 className="mt-3 text-xl font-semibold text-primary-light mr-2 md:mb-4">{value.title}</h3>
            <p className="text-md mt-3">{value.description}</p>
          </div>
        </Fade>
      ))}
    </div>
  );
};
