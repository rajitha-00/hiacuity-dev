"use client";

import { ArrowRight } from "@/icons/Icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface IAssesmentDemo {
  label?: string;
  title: string;
  description: string;
  buttonLabel: string;
  hasBg?: boolean;
  hasPadding?: boolean;
}

export const AssesmentDemo = (props: IAssesmentDemo) => {
  const { label, title, description, buttonLabel, hasBg, hasPadding } = props;
  return (
    <div
      className={`relative mx-auto w-full py-10 h-auto rounded-3xl z-10
        ${
          hasBg
            ? "bg-radial-gradient backdrop-blur-md bg-opacity-30  border shadow-lg border-primary-light"
            : "border-transparent"
        }
      `}
    >
      <div
        className={`mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between
          ${hasPadding ? "py-20 px-10" : ""}
        `}
      >
        <div className="text-start md:text-center w-full justify-center  lg:text-start max-w-2xl">
          <p className="text-lg font-medium w-[110px] text-justify bg-primary-light px-2 rounded-md text-green-700 mr-2 mb-4">
            {label}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-light">{title}</h2>
          <p className="mt-2 text-start text-sm md:text-lg md:text-justify text-gray-50">{description}</p>
        </div>
        <div className=" w-full justify-center lg:text-start  max-w-2xl">
          <div>
            <div className="form backdrop-blur-md bg-white bg-opacity-30 bg-blur-sm p-10 rounded-xl border">
              <div className="mt-4">
                <p className="text-white text-xs">Ask for Demo</p>
                <Input
                  type="text"
                  placeholder="Ask for Demo"
                  className="text-text-primary mt-2 placeholder:text-text-greyDark"
                />
              </div>
              <div className="mt-4">
                <p className="text-white text-xs">Select a Language</p>
                <Select>
                  <SelectTrigger className="w-full mt-3 text-text-primary">
                    <SelectValue placeholder="Select a Language" className="text-text-primary mt-2" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button className="relative mt-6 rounded-xl bg-primary-light px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-md  transition duration-300 ease-in-out">
                {buttonLabel}{" "}
                <span aria-hidden="true">
                  <ArrowRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
