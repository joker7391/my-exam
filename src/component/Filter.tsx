import React from "react";

interface FilterProps {
  setFilter: (status: "All" | "Pending" | "In Progress" | "Completed") => void;
}

const Filter: React.FC<FilterProps> = ({ setFilter }) => {
  return (
    <div className="py-5 flex gap-2 lg:gap-5">
      <button
        className="bg-slate-500 font-semibold p-1 lg:p-2 mb-5 rounded-md text-white text-sm lg:text-xl"
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        className="bg-slate-500 font-semibold p-1 lg:p-2 mb-5 rounded-md text-white text-sm lg:text-xl"
        onClick={() => setFilter("Pending")}
      >
        Pending
      </button>
      <button
        className="bg-slate-500 font-semibold p-1 lg:p-2 mb-5 rounded-md text-white text-sm lg:text-xl"
        onClick={() => setFilter("In Progress")}
      >
        In Progress
      </button>
      <button
        className="bg-slate-500 font-semibold p-1 lg:p-2 mb-5 rounded-md text-white text-sm lg:text-xl"
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
