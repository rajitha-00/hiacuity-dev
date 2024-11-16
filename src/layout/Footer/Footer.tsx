import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FOLLOW_US, SERVICES } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="justify-center items-center mt-40 bg-[#1B1D21] z-20">
      <div className=" w-full py-8 mx-auto px-10 max-w-[1600px] ">
        <div className="flex flex-row flex-wrap justify-between gap-10 py-10">
          <div className="flex flex-col gap-5 max-w-lg">
            <Image
              alt="HiAcuity Logo"
              src="https://www.hiacuity.com/static/media/logo%20Main%202.9982694dad756def5917.png"
              width={200}
              height={200}
              className="md:w-52 w-40"
            />
            <p className="text-white text-sm  ">
              The proper Footer on proper time can preserve you protection. We assist you make sureeverybody forward.
            </p>
            <div className="flex flex-row gap-5 ">
              {FOLLOW_US.map((item) => (
                <div className="py-2" key={item.name}>
                  <Link href={item.url} target="_blank">
                    <div className="row flex items-center hover:text-primary-main">
                      <div className="col">
                        <Image
                          alt={item.name}
                          className="text-white text-sm hover:text-primary-main"
                          src={item.iconSrc}
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-10">
            <div className="w-[250px] flex flex-col gap-5">
              <p className="text-primary-main font-Inter font-[600]">Services</p>
              <div>
                {SERVICES.map((item) => (
                  <div className="py-1" key={item.name}>
                    <Link href={item.url} className="text-white text-sm font-inter py-1">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* Stay Connected */}
            <div className="max-w-lg flex flex-col gap-5">
              <p className="text-primary-main font-inter font-[600]">News Letters</p>
              <div className="flex flex-col gap-5">
                <div className="flex">
                  <Input type="email" placeholder="Email" className="text-white placeholder:text-white" />
                  <Button className="bg-primary-light text-primary-dark">Request Demo</Button>
                </div>

                <p className="text-white text-sm  text-justify">
                  Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our
                  latest products, special promotions, and exciting updates. Join our community of like-minded
                  individuals who share a passion for [your niche/industry].
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center border-t-[0.5px] border-gray-600 py-2 justify-center">
        <div className="">
          <p key={20} className="text-white text-xs font-inter px-10 text-center">
            © 2024 HiAcuity | Empowering Minds Globally
          </p>
        </div>
      </div>
    </div>
  );
};
