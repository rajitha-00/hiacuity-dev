"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import HiringHomePageImage from "../assets/hero/HeroImage.png";
import BGPattern from "../assets/hero/heroPattern.svg";
import { AssesmentDemo, SectionRightImage } from "@/components/sectionRight";
import AIIcon from "../assets/hero/AISVG.svg";
import AUTSVG from "../assets/hero/AUTSVG.svg";
import INTSVG from "../assets/hero/INTSVG.svg";
import SCSSVG from "../assets/hero/SCSSVG.svg";
import Gloab from "../assets/hero/Gloab.svg";
import JobOpenings from "../assets/hero/job-openings.png";
import Assements from "../assets/hero/assesments.png";
import FeatureImage1 from "../assets/hero/featurecard1.png";
import FeatureImage2 from "../assets/hero/featurecard2.png";
import FeatureImage3 from "../assets/hero/featurecard3.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/constants";
import { FeatureCard } from "@/components/Cards/FeatureCard";
import { SectionLeftImage } from "@/components/sectionLeft";
import BGImage from "../assets/images/GetADemoBg.png";
import { CircleCheckBig } from "lucide-react";
const features = [
  { src: AIIcon, title: "Smart AI Insights" },
  { src: AUTSVG, title: "Automated Intelligence" },
  { src: INTSVG, title: "Interactive Dashboards" },
  { src: SCSSVG, title: "Seamless Cloud Sync" },
];
export default function Home() {
  return (
    <div className="flex w-full flex-col items-center  justify-center">
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={BGPattern}
          alt="Hero Background"
          layout="fill"
          objectFit="contain"
          className="opacity-50"
        />
      </div>

      <div className="relative isolate px-6 pt-14 lg:px-8 w-full max-w-[1600px] mx-auto ">
        <div className="mx-auto py-20 min-h-[85vh] flex flex-col lg:flex-col items-center justify-between">
          <div className="text-center mt-10 lg:text-start w-full flex flex-col gap-5 z-10">
            <Fade direction="up" triggerOnce delay={300}>
              <div className="bg-primary-light p-1 rounded-full outline outline-1 outline-primary-main max-w-xs mx-auto">
                <p className=" text-center text-sm font-semibold text-primary-dark ">
                  Empowering those who evolve with AI
                </p>
              </div>
            </Fade>
            <h1 className="text-center text-7xl mt-5 font-semibold tracking-tight bg-gradient-to-tr from-primary-dark bg-primary-main bg-clip-text text-transparent">
              <Fade direction="up">
                <span className="text-balance md:text-8xl text-7xl font-semibold tracking-tight bg-gradient-to-tr from-primary-dark bg-primary-main bg-clip-text text-transparent">
                  HiAcuity
                </span>
              </Fade>
              <Fade direction="up" triggerOnce delay={100}>
                <span className="text-text-title pt-5 font-semibold md:text-7xl text-5xl">
                  Hiring Made Simple!
                </span>
              </Fade>
            </h1>
          </div>
          <div
            className="relative w-full h-auto "
            style={{ aspectRatio: "16 / 10" }}
          >
            <Fade triggerOnce delay={100}>
              <Image
                alt="HIAcuity is ai hiring platform"
                src={HiringHomePageImage}
                fill
                className="object-contain"
              />
            </Fade>
          </div>
        </div>
      </div>
      <div className="relative isolate px-6  w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
          {features.map((feature, index) => (
            <div className="col-span-1" key={index}>
              <Fade direction="right" triggerOnce delay={100 * index}>
                <div className="flex flex-col items-center">
                  <Image
                    alt={feature.title}
                    src={feature.src}
                    width={140}
                    height={140}
                  />
                </div>
              </Fade>
              <Fade direction="right" triggerOnce delay={100 * index + 50}>
                <h3 className="text-center mt-5 font-semibold text-xl text-primary-dark">
                  {feature.title}
                </h3>
              </Fade>
            </div>
          ))}
        </div>
      </div>
      {/* Enhance Your Management Section: Highlights features of our tools to improve management */}
      <div className="relative isolate px-6 mt-20 md:mt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div className=" p-10 ">
          <h2 className="text-balance text-center mt-10 tracking-tight ">
            <Fade direction="up" triggerOnce delay={0}>
              <span className="text-text-title  font-semibold md:text-6xl text-4xl">
                Enhance Your Corporate Management Efforts with AI!
              </span>
            </Fade>
          </h2>
        </div>
        <div className="flex flex-col z-10 gap-20 pt-20">
          <SectionLeftImage
            label="JOB OPENINGS"
            title="Smart Screening"
            description=" Automated filtering quickly identifies top candidates, making it easy to spot the most qualified
                individuals early in the hiring process. Enhanced by AI precision, this approach reduces bias and
                increases accuracy, ensuring a fairer and more reliable selection. By streamlining initial screenings,
                these tools also save valuable time, allowing recruiters to focus on meaningful candidate interactions."
            buttonLabel="Learn More"
            imageSrc={FeatureImage1}
            hasBg
            hasPadding
          />

          <SectionRightImage
            label="Assessments"
            title="Effortless Hiring"
            description="A seamless recruitment process is achieved by using intuitive tools that simplify each step, making it easier for recruiters to manage and track progress. Quick onboarding is facilitated through automated workflows, allowing hiring to accelerate efficiently. This enhanced approach improves overall satisfaction for both candidates and recruiters, creating a positive and streamlined experience."
            buttonLabel="Learn More"
            imageSrc={FeatureImage2}
            hasBg
            hasPadding
          />
          <SectionLeftImage
            label="RECRUITING"
            title="Partner Insights"
            description=" Automated filtering efficiently identifies top candidates, helping streamline recruitment by pinpointing the most qualified individuals early in the process. With AI precision, it reduces bias and enhances accuracy, creating a more equitable selection environment. This technology also saves valuable time by simplifying initial screenings, allowing hiring teams to focus on engaging with the best-suited candidates."
            buttonLabel="Learn More"
            imageSrc={FeatureImage3}
            hasBg
            hasPadding
          />
        </div>
      </div>

      {/* Hiring Solutions Section: Showcases hiring services and solutions offered */}
      <div className="relative isolate px-6 pt-20 md:pt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div className="text-center z-10  w-full flex flex-col gap-5">
          <h2 className="text-balance font-extrabold tracking-tight ">
            <Fade direction="up" triggerOnce delay={0}>
              <span className="text-text-title font-semibold md:text-6xl text-4xl">
                Hiring Solutions
              </span>
            </Fade>
          </h2>
        </div>
        <div className="flex flex-col z-20 gap-16  md:gap-32 pt-10 md:pt-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
            <div className="col-span-1">
              <FeatureCard
                description="Automated filtering quickly identifies top candidates, making it easy to spot the most qualified
                individuals early in the hiring process. Enhanced by AI precision, this approach reduces bias and
                increases accuracy, ensuring a fairer and more reliable selection. By streamlining initial screenings,
                these tools also save valuable time, allowing recruiters to focus on meaningful candidate interactions."
                imageSrc={JobOpenings}
                title="Job Openings"
                navigateTo={"/job-openings"}
              />
            </div>
            <div className="col-span-1">
              <FeatureCard
                description="A seamless recruitment process is achieved by using intuitive tools that simplify each step, making it easier for recruiters to manage and track progress. Quick onboarding is facilitated through automated workflows, allowing hiring to accelerate efficiently. This enhanced approach improves overall satisfaction for both candidates and recruiters, creating a positive and streamlined experience."
                imageSrc={Assements}
                title="Assessment"
                navigateTo={"/employee-assements"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate px-6 pt-20 md:pt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div className="text-center z-10  w-full flex flex-col gap-5">
          <h2 className="text-balance font-extrabold tracking-tight ">
            <Fade direction="up" triggerOnce delay={0}>
              <span className="text-text-title font-semibold md:text-6xl text-4xl">
                Shaping The World Of Tomorrow.{" "}
              </span>
            </Fade>
          </h2>
          <div
            className="relative w-full h-auto "
            style={{ aspectRatio: "16 / 10" }}
          >
            <Fade triggerOnce delay={100}>
              <Image
                alt="HIAcuity is ai hiring platform"
                src={Gloab}
                fill
                className="object-contain"
              />
            </Fade>
          </div>
        </div>
        <div className="flex flex-col z-20 gap-16  md:gap-32 pt-10 md:pt-20 "></div>
      </div>
      <div className="relative isolate px-6 pt-20 md:pt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div className="relative mx-auto flex rounded-[50px] shadow-md flex-col lg:flex-row outline outline-1 outline-gray-100 items-center justify-between overflow-hidden px-20 py-20">
          <Image
            src={BGImage}
            alt="Graduation Hat"
            layout="fill"
            objectFit="cover"
            className="absolute  inset-0 z-0 "
          />
          {/* Overlay for better readability */}

          {/* Right Section - Content */}
          <div className="relative text-start md:p-16 w-full justify-center z-10">
            <Fade triggerOnce direction="up" delay={200}>
              <h2 className="text-3xl md:text-5xl font-medium text-white">
                Get Assessment Demo
              </h2>
            </Fade>
            <Fade triggerOnce direction="up" delay={300}>
              <p className="mt-10 text-start text-sm md:text-lg md:text-justify text-white">
                Hiring delays cost businesses time and money. Our assessments
                eliminate unqualified candidates, reduce time-to-hire, and
                ensure only the best talent moves forward.
              </p>
            </Fade>
            <ul>
              <li>
                <div className="col-span-1 py-6 rounded-xl">
                  <div className="flex items-start flex-row gap-3">
                    <div className="flex-shrink-0">
                      <CircleCheckBig size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">
                        Cut hiring time from 25+ days.
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="col-span-1 py-6 rounded-xl">
                  <div className="flex items-start flex-row gap-3">
                    <div className="flex-shrink-0">
                      <CircleCheckBig size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">
                        Filter out time-wasting candidates.
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="col-span-1 py-6 rounded-xl">
                  <div className="flex items-start flex-row gap-3">
                    <div className="flex-shrink-0">
                      <CircleCheckBig size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">
                        Identify high-potential talent.
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <AssesmentDemo buttonLabel="Start Assessment" />
        </div>
      </div>

      {/* FAQ Section: Lists frequently asked questions to address common user queries */}
      <div className="relative isolate px-6 pt-20 md:pt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div className="text-center z-10 w-full flex flex-col gap-5">
          <h2 className="text-balance font-extrabold tracking-tight">
            <Fade direction="up" triggerOnce delay={0}>
              <span className="text-text-title font-semibold md:text-6xl text-4xl">
                Frequently Asked Questions (FAQ)
              </span>
            </Fade>
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="flex w-full mt-10 md:mt-20 z-10 flex-col gap-3"
          defaultValue={FAQ[0].question}
        >
          {FAQ.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-text-primary px-5 shadow-sm border bg-white z-10 w-full hover:text-primary-dark data-[state=open]:text-primary-dark data-[state=open]:shadow-md">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-md py-5 leading-tight text-muted-foreground">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
