"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { USER_TYPE, UserType } from "@/constants";

export const HowSISOWorks = () => {
  const [selectedType, setSelectedType] = useState<UserType>("candidates");

  return (
    <div className="py-10">
      {/* Title */}
      <div className="text-center w-full mt-40">
        <Fade triggerOnce direction="up" delay={100}>
          <h2 className="text-3xl md:text-6xl font-medium text-text-">
            What sets us apart?
          </h2>
        </Fade>
      </div>

      {/* Tabs */}
      <Fade triggerOnce direction="up" delay={200}>
        <div className="flex flex-wrap justify-center gap-4 mt-20 mx-auto md:bg-text-greyLight p-1 max-w-fit rounded-xl md:rounded-full">
          {Object.keys(USER_TYPE).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type as UserType)}
              className={`px-4 py-2 w-[200px] md:w-auto rounded-full md:font-medium transition-all duration-300 ${
                selectedType === type
                  ? "bg-primary-dark text-white shadow-lg"
                  : "bg-primary-light md:bg-transparent hover:bg-gray-200"
              }`}
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
          className="flex flex-col gap-10 lg:flex-row justify-between items-center mt-10"
        >
          {/* Image Section */}
          <Fade triggerOnce delay={100}>
            <div className="w-full ">
              <Image
                alt={USER_TYPE[selectedType].featureTitle}
                src={USER_TYPE[selectedType].url}
                className="w-full object-cover"
              />
            </div>
          </Fade>

          {/* Text & Benefits Section */}
          <div className="w-full lg:w-1/2 text-left mt-6 lg:mt-0">
            <Fade triggerOnce direction="up" delay={200}>
              <h2 className="text-2xl md:text-4xl font-semibold text-text-primary">
                {USER_TYPE[selectedType].featureTitle}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
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
                    <div className="flex items-center justify-center bg-primary-dark p-5 rounded-lg text-white">
                      {benefit.icon}
                    </div>
                    <span className="text-lg text-text-grey">
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
          <h2 className="text-3xl max-w-4xl mx-auto md:text-6xl font-medium text-text-">
            {USER_TYPE[selectedType].whyUseTitle}
          </h2>
        </Fade>
      </div>
      <div className="grid mt-20 grid-cols-1 gap-10 md:grid-cols-3 items-center">
        <div className="col-span-1">
          <ul className="mt-6 space-y-4">
            {USER_TYPE[selectedType].whyUseLeft?.map((benefit, index) => (
              <Fade
                triggerOnce
                key={benefit.point}
                direction="up"
                delay={100 * index}
              >
                <li className="flex items-center space-x-3">
                  <div className="flex items-center justify-center bg-primary-dark p-5 rounded-lg text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h2 className="text-lg text-text-primary">
                      {benefit.point}
                    </h2>
                    <p className="text-md text-text-grey">
                      {benefit.pointDescription}
                    </p>
                  </div>
                </li>
              </Fade>
            ))}
          </ul>
        </div>
        <Fade triggerOnce direction="up" delay={200}>
          <Image
            alt={USER_TYPE[selectedType].featureTitle}
            src={USER_TYPE[selectedType].url}
            className="w-full object-cover"
          />
        </Fade>
        <div className="col-span-1">
          <Fade triggerOnce direction="up" delay={300}>
            <ul className="mt-6 space-y-4">
              {USER_TYPE[selectedType].whyUseRight?.map((benefit, index) => (
                <Fade
                  triggerOnce
                  key={benefit.point}
                  direction="up"
                  delay={100 * index}
                >
                  <li className="flex items-center space-x-3">
                    <div className="flex items-center justify-center bg-primary-dark p-5 rounded-lg text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h2 className="text-lg text-text-primary">
                        {benefit.point}
                      </h2>
                      <p className="text-md text-text-grey">
                        {benefit.pointDescription}
                      </p>
                    </div>
                  </li>
                </Fade>
              ))}
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
};
