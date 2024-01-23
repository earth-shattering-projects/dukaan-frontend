import React from "react";

const SideBarSpecialButton = () => {
  return (
    <div className="flex gap-2 p-5 justify-between items-center">
      <div className="flex gap-2">
        <div>
          <img
            className="h-12 w-12"
            src="https://randomwordgenerator.com/img/picture-generator/54e7d043435ba914f1dc8460962e33791c3ad6e04e507441722872d5934dc2_640.jpg"
          />
        </div>
        <div>
          <div className="text-sm font-light p-1">Nishyan</div>
          <div className="text-xs underline font-thin p-1">Visit Store</div>
        </div>
      </div>
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
  );
};

export default SideBarSpecialButton;
