import React from "react";
import SideBarButton from "./SideBarButton";
import SideBarSpecialButton from "./SideBarSpecialButton";

const SideBar = () => {
  return (
    <div className="flex flex-col text-white justify-between">
      <div>
        <SideBarSpecialButton />
        <SideBarButton name={"Home"} />
        <SideBarButton name={"Orders"} />
        <SideBarButton name={"Products"} />
        <SideBarButton name={"Delivery"} />
        <SideBarButton name={"Marketing"} />
        <SideBarButton name={"Analytics"} />
        <SideBarButton name={"Payouts"} />
        <SideBarButton name={"Discount"} />
        <SideBarButton name={"Audience"} />
        <SideBarButton name={"Appearance"} />
        <SideBarButton name={"Plugins"} />
      </div>
      <div className="grid grid-cols-12 bg-sideBarHighlightGray m-2 p-3 text-sm font-thin items-center">
        <div className="col-span-3">
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
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </div>
        <div className="col-span-9">
          <div>Available credits</div>
          <div>221.10</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
