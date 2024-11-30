import FacebookIcon from "../icons/FacebookIcon.svg";
import TwitterIcon from "../icons/TwitterIcon.svg";
import InstaIcon from "../icons/IntagramIcon.svg";
import YotubeIcon from "../icons/YoutubeIcon.svg";
import { Ai, Approch, Bolt, Call, Clock, Glob, Modern, TransForm } from "@/icons/Icons";

export const FAQ = [
  {
    question: "How does the automated screening feature work?",
    answer:
      "Our automated screening feature leverages advanced AI algorithms to analyze resumes and match candidates to your requirements. By setting your own criteria, the system identifies the most qualified candidates efficiently, saving you the time and effort of manual sorting.",
  },
  {
    question: "Can I customize the job posting templates?",
    answer:
      "Yes! Our platform allows you to fully customize job posting templates. You can tailor them to reflect your company’s branding and include role-specific requirements to attract the ideal candidates.",
  },
  {
    question: "Is it possible to track the status of each application in real-time?",
    answer:
      "Absolutely. Our system provides a real-time application tracker that lets you monitor every step of the hiring process, from submission to onboarding, ensuring transparency and efficiency.",
  },
  {
    question: "What kind of analytics and reporting does the application offer?",
    answer:
      "Our platform delivers in-depth analytics and reporting, including metrics on candidate sources, time-to-hire, and application trends. These insights empower you to make data-driven decisions and optimize your hiring process.",
  },
];

export const FOLLOW_US = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    iconSrc: FacebookIcon,
  },
  {
    name: "Youtube",
    url: "https://youtube.com",
    iconSrc: YotubeIcon,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    iconSrc: TwitterIcon,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    iconSrc: InstaIcon,
  },
];
export const SERVICES = [
  { name: "Solutions", url: "#" },
  { name: "Blog", url: "#" },
  { name: "Selling ", url: "#" },
  { name: "Contact Us", url: "#" },
  { name: "Music & Audio", url: "#" },
  { name: "About Us", url: "#" },
];
export const OUR_VALUES = [
  {
    title: "Approachable",
    description: "We uphold the highest standards of honesty and ethics in all our operations and interactions.",
    icon: <Approch className="text-primary-light" />,
  },
  {
    title: "AI Driven",
    description: "We are committed to continuous improvement and the pursuit of groundbreaking AI solutions.",
    icon: <Ai className="text-primary-light" />,
  },
  {
    title: "Transformational",
    description: "We believe in the power of teamwork and partnerships to achieve common goals.",
    icon: <TransForm className="text-primary-light" />,
  },
  {
    title: "Modern",
    description:
      "We strive for excellence in everything we do, ensuring quality and reliability in our AI-powered services and products.",
    icon: <Modern className="text-primary-light" />,
  },
];
export const CONTACT_US = [
  {
    index: 1,
    title: "24/7 Support",
    description: "Our dedicated support team is available 24/7 to address your inquiries and resolve issues promptly.",
    icon: <Clock className="text-primary-light w-36 h-36" />,
  },
  {
    index: 2,
    title: "Quick Response",
    description: "We prioritize efficiency and strive to provide quick responses to your requests.",
    icon: <Bolt className="text-primary-light w-36 h-36" />,
  },
  {
    index: 3,
    title: "Multiple Channels",
    description: "Reach out to us through your preferred channel: email, phone, or live chat",
    icon: <Glob className="text-primary-light w-36 h-36" />,
  },
  {
    index: 4,
    title: "Expert Guidance",
    description: "Our experienced team is well-versed in our products and services, ready to provide expert advice.",
    icon: <Call className="text-primary-light w-36 h-36" />,
  },
];
