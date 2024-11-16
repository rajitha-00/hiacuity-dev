import { FiSearch } from "react-icons/fi";

export const Search = () => {
  return (
    <div className="flex  items-center bg-[rgba(255,255,255,0.3)] bg:blur-md rounded-full px-4 py-2 w-64">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none text-white placeholder-white w-full"
      />
      <FiSearch className="text-white text-xl" />
    </div>
  );
};
