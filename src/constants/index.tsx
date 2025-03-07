import FacebookIcon from "../icons/FacebookIcon.svg";
import TwitterIcon from "../icons/TwitterIcon.svg";
import InstaIcon from "../icons/IntagramIcon.svg";
import YotubeIcon from "../icons/YoutubeIcon.svg";
import JobPostingsSVG from "../assets/homepage/Job Posting.svg";
import ApplicantAnalizeSVG from "../assets/homepage/Applicant Analysis.svg";
import AutoSuitabilitySVG from "../assets/homepage/Auto Suitability.svg";
import AutoOutstandingSVG from "../assets/homepage/Auto Outstanding.svg";
import AutoAssesmentSVG from "../assets/homepage/Auto Assessments.svg";
import FasterHiringSVG from "../assets/homepage/Faster Hiring, Better Results.svg";
import Step1 from "../assets/images/step1.jpg";
import Step2 from "../assets/images/step2.png";
import Step3 from "../assets/images/step3.png";
import Step4 from "../assets/images/step4.jpg";
import Step5 from "../assets/images/step5.jpg";
import {
  Ai,
  Approch,
  Bolt,
  Call,
  Clock,
  Glob,
  Modern,
  TransForm,
  Foward,
  CutCall,
  Filter,
  Gear,
  Hand,
  Rocket,
  CheckMark,
  MegaPhone,
  MagnifyingGlass,
  Folder,
  ClipBoard,
  Speech,
  Bulb,
  Briefcase,
} from "@/icons/Icons";
import {
  Coins,
  FilterIcon,
  User,
  SortAsc,
  Pin,
  Medal,
  User2,
  AlertCircle,
  Lightbulb,
  ChartArea,
  Search,
  AlertTriangle,
  Trophy,
  BookUser,
  RocketIcon,
  ClipboardCheck,
  BarChart,
  UserCheck,
  Clock1,
  Target,
  Plug,
} from "lucide-react";
import AssementsWhats from "../assets/images/AssementsWhats.png";
import { StaticImageData } from "next/image";
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
    question:
      "Is it possible to track the status of each application in real-time?",
    answer:
      "Absolutely. Our system provides a real-time application tracker that lets you monitor every step of the hiring process, from submission to onboarding, ensuring transparency and efficiency.",
  },
  {
    question:
      "What kind of analytics and reporting does the application offer?",
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
    description:
      "We uphold the highest standards of honesty and ethics in all our operations and interactions.",
    icon: <Approch className="text-white" />,
  },
  {
    title: "AI Driven",
    description:
      "We are committed to continuous improvement and the pursuit of groundbreaking AI solutions.",
    icon: <Ai className="text-white" />,
  },
  {
    title: "Transformational",
    description:
      "We believe in the power of teamwork and partnerships to achieve common goals.",
    icon: <TransForm className="text-white" />,
  },
  {
    title: "Modern",
    description:
      "We strive for excellence in everything we do, ensuring quality and reliability in our AI-powered services and products.",
    icon: <Modern className="text-white" />,
  },
];
export const CONTACT_US = [
  {
    index: 1,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available 24/7 to address your inquiries and resolve issues promptly.",
    icon: <Clock className="text-primary-light w-36 h-36" />,
  },
  {
    index: 2,
    title: "Quick Response",
    description:
      "We prioritize efficiency and strive to provide quick responses to your requests.",
    icon: <Bolt className="text-primary-light w-36 h-36" />,
  },
  {
    index: 3,
    title: "Multiple Channels",
    description:
      "Reach out to us through your preferred channel: email, phone, or live chat",
    icon: <Glob className="text-primary-light w-36 h-36" />,
  },
  {
    index: 4,
    title: "Expert Guidance",
    description:
      "Our experienced team is well-versed in our products and services, ready to provide expert advice.",
    icon: <Call className="text-primary-light w-36 h-36" />,
  },
];
export const JOB_OPENINGS_FETURED = [
  {
    index: 1,
    title: "Hire Top Talent Faster ",
    description: "Speed up your hiring process.",
    icon: <Foward className="text-primary-main w-36 h-36" />,
  },
  {
    index: 2,
    title: "Cut Screening Calls",
    description: "Focus only on the best candidates.",
    icon: <CutCall className="text-primary-main w-36 h-36" />,
  },
  {
    index: 3,
    title: "Eliminate Unfit Candidates Quickly",
    description: "No more wasted time.",
    icon: <Filter className="text-primary-main w-36 h-36" />,
  },
  {
    index: 4,
    title: "Automate Admin Tasks",
    description: "Reduce manual effort.",
    icon: <Gear className="text-primary-main w-36 h-36" />,
  },
  {
    index: 5,
    title: "Enhance Candidate Experience",
    description: "Make hiring seamless.",
    icon: <Hand className="text-primary-main w-36 h-36" />,
  },
  {
    index: 6,
    title: "Boost Recruiter Efficiency",
    description: "Work smarter, not harder.",
    icon: <Rocket className="text-primary-main w-36 h-36" />,
  },
];
export const JOB_OPENINGS_WHAT_SET_US_APART = [
  {
    index: 1,
    title: "Job Posting",
    description:
      "One-click applications eliminate form-filling. AI extracts details instantly and reads every resume for the perfect match.",
    url: JobPostingsSVG,
  },
  {
    index: 2,
    title: "Applicant Analysis",
    description:
      "Analyze thousands of applicants in one view. AI-powered filtering, keyword matching, and 3D clustering refine selections effortlessly.",
    url: ApplicantAnalizeSVG,
  },
  {
    index: 3,
    title: "Auto Suitability",
    description:
      "AI identifies qualified candidates instantly and notifies unsuccessful applicants with optional rejection reasons.",
    url: AutoSuitabilitySVG,
  },
  {
    index: 4,
    title: "Auto Outstanding",
    description:
      "Spot top talent the moment they apply. Engage, interview, and hire outstanding candidates before competitors do.",
    url: AutoOutstandingSVG,
  },
  {
    index: 5,
    title: "Auto Assessments",
    description:
      "Validate skills with AI-generated tests. Build assessments in seconds and shortlist the most qualified candidates.",
    url: AutoAssesmentSVG,
  },
  {
    index: 6,
    title: "Smart Interviews",
    description:
      "Analyse whole interviews within minutes, automatically score and compare each candidate in an interview round.",
    url: FasterHiringSVG,
  },
];
export const BLOG_DATA = [
  {
    id: 1,
    imageSrc:
      "https://www.hiacuity.com/static/media/HiAcuity_Partner-Assessment.72492ec97213588b32fa.png",
    title: "The Future of Artificial Intelligence",
    date: "November 25, 2024",
    shares: 1200,
    description:
      "Explore how AI is transforming industries, from healthcare to finance, and what lies ahead in the era of machine learning.",
  },
  {
    id: 2,
    imageSrc:
      "https://www.hiacuity.com/static/media/HiAcuity_Partner-Assessment.72492ec97213588b32fa.png",
    title: "Top 10 Destinations for 2025",
    date: "December 10, 2024",
    shares: 850,
    description:
      "Discover the most breathtaking travel destinations you must visit in 2025 and tips to make the most of your journey.",
  },
  {
    id: 3,
    imageSrc:
      "https://www.hiacuity.com/static/media/HiAcuity_Partner-Assessment.72492ec97213588b32fa.png",
    title: "5 Simple Tips for a Healthier Lifestyle",
    date: "October 15, 2024",
    shares: 500,
    description:
      "Learn easy and effective ways to incorporate fitness and wellness into your daily routine without drastic changes.",
  },
  {
    id: 4,
    imageSrc:
      "https://www.hiacuity.com/static/media/HiAcuity_Partner-Assessment.72492ec97213588b32fa.png",
    title: "Mastering the Art of Home Cooking",
    date: "September 20, 2024",
    shares: 680,
    description:
      "A step-by-step guide to cooking delicious meals at home with simple recipes and pro tips from chefs.",
  },
  {
    id: 5,
    imageSrc:
      "https://www.hiacuity.com/static/media/HiAcuity_Partner-Assessment.72492ec97213588b32fa.png",
    title: "How to Save Money on a Tight Budget",
    date: "August 5, 2024",
    shares: 1100,
    description:
      "Practical advice on managing your finances, cutting unnecessary expenses, and building savings for the future.",
  },
  {
    id: 6,
    imageSrc:
      "https://www.hiacuity.com/static/media/HiAcuity_Partner-Assessment.72492ec97213588b32fa.png",
    title: "Web Development Trends for 2025",
    date: "November 1, 2024",
    shares: 950,
    description:
      "Stay ahead in the tech world with the latest trends in web development, from AI integration to new frameworks.",
  },
  {
    id: 7,
    imageSrc:
      "https://www.hiacuity.com/static/media/HiAcuity_Partner-Assessment.72492ec97213588b32fa.png",
    title: "The Evolution of Online Learning",
    date: "July 30, 2024",
    shares: 670,
    description:
      "How online education platforms are shaping the future of learning and providing accessible education for everyone.",
  },
  {
    id: 8,
    imageSrc:
      "https://www.hiacuity.com/static/media/HiAcuity_Partner-Assessment.72492ec97213588b32fa.png",
    title: "Minimalism: Living with Less",
    date: "June 10, 2024",
    shares: 740,
    description:
      "Discover the benefits of a minimalist lifestyle and how it can lead to more happiness and less stress.",
  },
];
export type UserType = "candidates" | "employees" | "partners";

