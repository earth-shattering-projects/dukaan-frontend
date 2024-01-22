import React from "react";

const RevenueCard = ({
  colored,
  extended,
  displayOrders,
  headerText,
  orderCount,
  amount,
  nextPaymentDate,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div
        className={
          colored
            ? "bg-sky-700 p-3 font-light text-white flex justify-start gap-2"
            : "flex justify-start gap-2 p-3 font-light"
        }
      >
        <div>{headerText}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
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
      <div
        className={
          colored
            ? "flex justify-between bg-sky-700 p-3 font-bold text-white"
            : "flex justify-between  p-3 font-bold"
        }
      >
        <div>
          <span>&#8377;</span>
          {amount}
        </div>
        {displayOrders ? (
          <div className="flex justify-between gap-1">
            <div
              className={
                colored ? "underline" : "underline text-blue-600 font-light"
              }
            >
              {orderCount} Orders
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
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

      {extended ? (
        <div className="flex justify-between bg-sky-800 p-3 font-light text-white">
          <div>Next Payment Date:</div>
          <div>{nextPaymentDate}</div>
        </div>
      ) : null}
    </div>
  );
};

export default RevenueCard;
