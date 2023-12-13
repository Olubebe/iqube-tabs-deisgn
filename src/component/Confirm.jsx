import React from "react";
import Checked from "../assets/Group 108.png";

const Confirm = () => {
  return (
    <div className="flex mt-10 justify-center items-center">
      <div className="w-full py-10 px-20 max-w-5xl bg-white flex flex-col justify-center items-center shadow-xl rounded-xl text-black">
        <img src={Checked} alt="check" />
        <div className="space-y-5 p-6 text-center">
          <h2 className="text-purple text-5xl font-semibold">
            Purchase Completed
          </h2>
          <p className="text-2xl text-start max-w-sm">
            Please check your email for details concerning this transaction
          </p>
          <p className="underline underline-offset-1  max-w-sm text-start text-2xl text-customOrange cursor-pointer">
            Return Home
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
