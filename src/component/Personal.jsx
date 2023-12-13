import React from "react";

const Personal = () => {
  return (
    <>
      <div className="mt-5 font-product">
        <div className="flex flex-col text-black  justify-start">
          <div className="flex font-product justify-start">
            <label className="text-3xl">Name</label>
          </div>
          <input
            className="border font-normal pl-7 text-3xl mt-5 border-gray-300 w-full rounded-lg py-5 px-5 focus:outline-none focus:ring focus:border-gray-500"
            type="text"
            placeholder="Opara Linus Ahmed"
          />
          <div className="flex font-product justify-start mt-5">
            <label className="text-3xl">
              Email Address
              <span className="text-red-500 ml-3 text-xl ">*</span>
            </label>
          </div>
          <div>
            <p className="flex justify-start my-2 text-gray-500  text-base">
              The purchase receipt would be sent to this address
            </p>
          </div>
          <input
            required
            className="border font-normal pl-7 text-3xl mt-5 border-gray-300 w-full rounded-lg py-5 px-5 focus:outline-none focus:ring focus:border-gray-500"
            type="email"
            placeholder="OparaLinusAhmed@devmail.com"
          />
          <div className="flex mt-5 justify-start">
            <label className="text-3xl">Address 1</label>
          </div>
          <input
            className="border font-normal pl-7 text-3xl mt-5 border-gray-300 w-full rounded-lg py-5 px-5 focus:outline-none focus:ring focus:border-gray-500"
            type="text"
            placeholder="The address of the user goes here"
          />
          <div className="flex mt-5 justify-start">
            <label className="text-3xl">Address 2</label>
          </div>
          <input
            className="border font-normal pl-7 text-3xl mt-5 border-gray-300 w-full rounded-lg py-5 px-5 focus:outline-none focus:ring focus:border-gray-500"
            type="text"
            placeholder="and here"
          />
          <div className="flex gap-5  mt-5 items-center">
            <div>
              <div className="flex  justify-start">
                <label className="text-3xl">Country</label>
              </div>
              <input
                className="border font-normal pl-7 text-3xl mt-5 border-gray-300 w-full rounded-lg py-5 px-5 focus:outline-none focus:ring focus:border-gray-500"
                type="text"
                placeholder="Nigeria"
              />
            </div>
            <div className="">
              <div className="flex  justify-start">
                <label className="text-3xl">State</label>
              </div>
              <select className="border font-normal pl-7 text-3xl mt-5 border-gray-300 w-full rounded-lg py-5 px-5 focus:outline-none focus:ring focus:border-gray-500">
                <option value="">Select a state</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="kano">Kano</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
