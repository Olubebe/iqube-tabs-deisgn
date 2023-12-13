import React, { useState } from "react";

const Billing = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  const handleCardNumberChange = (e) => {
    let formattedValue = e.target.value.replace(/[^\d]/g, "");
    formattedValue = formattedValue.replace(/(.{4})/g, "$1 ");
    setCardNumber(formattedValue);
  };

  const handleExpiryDateChange = (e) => {
    let formattedValue = e.target.value.replace(/[^\d]/g, "");
    formattedValue = formattedValue.replace(/(^\d{2})(\d{2})/, "$1/$2");
    setExpiryDate(formattedValue);
  };

  const handleCVVChange = (e) => {
    let formattedValue = e.target.value.replace(/[^\d]/g, "");
    formattedValue = formattedValue.slice(0, 3);
    setCVV(formattedValue);
  };
  return (
    <div className="mt-5 font-product">
      <div className="flex flex-col text-black  justify-start">
        <div className="flex font-product justify-start">
          <label className="text-3xl font-semibold ">
            Name on Card <span className="text-red-500 ml-3 text-xl ">*</span>{" "}
          </label>
        </div>
        <input
          className="border pl-7 font-normal text-3xl mt-5 border-gray-300 w-full rounded-lg py-5 px-4 focus:outline-none focus:ring focus:border-gray-500"
          type="text"
          placeholder="Opara Linus Ahmed"
        />

        <div className="flex mt-5 w-full font-product justify-start">
          <label className="text-3xl font-semibold ">
            Card Type <span className="text-red-500 ml-3 text-xl ">*</span>{" "}
          </label>
        </div>
        <input
          className="border font-normal pl-7 text-3xl mt-5 border-gray-300 w-full rounded-lg py-5 px-5 focus:outline-none focus:ring focus:border-gray-500"
          type="text"
          placeholder="Visa"
        />
        <div className="flex justify-between items-center">
          <div>
            <div className="flex mt-5 font-product justify-start">
              <label className="text-3xl font-semibold ">
                Card Details{" "}
                <span className="text-red-500 ml-3 text-xl ">*</span>{" "}
              </label>
            </div>
            <div className="w-full">
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="border pl-7 rounded-lg text-3xl mt-5 px-5 py-5 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter card number"
                maxLength={19}
                required
              />
            </div>
          </div>
          <div>
            <div className="flex mt-5 font-product justify-start">
              <label className="text-3xl font-semibold ">
                Expiry Date{" "}
                <span className="text-red-500 ml-3 text-xl ">*</span>{" "}
              </label>
            </div>
            <div className="w-40">
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                className="border mt-5 pl-7  text-3xl rounded-lg px-5 py-5 w-full focus:outline-none focus:border-blue-500"
                placeholder="MM/YY"
                maxLength={5}
                required
              />
            </div>
          </div>
          <div>
            <div className="flex mt-5 font-product justify-start">
              <label className="text-3xl font-semibold ">
                CVV <span className="text-red-500 ml-3 text-xl ">*</span>{" "}
              </label>
            </div>
            <div className="w-24">
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={handleCVVChange}
                className="border  mt-5 text-3xl rounded-lg px-5 py-5 w-full focus:outline-none focus:border-blue-500"
                placeholder="CVV"
                maxLength={3}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
