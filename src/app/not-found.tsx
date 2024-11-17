"use client";

import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/"); // Navigate to homepage
  };

  return (
    <div className="relative z-10 px-5 mx-auto max-w-[1300px] lg:px-0 flex items-center justify-center md:justify-normal flex-col min-h-[100vh]">
      <div className="px-5 space-y-5 flex items-center justify-center flex-col pt:36 md:pt-44">
        <Fade triggerOnce direction="up">
          <h1
            className="text-7xl text-center font-semibold bg-gradient-to-r from-primary-dark via-primary-main  bg-clip-text"
            style={{ lineHeight: "1.2" }}
          >
            404
          </h1>
        </Fade>
        <Fade triggerOnce direction="up">
          <h2 className="text-lg md:text-3xl text-subheading text-center font-semibold" style={{ lineHeight: "1.2" }}>
            Oops! This Page is Missing <br /> (We’re still working on it)
          </h2>
        </Fade>
        <Fade triggerOnce direction="up">
          <p className="mb-4 text-[16px] text-center font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.
          </p>
        </Fade>
        <Fade triggerOnce direction="up">
          <Button onClick={navigateToHome}>
            <div
              className={`inline-flex items-center flex-none rounded-md px-3 py-2 text-md font-[600] font-poppins ${"bg-accentColor hover:text-white text-primary-dark"}`}
            >
              Back to Homepage
            </div>
          </Button>
        </Fade>
      </div>
    </div>
  );
}
