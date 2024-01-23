import React from "react";

const AppBarButton = ({ type }) => {
  return (
    <div
      className="w-6 h-6 rounded-full 
                       bg-gray-500 hover:bg-blue-500 text-white cursor-pointer"
    >
      <div className="flex justify-center">{type}</div>
    </div>
  );
};

export default AppBarButton;
