import React from "react";
import Button from "./Button";

const ButtonPanel = () => {
  return (
    <div className="p-4 pt-1 flex text-sm">
      <Button displayText={"Payouts (22)"} />
      <Button type={"blue"} displayText={"Refunds (6)"} />
    </div>
  );
};

export default ButtonPanel;
