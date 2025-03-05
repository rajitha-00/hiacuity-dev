type IconProps = {
  className?: string; // Optional className prop for custom styling
};
const ArrowRight: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);
const XMark: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);
const Clock: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
const Bolt: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
    />
  </svg>
);
const Glob: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
    />
  </svg>
);
const Call: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
    />
  </svg>
);
const TransForm: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
    />
  </svg>
);
const Approch: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
    />
  </svg>
);
const Modern: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);
const Ai: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
    />
  </svg>
);
const Users: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </svg>
);
const CheckMark: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
    />
  </svg>
);
const MegaPhone: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
    />
  </svg>
);
const MagnifyingGlass: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);
const Folder: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
    />
  </svg>
);
const ClipBoard: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
    />
  </svg>
);
const Speech: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
    />
  </svg>
);
const Bulb: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
    />
  </svg>
);
const Briefcase: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
    />
  </svg>
);
const Chart: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    />
  </svg>
);
const Foward: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
    />
  </svg>
);
const CutCall: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 3.75 18 6m0 0 2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
    />
  </svg>
);
const Filter: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
    />
  </svg>
);
const Gear: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
    />
  </svg>
);
const Hand: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
    />
  </svg>
);
const Rocket: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  </svg>
);
const HowItWorksHT: React.FC<IconProps> = () => (
  <svg
    width="1253"
    height="93"
    viewBox="0 0 1253 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden lg:block"
  >
    <g opacity="0.5" filter="url(#filter0_f_502_387)">
      <path
        d="M4 4L31.0883 46.5L4 89H180.871L207.959 46.5L180.871 4H4Z"
        fill="url(#paint0_linear_502_387)"
        fillOpacity="0.8"
      />
      <path
        d="M152.72 4L179.808 46.5L152.72 89H329.59L356.679 46.5L329.59 4H152.72Z"
        fill="url(#paint1_linear_502_387)"
        fillOpacity="0.8"
      />
      <path
        d="M301.44 4L328.529 46.5L301.44 89H478.311L505.399 46.5L478.311 4H301.44Z"
        fill="url(#paint2_linear_502_387)"
        fillOpacity="0.8"
      />
      <path
        d="M450.16 4L477.248 46.5L450.16 89H627.031L654.119 46.5L627.031 4H450.16Z"
        fill="url(#paint3_linear_502_387)"
        fillOpacity="0.8"
      />
      <path
        d="M598.881 4L625.969 46.5L598.881 89H775.752L802.84 46.5L775.752 4H598.881Z"
        fill="url(#paint4_linear_502_387)"
        fillOpacity="0.8"
      />
      <path
        d="M747.601 4L774.689 46.5L747.601 89H924.471L951.56 46.5L924.471 4H747.601Z"
        fill="url(#paint5_linear_502_387)"
        fillOpacity="0.8"
      />
      <path
        d="M896.32 4L923.409 46.5L896.32 89H1073.19L1100.28 46.5L1073.19 4H896.32Z"
        fill="url(#paint6_linear_502_387)"
        fillOpacity="0.8"
      />
      <path
        d="M1045.04 4L1072.13 46.5L1045.04 89H1221.91L1249 46.5L1221.91 4H1045.04Z"
        fill="url(#paint7_linear_502_387)"
        fillOpacity="0.8"
      />
    </g>
    <path
      d="M59 15.5L84.5 47.75L59 80H225.5L251 47.75L225.5 15.5H59Z"
      fill="url(#paint8_linear_502_387)"
      fillOpacity="0.8"
    />
    <path
      d="M199 15.5L224.5 47.75L199 80H365.5L391 47.75L365.5 15.5H199Z"
      fill="url(#paint9_linear_502_387)"
      fillOpacity="0.8"
    />
    <path
      d="M339 15.5L364.5 47.75L339 80H505.5L531 47.75L505.5 15.5H339Z"
      fill="url(#paint10_linear_502_387)"
      fillOpacity="0.8"
    />
    <path
      d="M479 15.5L504.5 47.75L479 80H645.5L671 47.75L645.5 15.5H479Z"
      fill="url(#paint11_linear_502_387)"
      fillOpacity="0.8"
    />
    <path
      d="M619 15.5L644.5 47.75L619 80H785.5L811 47.75L785.5 15.5H619Z"
      fill="url(#paint12_linear_502_387)"
      fillOpacity="0.8"
    />
    <path
      d="M759 15.5L784.5 47.75L759 80H925.5L951 47.75L925.5 15.5H759Z"
      fill="url(#paint13_linear_502_387)"
      fillOpacity="0.8"
    />
    <path
      d="M899 15.5L924.5 47.75L899 80H1065.5L1091 47.75L1065.5 15.5H899Z"
      fill="url(#paint14_linear_502_387)"
      fillOpacity="0.8"
    />
    <path
      d="M1039 15.5L1064.5 47.75L1039 80H1205.5L1231 47.75L1205.5 15.5H1039Z"
      fill="url(#paint15_linear_502_387)"
      fillOpacity="0.8"
    />
    <defs>
      <filter
        id="filter0_f_502_387"
        x="0"
        y="0"
        width="1253"
        height="93"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="2"
          result="effect1_foregroundBlur_502_387"
        />
      </filter>
      <linearGradient
        id="paint0_linear_502_387"
        x1="4"
        y1="46.5"
        x2="207.959"
        y2="46.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9F2DC" />
        <stop offset="1" stopColor="#7E8C7F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_502_387"
        x1="152.72"
        y1="46.5"
        x2="356.679"
        y2="46.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3AB451" />
        <stop offset="1" stopColor="#194E23" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_502_387"
        x1="301.44"
        y1="46.5"
        x2="505.399"
        y2="46.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#226048" />
        <stop offset="1" stopColor="#46C695" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_502_387"
        x1="450.16"
        y1="46.5"
        x2="654.119"
        y2="46.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#093725" />
        <stop offset="1" stopColor="#1A9D6A" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_502_387"
        x1="598.881"
        y1="46.5"
        x2="802.84"
        y2="46.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9F2DC" />
        <stop offset="1" stopColor="#7E8C7F" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_502_387"
        x1="747.601"
        y1="46.5"
        x2="951.56"
        y2="46.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3AB451" />
        <stop offset="1" stopColor="#194E23" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_502_387"
        x1="896.32"
        y1="46.5"
        x2="1100.28"
        y2="46.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#226048" />
        <stop offset="1" stopColor="#46C695" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_502_387"
        x1="1045.04"
        y1="46.5"
        x2="1249"
        y2="46.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#093725" />
        <stop offset="1" stopColor="#1A9D6A" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_502_387"
        x1="59"
        y1="47.75"
        x2="251"
        y2="47.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9F2DC" />
        <stop offset="1" stopColor="#7E8C7F" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_502_387"
        x1="199"
        y1="47.75"
        x2="391"
        y2="47.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3AB451" />
        <stop offset="1" stopColor="#194E23" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_502_387"
        x1="339"
        y1="47.75"
        x2="531"
        y2="47.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#226048" />
        <stop offset="1" stopColor="#46C695" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_502_387"
        x1="479"
        y1="47.75"
        x2="671"
        y2="47.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#093725" />
        <stop offset="1" stopColor="#1A9D6A" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_502_387"
        x1="619"
        y1="47.75"
        x2="811"
        y2="47.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9F2DC" />
        <stop offset="1" stopColor="#7E8C7F" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_502_387"
        x1="759"
        y1="47.75"
        x2="951"
        y2="47.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3AB451" />
        <stop offset="1" stopColor="#194E23" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_502_387"
        x1="899"
        y1="47.75"
        x2="1091"
        y2="47.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#226048" />
        <stop offset="1" stopColor="#46C695" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_502_387"
        x1="1039"
        y1="47.75"
        x2="1231"
        y2="47.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#093725" />
        <stop offset="1" stopColor="#1A9D6A" />
      </linearGradient>
    </defs>
  </svg>
);
const HowItWorksVT: React.FC<IconProps> = () => (
  <svg
    width="40"
    height="1253"
    viewBox="0 0 40 1253"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[30%] top-0 h-full w-auto -translate-x-[30%] lg:hidden md:block"
  >
    <g id="Group 1321323489">
      <g id="Group 1321323487" opacity="0.5" filter="url(#filter0_f_503_388)">
        <path
          id="Vector 3058"
          d="M89 4L46.5 31.0883L4 4L4 180.871L46.5 207.959L89 180.871L89 4Z"
          fill="url(#paint0_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3059"
          d="M89 152.72L46.5 179.808L4 152.72L4 329.59L46.5 356.679L89 329.59L89 152.72Z"
          fill="url(#paint1_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3060"
          d="M89 301.44L46.5 328.529L4 301.44L4 478.311L46.5 505.399L89 478.311L89 301.44Z"
          fill="url(#paint2_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3061"
          d="M89 450.16L46.5 477.248L4 450.16L4 627.031L46.5 654.119L89 627.031L89 450.16Z"
          fill="url(#paint3_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3062"
          d="M89 598.881L46.5 625.969L4 598.881L4 775.752L46.5 802.84L89 775.752L89 598.881Z"
          fill="url(#paint4_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3063"
          d="M89 747.601L46.5 774.689L4 747.601L4 924.471L46.5 951.56L89 924.471L89 747.601Z"
          fill="url(#paint5_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3064"
          d="M89 896.32L46.5 923.409L4 896.32L4 1073.19L46.5 1100.28L89 1073.19L89 896.32Z"
          fill="url(#paint6_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3065"
          d="M89 1045.04L46.5 1072.13L4 1045.04L4 1221.91L46.5 1249L89 1221.91L89 1045.04Z"
          fill="url(#paint7_linear_503_388)"
          fillOpacity="0.8"
        />
      </g>
      <g id="Group 1321323486">
        <path
          id="Vector 3058_2"
          d="M77.5 59L45.25 84.5L13 59L13 225.5L45.25 251L77.5 225.5L77.5 59Z"
          fill="url(#paint8_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3059_2"
          d="M77.5 199L45.25 224.5L13 199L13 365.5L45.25 391L77.5 365.5L77.5 199Z"
          fill="url(#paint9_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3060_2"
          d="M77.5 339L45.25 364.5L13 339L13 505.5L45.25 531L77.5 505.5L77.5 339Z"
          fill="url(#paint10_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3061_2"
          d="M77.5 479L45.25 504.5L13 479L13 645.5L45.25 671L77.5 645.5L77.5 479Z"
          fill="url(#paint11_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3062_2"
          d="M77.5 619L45.25 644.5L13 619L13 785.5L45.25 811L77.5 785.5L77.5 619Z"
          fill="url(#paint12_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3063_2"
          d="M77.5 759L45.25 784.5L13 759L13 925.5L45.25 951L77.5 925.5L77.5 759Z"
          fill="url(#paint13_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3064_2"
          d="M77.5 899L45.25 924.5L13 899L13 1065.5L45.25 1091L77.5 1065.5L77.5 899Z"
          fill="url(#paint14_linear_503_388)"
          fillOpacity="0.8"
        />
        <path
          id="Vector 3065_2"
          d="M77.5 1039L45.25 1064.5L13 1039L13 1205.5L45.25 1231L77.5 1205.5L77.5 1039Z"
          fill="url(#paint15_linear_503_388)"
          fillOpacity="0.8"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_503_388"
        x="0"
        y="0"
        width="93"
        height="1253"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="2"
          result="effect1_foregroundBlur_503_388"
        />
      </filter>
      <linearGradient
        id="paint0_linear_503_388"
        x1="46.5"
        y1="4"
        x2="46.5"
        y2="207.959"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9F2DC" />
        <stop offset="1" stopColor="#7E8C7F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_503_388"
        x1="46.5"
        y1="152.72"
        x2="46.5"
        y2="356.679"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3AB451" />
        <stop offset="1" stopColor="#194E23" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_503_388"
        x1="46.5"
        y1="301.44"
        x2="46.5"
        y2="505.399"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#226048" />
        <stop offset="1" stopColor="#46C695" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_503_388"
        x1="46.5"
        y1="450.16"
        x2="46.5"
        y2="654.119"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#093725" />
        <stop offset="1" stopColor="#1A9D6A" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_503_388"
        x1="46.5"
        y1="598.881"
        x2="46.5"
        y2="802.84"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9F2DC" />
        <stop offset="1" stopColor="#7E8C7F" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_503_388"
        x1="46.5"
        y1="747.601"
        x2="46.5"
        y2="951.56"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3AB451" />
        <stop offset="1" stopColor="#194E23" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_503_388"
        x1="46.5"
        y1="896.32"
        x2="46.5"
        y2="1100.28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#226048" />
        <stop offset="1" stopColor="#46C695" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_503_388"
        x1="46.5"
        y1="1045.04"
        x2="46.5"
        y2="1249"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#093725" />
        <stop offset="1" stopColor="#1A9D6A" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_503_388"
        x1="45.25"
        y1="59"
        x2="45.25"
        y2="251"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9F2DC" />
        <stop offset="1" stopColor="#7E8C7F" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_503_388"
        x1="45.25"
        y1="199"
        x2="45.25"
        y2="391"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3AB451" />
        <stop offset="1" stopColor="#194E23" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_503_388"
        x1="45.25"
        y1="339"
        x2="45.25"
        y2="531"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#226048" />
        <stop offset="1" stopColor="#46C695" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_503_388"
        x1="45.25"
        y1="479"
        x2="45.25"
        y2="671"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#093725" />
        <stop offset="1" stopColor="#1A9D6A" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_503_388"
        x1="45.25"
        y1="619"
        x2="45.25"
        y2="811"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D9F2DC" />
        <stop offset="1" stopColor="#7E8C7F" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_503_388"
        x1="45.25"
        y1="759"
        x2="45.25"
        y2="951"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3AB451" />
        <stop offset="1" stopColor="#194E23" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_503_388"
        x1="45.25"
        y1="899"
        x2="45.25"
        y2="1091"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#226048" />
        <stop offset="1" stopColor="#46C695" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_503_388"
        x1="45.25"
        y1="1039"
        x2="45.25"
        y2="1231"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#093725" />
        <stop offset="1" stopColor="#1A9D6A" />
      </linearGradient>
    </defs>
  </svg>
);
export {
  ArrowRight,
  XMark,
  Clock,
  Bolt,
  Glob,
  Call,
  TransForm,
  Approch,
  Modern,
  Ai,
  Users,
  CheckMark,
  MegaPhone,
  MagnifyingGlass,
  Folder,
  ClipBoard,
  Speech,
  Bulb,
  Briefcase,
  Chart,
  Foward,
  CutCall,
  Filter,
  Gear,
  Hand,
  Rocket,
  HowItWorksHT,
  HowItWorksVT,
};
