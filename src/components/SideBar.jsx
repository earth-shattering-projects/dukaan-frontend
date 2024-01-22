import React from "react";

const SideBar = () => {
  return (
    <div className="bg-blue-700 h-screen">
      <div className="flex justify-between">
        <div className="flex p-2 gap-2">
          <div>
            <img
              className="h-12 w-12"
              src="https://randomwordgenerator.com/img/picture-generator/57e7d1474d5bac14f1dc8460962e33791c3ad6e04e50744172297cd5914cc7_640.jpg"
            />
          </div>
          <div>
            <div className="text-sm">
              <div className="pb-2 pt-1">Nishyan</div>
              <div>Visit store</div>
            </div>
          </div>
        </div>
        <div className="p-2 pt-4">
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
      <div>Home</div>
      <div>Orders</div>
      <div>Products</div>
      <div>Delivery</div>
      <div>Marketing</div>
      <div>Analytics</div>
      <div>Payouts</div>
      <div>Discounts</div>
      <div>Audience</div>
      <div>Appearance</div>
      <div>Plugins</div>
    </div>
  );
};

export default SideBar;
