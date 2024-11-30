"use client";
import { Fade } from "react-awesome-reveal";
import { Button } from "../ui/button";

interface IBecomeATeamMember {
  title: string;
  description: string;
  buttonLable: string;
}

export const BecomeATeamMember = (props: IBecomeATeamMember) => {
  const { title, description, buttonLable } = props;
  return (
    <Fade triggerOnce delay={100}>
      <div
        className="text-center w-full py-16 px-20 rounded-3xl"
        style={{ background: "linear-gradient(135deg, #031602 0%, #194D1F 50%, #194D1F 100%)" }}
      >
        <Fade triggerOnce delay={200}>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-light">{title}</h2>
        </Fade>
        <Fade triggerOnce delay={300}>
          <p className="text-white mt-3">{description}</p>
        </Fade>{" "}
        <Fade triggerOnce delay={400}>
          <Button className="text-text-title mt-3">{buttonLable}</Button>
        </Fade>
      </div>
    </Fade>
  );
};