export const USER_TYPE: Record<
  UserType,
  {
    label: string;
    featureTitle: string;
    description: string;
    url: StaticImageData;
    benefits: { point: string; icon: JSX.Element }[];
    whyUseTitle?: string;
    whyUseURL?: StaticImageData;
    whyFeaturedOn?: {
      point: string;
      pointDescription: string;
      icon: JSX.Element;
    }[];
  }
> = {
  candidates: {
    label: "Candidates",
    featureTitle: "Smarter Hiring, Faster Results",
    url: AssementsWhats,
    description:
      "Hiring delays cost businesses time and money. Our assessments eliminate unqualified candidates, reduce time-to-hire, and ensure only the best talent moves forward.",
    benefits: [
      { point: "Cut hiring time from 25+ days.", icon: <Coins size={24} /> },
      {
        point: "Filter out time-wasting candidates.",
        icon: <FilterIcon size={24} />,
      },
      { point: "Identify high-potential talent.", icon: <User size={24} /> },
    ],
    whyUseTitle: "Featured On",
    whyUseURL: AssementsWhats,
    whyFeaturedOn: [
      {
        point: "Time-Saving Process",
        pointDescription: "Reduce manual screening efforts.",
        icon: <Clock1 size={24} />,
      },
      {
        point: "Objective Evaluation",
        pointDescription: "Eliminate bias with data-driven insights.",
        icon: <Target size={24} />,
      },
      {
        point: "Seamless Integration",
        pointDescription: "Easily fits into your hiring workflow.",
        icon: <Plug size={24} />,
      },
      {
        point: "Instant Skill Assessment",
        pointDescription: "Quickly evaluate candidates' abilities.",
        icon: <BarChart size={24} />,
      },
      {
        point: "Automated Ranking",
        pointDescription: "Rank applicants based on their skills.",
        icon: <SortAsc size={24} />,
      },
      {
        point: "Smart Shortlisting",
        pointDescription: "Identify top talent with accuracy.",
        icon: <UserCheck size={24} />,
      },
    ],
  },
  employees: {
    label: "Employees",
    featureTitle: "Elevating Employee Performance",
    url: AssementsWhats,
    description:
      "Traditional performance reviews are biased and outdated. Regular, objective assessments help employees stay sharp, track their growth, and stay motivated through KPI-driven evaluations.",
    benefits: [
      { point: "Keep skills sharp.", icon: <Lightbulb size={24} /> },
      {
        point: "Identify top & bottom performers.",
        icon: <SortAsc size={24} />,
      },
      {
        point: "Pinpoint areas for employee development.",
        icon: <Pin size={24} />,
      },
    ],
    whyUseTitle: "Featured On",
    whyUseURL: AssementsWhats,
    whyFeaturedOn: [
      {
        point: "Nurture High Achievers",
        pointDescription: "Support top performers.",
        icon: <Trophy size={24} />,
      },
      {
        point: "Foster Continuous Learning",
        pointDescription: "Encourage ongoing skill development.",
        icon: <BookUser size={24} />,
      },
      {
        point: "Drive Growth",
        pointDescription: "Enhance team efficiency and productivity.",
        icon: <RocketIcon size={24} />,
      },
      {
        point: "Skill Tracking",
        pointDescription: "Monitor employee skill development.",
        icon: <ChartArea size={24} />,
      },
      {
        point: "Skill Comparison",
        pointDescription: "Compare competencies across teams.",
        icon: <Search size={24} />,
      },
      {
        point: "Identify Skill Gaps",
        pointDescription: "Detect and address weaknesses.",
        icon: <AlertTriangle size={24} />,
      },
    ],
  },
  partners: {
    label: "Partners",
    featureTitle: "Strengthening Partner Networks",
    url: AssementsWhats,
    description:
      "Business partners drive success, but assessing their expertise is time-consuming. Our automated competency evaluations ensure you work with only the best partners, reducing risk and boosting performance.",
    benefits: [
      { point: "Ensure partner credibility.", icon: <Medal size={24} /> },
      { point: "Work with top-tier experts.", icon: <User2 size={24} /> },
      { point: "Reduce project risks.", icon: <AlertCircle size={24} /> },
    ],
    whyUseTitle: "Featured on",
    whyUseURL: AssementsWhats,
    whyFeaturedOn: [
      {
        point: "Nurture High Achievers",
        pointDescription: "Support top performers.",
        icon: <Trophy size={24} />,
      },
      {
        point: "Foster Continuous Learning",
        pointDescription: "Encourage ongoing skill development.",
        icon: <BookUser size={24} />,
      },
      {
        point: "Vendor Assessment",
        pointDescription:
          "Evaluate contractors and partners for better collaboration.",
        icon: <ClipboardCheck size={24} />,
      },
      {
        point: "Skill Tracking",
        pointDescription: "Monitor employee skill development.",
        icon: <ChartArea size={24} />,
      },
      {
        point: "Skill Comparison",
        pointDescription: "Compare competencies across teams and vendors.",
        icon: <Search size={24} />,
      },
      {
        point: "Identify Skill Gaps",
        pointDescription: "Detect and address weaknesses.",
        icon: <AlertTriangle size={24} />,
      },
    ],
  },
};
interface Reason {
  title: string;
  description?: string;
}

