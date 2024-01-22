import React from "react";

const ButtonPanel = () => {
  return (
    <div className="flex p-5 pt-3 gap-5">
      <div className="rounded-2xl bg-gray-300 p-2">Payouts (221)</div>
      <div className="rounded-2xl bg-sky-600 p-2">Refunds (6)</div>
    </div>
  );
};

export default ButtonPanel;
