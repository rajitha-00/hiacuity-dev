"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { USER_TYPE, UserType } from "@/constants";

export const HowSISOWorks = () => {
  const [selectedType, setSelectedType] = useState<UserType>("candidates");

  return (
    <div className="relative md:py-10  text-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/patterns/dot-grid-light.svg')] pointer-events-none"></div>

      {/* Title */}
      <div className="text-center w-full mt-20 md:mt-40">
        <Fade triggerOnce direction="up" delay={100}>
          <h2 className="text-4xl md:text-6xl font-semibold">
            What sets us apart?
          </h2>
        </Fade>
      </div>

      {/* Tabs */}
      <Fade triggerOnce direction="up" delay={200}>
        <div className="flex flex-wrap justify-center gap-2 mt-20 mx-auto p-1 bg-gray-200/50 backdrop-blur-lg max-w-fit rounded-full border border-gray-300 shadow-md">
          {Object.keys(USER_TYPE).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type as UserType)}
              className={`relative px-6 py-2 w-[120px] md:w-auto rounded-full font-medium transition-all duration-300 ease-in-out
        ${
          selectedType === type
            ? "bg-primary-dark text-white shadow-lg"
            : "bg-transparent text-gray-600 hover:bg-gray-300"
        }
      `}
            >
              {USER_TYPE[type as UserType].label}
            </button>
          ))}
        </div>
      </Fade>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-10 md:gap-20 lg:flex-row justify-between items-center mt-10"
        >
          {/* Image Section */}
          <Fade triggerOnce delay={100}>
            <div className="w-full">
              <Image
                alt={USER_TYPE[selectedType].featureTitle}
                src={USER_TYPE[selectedType].url}
                className="w-full object-cover rounded-[50px] shadow-lg"
              />
            </div>
          </Fade>

          {/* Text & Benefits Section */}
          <div className="w-full lg:w-1/2 text-left mt-6 lg:mt-0">
            <Fade triggerOnce direction="up" delay={200}>
              <h2 className="text-2xl md:text-4xl font-semibold text-primary-dark">
                {USER_TYPE[selectedType].featureTitle}
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                {USER_TYPE[selectedType].description}
              </p>
            </Fade>

            {/* Benefits */}
            <Fade triggerOnce direction="up" delay={300}>
              <ul className="mt-6 space-y-4">
                {USER_TYPE[selectedType].benefits.map((benefit) => (
                  <li
                    key={benefit.point}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex items-center justify-center bg-primary-dark p-5 rounded-lg text-white shadow-md">
                      {benefit.icon}
                    </div>
                    <span className="text-lg text-gray-700">
                      {benefit.point}
                    </span>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="text-center w-full mt-40">
        <Fade triggerOnce direction="up" delay={100}>
          <h2 className="text-4xl max-w-4xl mx-auto md:text-6xl font-semibold">
            {USER_TYPE[selectedType].whyUseTitle}
          </h2>
        </Fade>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mt-20 text-gray-700">
        {USER_TYPE[selectedType].whyFeaturedOn?.map((value, index) => (
          <div
            key={value.point}
            className="col-span-1 max-w-sm my-5 relative group"
          >
            <Fade triggerOnce direction="up" delay={100 * index}>
              {/* Icon Box with Hover Effect */}
              <div className="bg-gray-200 w-12 h-12 flex rounded-lg justify-center items-center p-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                <div className="w-6 h-6 m-auto transition-all duration-300 group-hover:scale-110 text-primary-main">
                  {value.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-5 md:text-xl font-semibold text-gray-900 transition-all duration-300 group-hover:text-primary-dark">
                {value.point}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-md md:mt-3 opacity-80 transition-all duration-300 group-hover:opacity-100">
                {value.pointDescription}
              </p>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};
