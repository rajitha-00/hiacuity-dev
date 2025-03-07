"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For smooth animations
import Image from "next/image";
import { FLOW_STEPS } from "@/constants";

export const AssesmentFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Auto-progress every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < FLOW_STEPS.length ? prev + 1 : 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-auto py-10 z-10 w-full mt-20 md:mt-40 backdrop-blur-lg bg-opacity-30 rounded-[50px]  p-5 md:px-16 md:py-16  max-w-[1600px] mx-auto  shadow-lg"
      style={{
        background:
          "linear-gradient(135deg, rgba(3,22,2,0.7) 0%, rgba(25,77,31,0.4) 40%, rgba(25,77,31,0.7) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
        <h2 className="text-center  text-3xl md:text-7xl font-medium text-white">
          How SISO Works: AI-Powered Skills Assessment in 5 Steps
        </h2>

        {/* Image & Description Section */}
        <div className="flex flex-col lg:flex-row items-start gap-20 justify-between mt-10 md:mt-20">
          {/* Left: Animated Image */}
          <motion.div
            key={currentStep} // Ensures animation restarts on step change
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }} // Slower transition
            className="relative w-full"
          >
            <Image
              src={FLOW_STEPS[currentStep - 1].url}
              alt="Assessment Process"
              className="rounded-2xl w-full"
            />
          </motion.div>

          {/* Right: Animated Description */}
          <motion.div
            key={FLOW_STEPS[currentStep - 1].title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }} // Slower transition
            className="w-full text-white md:px-6 mt-5 md:mt-0"
          >
            <h3 className="text-xl md:text-2xl font-semibold">
              {FLOW_STEPS[currentStep - 1].title}
            </h3>
            <p className="mt-2 text-lg md:text-xl text-white">
              {FLOW_STEPS[currentStep - 1].description}
            </p>
          </motion.div>
        </div>

        {/* Separate Progress Bars as Buttons */}
        <div className="mt-10 gap-10 flex flex-row">
          {FLOW_STEPS.map((step) => (
            <div
              key={step.id}
              className="w-full cursor-pointer"
              onClick={() => setCurrentStep(step.id)}
            >
              <p className="text-center text-md my-5 text-white">
                Step 0{step.id}
              </p>
              <motion.div
                className="h-2 bg-gray-700 rounded-full relative"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="h-2 bg-green-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: currentStep === step.id ? "100%" : "0%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.div>
              <p className="hidden md:block text-center md:text-xl mt-5 text-white">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
