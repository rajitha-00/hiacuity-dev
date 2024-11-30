"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/icons/Icons";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import HiringHomePageImage from "../assets/homepage/HiringHomePage.svg";
import { SectionLeftImage } from "@/components/sectionLeft";
import { AssesmentDemo, SectionRightImage } from "@/components/sectionRight";
import EffortlessHiringImage from "../assets/homepage/EffortlessHiring.svg";
import SmartScreeningImage from "../assets/homepage/SmartScreening.svg";
import PartnerInsightsImage from "../assets/homepage/PartnerInsights.svg";
import JobOpeningsImage from "../assets/homepage/JobOpenings.svg";
import AssesmentImage from "../assets/homepage/Assesment.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/constants";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center  justify-center">
      {/* Hero Section: Displays the main introduction and key messaging of the website */}
      <div className="relative isolate px-6 pt-14 lg:px-8 w-full max-w-[1600px] mx-auto ">
        <div
          style={{
            background: "radial-gradient(circle, rgba(41,250,66,0.1) 5%, rgba(111,250,170,0.1) 40%, transparent 70%)",
          }}
          className="absolute hidden md:block -left-[35%] top-[70%] z-0 w-[800px] h-[800px] rounded-full "
        ></div>
        <div className="mx-auto py-20 min-h-[85vh] flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div className="text-center lg:text-start w-full flex flex-col gap-5 z-10">
            <h1 className="text-balance text-7xl font-extrabold tracking-tight bg-gradient-to-tr from-primary-dark bg-primary-main  bg-clip-text text-transparent ">
              <Fade direction="up" triggerOnce delay={0}>
                <span className="text-text-title font-bold md:text-6xl text-5xl">Where</span>
              </Fade>
              <Fade direction="up">
                <span className="text-balance md:text-8xl text-7xl  font-extrabold tracking-tight bg-gradient-to-tr from-primary-dark bg-primary-main  bg-clip-text text-transparent ">
                  Hiring
                </span>
              </Fade>
              <Fade direction="up" triggerOnce delay={100}>
                <span className="text-text-title font-bold md:text-6xl text-5xl">Made Simple</span>
              </Fade>
            </h1>
            <Fade direction="up" triggerOnce delay={300}>
              <p className=" text-pretty text-lg font-medium text-text-primary sm:text-xl/8">
                HiAcuity is free to trial for as long as you’d like
              </p>
            </Fade>
            <Fade direction="up" triggerOnce delay={400}>
              <div className=" flex  gap-x-6 justify-center  lg:justify-start">
                <Button className="relative rounded-xl bg-primary-light px-4 py-2.5 text-sm font-semibold text-primary-dark ">
                  Get started{" "}
                  <span aria-hidden="true">
                    <ArrowRight />
                  </span>
                </Button>
              </div>
            </Fade>
          </div>
          <div className="relative w-full h-auto" style={{ aspectRatio: "16 / 10" }}>
            <div
              style={{
                background:
                  "radial-gradient(circle, rgba(41,250,66,0.2) 5%, rgba(111,250,170,0.5) 40%, transparent 70%)",
              }}
              className="absolute hidden md:block right-10 -top-20 w-[700px] h-[700px] rounded-full "
            ></div>
            <Fade triggerOnce delay={100}>
              <Image
                alt="HIAcuity is ai hiring platform"
                src={HiringHomePageImage}
                fill
                className="object-cover" // Ensures the image covers the entire container
              />
            </Fade>
          </div>
        </div>
      </div>

      {/* Enhance Your Management Section: Highlights features of our tools to improve management */}
      <div className="relative isolate px-6 mt-20 md:mt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div
          style={{
            background: "radial-gradient(circle, rgba(41,250,66,0.1) 5%, rgba(111,250,170,0.1) 40%, transparent 70%)",
          }}
          className="absolute hidden md:block -right-[35%] top-[30%] z-0 w-[800px] h-[800px] rounded-full "
        ></div>
        <div className="text-center  w-full flex flex-col gap-5 z-10">
          <h2 className="text-balance font-extrabold tracking-tight ">
            <Fade direction="up" triggerOnce delay={0}>
              <span className="text-text-title font-bold md:text-6xl text-4xl">
                Enhance Your Corporate Management Efforts with AI!
              </span>
            </Fade>
          </h2>
          <Fade direction="up" triggerOnce delay={300}>
            <p className=" text-pretty md:text-lg font-medium text-text-primary text-center sm:text-xl/8">
              HiAcuity is free to trial for as long as you’d like
            </p>
          </Fade>
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
            imageSrc={SmartScreeningImage}
            hasBg
            hasPadding
          />

          <SectionRightImage
            label="Assessments"
            title="Effortless Hiring"
            description="A seamless recruitment process is achieved by using intuitive tools that simplify each step, making it easier for recruiters to manage and track progress. Quick onboarding is facilitated through automated workflows, allowing hiring to accelerate efficiently. This enhanced approach improves overall satisfaction for both candidates and recruiters, creating a positive and streamlined experience."
            buttonLabel="Learn More"
            imageSrc={EffortlessHiringImage}
            hasBg
            hasPadding
          />
          <SectionLeftImage
            label="RECRUITING"
            title="Partner Insights"
            description=" Automated filtering efficiently identifies top candidates, helping streamline recruitment by pinpointing the most qualified individuals early in the process. With AI precision, it reduces bias and enhances accuracy, creating a more equitable selection environment. This technology also saves valuable time by simplifying initial screenings, allowing hiring teams to focus on engaging with the best-suited candidates."
            buttonLabel="Learn More"
            imageSrc={PartnerInsightsImage}
            hasBg
            hasPadding
          />
        </div>
      </div>

      {/* Hiring Solutions Section: Showcases hiring services and solutions offered */}
      <div className="relative isolate px-6 pt-20 md:pt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div
          style={{
            background: "radial-gradient(circle, rgba(41,250,66,0.1) 5%, rgba(111,250,170,0.1) 40%, transparent 70%)",
          }}
          className="absolute hidden md:block -left-[35%] top-[40%] z-0 w-[800px] h-[800px] rounded-full "
        ></div>
        <div className="text-center z-10  w-full flex flex-col gap-5">
          <h2 className="text-balance font-extrabold tracking-tight ">
            <Fade direction="up" triggerOnce delay={0}>
              <span className="text-text-title font-bold md:text-6xl text-4xl">Hiring Solutions</span>
            </Fade>
          </h2>
        </div>
        <div className="flex flex-col z-10 gap-16  md:gap-32 pt-10 md:pt-20">
          <SectionLeftImage
            title="Smart Screening"
            description=" Automated filtering quickly identifies top candidates, making it easy to spot the most qualified
                individuals early in the hiring process. Enhanced by AI precision, this approach reduces bias and
                increases accuracy, ensuring a fairer and more reliable selection. By streamlining initial screenings,
                these tools also save valuable time, allowing recruiters to focus on meaningful candidate interactions."
            buttonLabel="Learn More"
            imageSrc={JobOpeningsImage}
          />
          <SectionRightImage
            title="Effortless Hiring"
            description="A seamless recruitment process is achieved by using intuitive tools that simplify each step, making it easier for recruiters to manage and track progress. Quick onboarding is facilitated through automated workflows, allowing hiring to accelerate efficiently. This enhanced approach improves overall satisfaction for both candidates and recruiters, creating a positive and streamlined experience."
            buttonLabel="Learn More"
            imageSrc={AssesmentImage}
          />
        </div>
      </div>

      {/* Assessment Demo Section: Provides a demo of the assessment process */}
      <div className="h-auto py-10 bg-text-title w-full mt-20 md:mt-40">
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <AssesmentDemo
            title="Assement Demo"
            description="A seamless recruitment process is achieved by using intuitive tools that simplify each step, making it easier for recruiters to manage and track progress. Quick onboarding is facilitated through automated workflows, allowing hiring to accelerate efficiently. This enhanced approach improves overall satisfaction for both candidates and recruiters, creating a positive and streamlined experience."
            buttonLabel="Start Assessment"
            label="TRY DEMO"
          />
        </div>
      </div>

      {/* FAQ Section: Lists frequently asked questions to address common user queries */}
      <div className="relative isolate px-6 pt-20 md:pt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div className="text-center z-10 w-full flex flex-col gap-5">
          <h2 className="text-balance font-extrabold tracking-tight">
            <Fade direction="up" triggerOnce delay={0}>
              <span className="text-text-title font-bold md:text-6xl text-4xl">Frequently Asked Questions (FAQ)</span>
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
                <p className="text-md py-5 leading-tight text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
