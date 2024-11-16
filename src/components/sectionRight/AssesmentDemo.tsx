"use client";

import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

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
        <div className="text-center w-full justify-center  lg:text-start max-w-2xl">
          <p className="text-lg font-medium w-[110px] text-justify bg-primary-light px-2 rounded-md text-green-700 mr-2 mb-4">
            {label}
          </p>
          <h2 className="text-5xl font-bold text-primary-light">{title}</h2>
          <p className="mt-2 text-justify text-gray-50">{description}</p>
        </div>
        <div className=" w-full justify-center lg:text-start  max-w-2xl">
          <div>
            <div className="form backdrop-blur-md bg-white bg-opacity-30 bg-blur-sm p-10 rounded-3xl border">
              <Input type="text" placeholder="Ask for Demo" className="text-white placeholder:text-white" />
              <Select>
                <SelectTrigger className="w-full mt-3 text-white">
                  <SelectValue placeholder="Select a Lanugae" className="text-white " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <button className="mt-3 w-auto inline-flex items-center px-4 py-2 text-sm font-medium text-primary-dark bg-primary-light shadow-sm rounded-lg ">
                {buttonLabel} <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
