"use client";
import { useState } from "react";

const ToggleSwitch = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex mt-28 w-5/6 mx-32 justify-between">
        <h2 className="text-5xl text-black font-bold">
          Get the right plan <br /> for future product.
        </h2>
        <div className="flex items-center justify-center p-6">
          <div className="relative inline-block w-80">
            <div className="flex justify-between items-center font-bold rounded-xl bg-gray-200  p-1">
              <button
                className={`${
                  isYearly ? "bg-indigo-500 text-white" : "text-gray-800"
                } flex-1  py-4 transition-all rounded-l-xl duration-300`}
                onClick={handleToggle}
              >
                Yearly
              </button>{" "}
              <button
                className={`${
                  !isYearly ? "bg-indigo-500 text-white" : "text-gray-800"
                } flex-1  py-4 transition-all rounded-r-xl duration-300`}
                onClick={handleToggle}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToggleSwitch;