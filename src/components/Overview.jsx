import React from "react";

const Overview = () => {
  return (
    <div className="p-4 pt-6 pb-6 font-medium text-lg flex justify-between">
      <div>Overview</div>
      <div className="flex text-xs text-gray-400 gap- bg-white p-1 items-center border-gray border-2 font-normal">
        <div>This Month</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Overview;
