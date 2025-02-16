"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For smooth animations
import Image from "next/image";
import PricingHero from "../../assets/images/WhatsSetusApart.png"; // Placeholder image

const steps = [
  { id: 1, title: "Assessment Creation" },
  { id: 2, title: "Invite Candidates" },
  { id: 3, title: "Assessment Done by Candidates" },
  { id: 4, title: "AI Scoring" },
  { id: 5, title: "Results & Analytics" },
];

export const AssesmentFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Auto-progress every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length ? prev + 1 : 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-auto py-10 z-10 w-full mt-20 md:mt-40"
      style={{
        background:
          "linear-gradient(135deg, #031602 0%, #194D1F 50%, #194D1F 100%)",
      }}
    >
      <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
        <h2 className="text-start max-w-4xl text-3xl md:text-6xl font-medium text-white">
          How SISO Works: AI-Powered Skills Assessment in 5 Steps
        </h2>

        {/* Image & Description Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mt-10">
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
              src={PricingHero}
              alt="Assessment Process"
              className="rounded-2xl w-full"
            />
          </motion.div>

          {/* Right: Animated Description */}
          <motion.div
            key={steps[currentStep - 1].title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }} // Slower transition
            className="w-full text-white md:px-6 mt-5 md:mt-0"
          >
            <h3 className="text-xl md:text-2xl font-semibold">
              {steps[currentStep - 1].title}
            </h3>
            <p className="mt-2 text-md text-gray-300">
              Easily design customized skill assessments tailored to your
              organization’s needs. Choose from a library of pre-built tests or
              create your own with multiple question formats, including
              multiple-choice, coding challenges, video responses, and more.
            </p>
          </motion.div>
        </div>

        {/* Separate Progress Bars as Buttons */}
        <div className="mt-10 gap-10 flex flex-row">
          {steps.map((step) => (
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
