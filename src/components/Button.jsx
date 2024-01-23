import React from "react";

const Button = ({ type, displayText }) => {
  return (
    <div
      className={
        type === "blue"
          ? "mr-2 rounded-full bg-lightBlue p-2 text-white"
          : "mr-2 rounded-full bg-gray-300 p-2 text-gray-700"
      }
    >
      {displayText}
    </div>
  );
};

export default Button;
