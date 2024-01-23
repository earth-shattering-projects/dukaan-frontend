import React from "react";

const RevenueCard = ({ extended, orderCount, headerText }) => {
  return (
    <div
      className={
        extended
          ? "bg-lightBlue rounded-lg m-2 shadow-sm"
          : "bg-white rounded-lg m-2 shadow-sm"
      }
    >
      <div
        className={
          extended
            ? "p-4 pb-2 flex text-white gap-2 font-light text-lg"
            : "p-4 pb-2 flex gap-2 font-light text-lg text-gray-500"
        }
      >
        <div>{headerText}</div>
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
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>
      <div className="p-4 pt-2 flex justify-between">
        <div
          className={
            extended
              ? "flex font-medium text-white text-3xl"
              : "flex font-medium text-3xl"
          }
        >
          <div>
            <span>&#8377;</span>
          </div>
          <div>2,312.23</div>
        </div>
        <div
          className={
            extended
              ? "flex font-light text-white underline"
              : "flex font-light text-lightBlue underline"
          }
        >
          <div>{orderCount ? `${orderCount} orders` : null}</div>
          {orderCount ? (
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          ) : null}
        </div>
      </div>
      {extended ? (
        <div className="bg-darkBlue rounded-lg pl-4 pt-2 pb-1 pr-4 flex justify-between text-white text-sm">
          <div className="font-thin">Next Payout date:</div>
          <div className="font-light">Today, 04:00PM</div>
        </div>
      ) : null}
    </div>
  );
};

export default RevenueCard;
