import React from "react";

const BillingPage2 = () => {
  return (
    <div className="flex mt-10 justify-center items-center ">
      <div className="w-full max-w-5xl">
        <div className="bg-white shadow-xl rounded-xl text-black">
          <div className="bg-[#2F80ED] text-white text-3xl py-10 px-20 flex justify-between rounded-t-xl">
            <h2>Item Name</h2>
            <h2>
              {" "}
              &#x20A6; <span className="text-3xl">Price</span>
            </h2>
          </div>
          <div className="bg-white">
            <div className="  text-gray-600 text-3xl py-10 px-20 flex justify-between ">
              <div className="flex space-y-10 text-3xl items-start flex-col">
                <h2>Data science and usability</h2>
                <h2>Shipping</h2>
              </div>
              <div className="flex space-y-10 text-3xl flex-col items-end ">
                <h2>50,000.00</h2>
                <h2>0.00</h2>
              </div>
            </div>
            <hr className="border-b-2 mx-10 mb-10 rounded-lg   border-gray-400" />
            <div className="mx-10  pb-10 ">
              <div className="border flex justify-between font-normal text-3xl px-5 mt-5 border-gray-300 w-full rounded-md py-4 px-4 focus:outline-none focus:ring focus:border-gray-500">
                <h2 className="text-gray-400">Total</h2>
                <h2 className="text-gray-600">50,000.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage2;
