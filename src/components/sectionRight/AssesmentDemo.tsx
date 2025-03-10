"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { BookOpenCheck } from "lucide-react";

interface IAssesmentDemo {
  buttonLabel: string;
  hasBg?: boolean;
}

export const AssesmentDemo = (props: IAssesmentDemo) => {
  const { buttonLabel, hasBg } = props;
  return (
    <div
      className={`relative mx-auto w-full py-5 h-auto rounded-3xl z-10
        ${
          hasBg
            ? "bg-radial-gradient backdrop-blur-md bg-opacity-30  border shadow-lg border-primary-light"
            : "border-transparent"
        }
      `}
    >
      <div
        className={`mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between
        `}
      >
        <div className=" w-full justify-center lg:text-start  max-w-2xl">
          <div>
            <div className="form backdrop-blur-md bg-white bg-opacity-30 bg-blur-sm p-5 md:p-10 rounded-xl border">
              <div className="flex flex-row gap-3 items-end">
                <BookOpenCheck size={60} className="text-white" />
                <h3 className="text-white text-xl">SISO : Assesment</h3>
              </div>
              <div className="mt-5 brder-t border-white">
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
                    <SelectValue
                      placeholder="Select a Language"
                      className="text-text-primary mt-2"
                    />
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

              <div className="flex md:flex-row flex-col gap-2">
                <Link href="/contact">
                  <Button className="relative mt-6 rounded-xl w-full md:w-auto  px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-md  transition duration-300 ease-in-out">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
