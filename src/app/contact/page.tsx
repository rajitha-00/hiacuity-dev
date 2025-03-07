import { HeroSectionCommon } from "@/components/HeroSection";
import HiringHomePageImage from "../../assets/homepage/ContactHero.svg";
import { SectionHeader } from "@/components/Typography";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ValuesCard } from "@/components/ContactUs/ValuesCard";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HiAcuity | Contact Us",
};

export default function Contact() {
  return (
    <div className="flex w-full flex-col items-center  justify-center">
      <HeroSectionCommon
        title1="Ready to"
        title2="Level Up"
        title3="Your Business"
        url={HiringHomePageImage}
        cta=""
        heroText=""
        hasImage
      />
      <div className="h-auto z-20 py-10 bg-text-title w-full mt-20 md:0">
        <div className="relative isolate px-6 md:py-8 lg:px-8 max-w-[1600px] mx-auto">
          <SectionHeader hasLightTitle title="Contact Our Friendly Team" />
          <ValuesCard />
        </div>
      </div>
      <div className="relative isolate px-6 pt-20 md:pt-40 w-full lg:px-8 max-w-[1600px] mx-auto ">
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(41,250,66,0.1) 5%, rgba(111,250,170,0.1) 40%, transparent 70%)",
          }}
          className="absolute hidden md:block -right-[35%] top-[30%] z-0 w-[800px] h-[800px] rounded-full "
        ></div>
        <SectionHeader title="Get in Touch" />
        <div className=" w-full justify-center lg:text-start mx-auto mt-10 max-w-[1000px]">
          <div className="flex flex-col gap-5">
            <div className="form backdrop-blur-md flex flex-col gap-5 bg-white bg-opacity-30 bg-blur-sm ">
              <div className="flex flex-col gap-5 md:gap-10 md:flex-row justify-between">
                <div className=" w-full">
                  <p className="text-text-greyDark text-xs">First Name</p>
                  <Input
                    type="text"
                    placeholder="Enter your first name"
                    className="text-text-primary mt-2 placeholder:text-text-greyDark"
                  />
                </div>
                <div className=" w-full">
                  <p className="text-text-greyDark text-xs">Last Name</p>
                  <Input
                    type="text"
                    placeholder="Enter your last name"
                    className="text-text-primary mt-2 placeholder:text-text-greyDark"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 md:gap-10 md:flex-row justify-between">
                <div className=" w-full">
                  <p className="text-text-greyDark text-xs">Email</p>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="text-text-primary mt-2 placeholder:text-text-greyDark"
                  />
                </div>
                <div className=" w-full">
                  <p className="text-text-greyDark text-xs">Select a Country</p>
                  <Select>
                    <SelectTrigger className="w-full mt-2 text-text-primary">
                      <SelectValue
                        placeholder="Select a Language"
                        className="text-text-primary mt-2"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="english">USA</SelectItem>
                        <SelectItem value="spanish">UK</SelectItem>
                        <SelectItem value="german">DENMARK</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:gap-10 md:flex-row justify-between">
                <div className=" w-full">
                  <p className="text-text-greyDark text-xs">Company Name</p>
                  <Input
                    type="text"
                    placeholder="Enter your company Name"
                    className="text-text-primary mt-2 placeholder:text-text-greyDark"
                  />
                </div>
                <div className=" w-full">
                  <p className="text-text-greyDark text-xs">
                    Select a Industry
                  </p>
                  <Select>
                    <SelectTrigger className="w-full mt-2 text-text-primary">
                      <SelectValue
                        placeholder="Select a Language"
                        className="text-text-primary mt-2"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="english">Software</SelectItem>
                        <SelectItem value="spanish">Business</SelectItem>
                        <SelectItem value="german">HR</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col gap-10 md:flex-row justify-between">
                <div className=" w-full">
                  <p className="text-text-greyDark text-xs">Description</p>
                  <Textarea className="text-text-primary mt-2 placeholder:text-text-greyDark" />
                </div>
              </div>
              <Button className="relative mt-4 w-[200px] mx-auto rounded-xl bg-primary-dark px-4 py-2.5 text-sm font-semibold text-white shadow-md    transition duration-300 ease-in-out">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