export const reasons: Reason[] = [
  {
    title: "Speed",
  },
  {
    title: "Insightful",
  },
  {
    title: "Scalable",
  },
  {
    title: "Objective",
  },
];
export const STEPS = [
  {
    number: "01",
    text: "Job Request Approved",
    icon: <CheckMark className="text-primary-dark" />,
  },
  {
    number: "02",
    text: "Job Posting",
    icon: <MegaPhone className="text-primary-dark" />,
  },
  {
    number: "03",
    text: "Analyze Applicants",
    icon: <MagnifyingGlass className="text-primary-dark" />,
  },
  {
    number: "04",
    text: "Short List Applicants",
    icon: <Folder className="text-primary-dark" />,
  },
  {
    number: "05",
    text: "Skills Assessment",
    icon: <ClipBoard className="text-primary-dark" />,
  },
  {
    number: "06",
    text: "Smart Interviews",
    icon: <Speech className="text-primary-dark" />,
  },
  {
    number: "07",
    text: "Make Decision",
    icon: <Bulb className="text-primary-dark" />,
  },
  {
    number: "08",
    text: "Offer Job",
    icon: <Briefcase className="text-primary-dark" />,
  },
];
export const FLOW_STEPS = [
  {
    id: 1,
    title: "Assessment Creation",
    url: Step1,
    description:
      "Easily design customized skill assessments tailored to your organization’s needs. Choose from a library of pre-built tests or create your own with multiple question formats, including multiple-choice, coding challenges, video responses, and more.",
  },
  {
    id: 2,
    title: "Invite Candidates",
    url: Step2,
    description:
      "Invite candidates to take the assessment via email, SMS, or a unique link. Candidates can complete the assessment on any device, at any time, and from anywhere.",
  },
  {
    id: 3,
    title: "Assessment Done by Candidates",
    url: Step3,
    description:
      "Candidates complete the assessment, and their responses are automatically scored and analyzed by our AI-powered platform.",
  },
  {
    id: 4,
    title: "AI Scoring",
    url: Step4,
    description:
      "Our AI-powered platform scores and analyzes candidate responses, providing you with detailed insights into their skills and abilities.",
  },
  {
    id: 5,
    title: "Results & Analytics",
    url: Step5,
    description:
      "View detailed results and analytics for each candidate, including overall scores, performance on individual questions, and comparative data to help you make informed hiring decisions.",
  },
];
