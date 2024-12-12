"use client";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";

export const BlogsHeroSection = () => {
  return (
    <>
      <section className="relative isolate lg:rounded-3xl px-6 pt-14 lg:px-8 w-full mt-24 h-[700px] max-w-[1600px] mx-auto overflow-hidden">
        <div className="mx-6 overflow-hidden">
          <div
            className="absolute  inset-0 bg-cover rounded-xl bg-center"
            style={{
              backgroundImage:
                "url('https://www.hiacuity.com/static/media/HiAcuity_Partner-Assessment.72492ec97213588b32fa.png')",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/60 to-transparent"></div>{" "}
        <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-10 text-white">
          <h1 className="text-balance text-7xl font-extrabold tracking-tight bg-gradient-to-tr from-primary-dark bg-primary-main bg-clip-text text-transparent">
            <Fade direction="up" triggerOnce delay={0}>
              <span className="text-white font-bold md:text-6xl text-5xl">Blog</span>
            </Fade>
            <Fade direction="up">
              <span className="text-balance md:text-8xl text-7xl font-extrabold text-white">Title to Replace</span>
            </Fade>
          </h1>
          <span className="text-xl mt-4">June 28, 2018</span>
        </div>
      </section>
      <section className="relative isolate rounded-3xl px-6 pt-10 w-full   max-w-[1600px] mx-auto overflow-hidden">
        <Fade triggerOnce direction="up" delay={300}>
          <p className="mt-2 text-start text-sm md:text-lg md:text-justify text-text-primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorum alias error aliquam eligendi
            voluptatibus unde sit. Veritatis omnis aperiam, eius obcaecati, molestias quisquam quod perspiciatis
            temporibus doloremque id inventore repudiandae quo vel odit dolores libero! Earum consequatur quos, optio
            labore temporibus libero in officia aut consequuntur facilis perferendis esse cupiditate maiores id sunt eum
            quasi? Hic minus earum asperiores?
          </p>
        </Fade>
        <Fade triggerOnce direction="up" delay={400}>
          <Button variant={"link"} className="relative  text-sm font-semibold text-primary-dark  ">
            Read More
          </Button>
        </Fade>
        <div className="relative my-32">
          <div className="relative w-full pl-5 overflow-x-hidden md:pl-0">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950"></div>
            <div className="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600"></div>
          </div>
          <div className="absolute flex items-center justify-center w-auto h-auto px-3 py-1.5 uppercase tracking-widest space-x-1 text-[0.6rem] md:-translate-x-1/2 -translate-y-1/2 border rounded-full bg-white dark:bg-neutral-900 text-neutral-400 left-0 md:ml-0 ml-5 md:left-1/2 border-neutral-100 dark:border-neutral-800 shadow-sm">
            <p className="leading-none">
              Dive into a world of inspiration, ideas, and insights! Explore our blogs today.
            </p>
            <div className="flex items-center justify-center w-5 h-5 translate-x-1 border rounded-full border-neutral-100 dark:border-neutral-800">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
