import React, { useState } from "react";
import "./App.css";
import Image1 from "../src/assets/bg.png";
import Personal from "./component/Personal";
import Billing from "./component/Billing";
import BillingStep2 from "./component/BillingPage2";
import Confirm from "./component/Confirm";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [billingStep, setBillingStep] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const goToNextTab = () => {
    if (activeTab === 2) {
      // Manage steps within the Billing tab
      const nextStep = billingStep < 3 ? billingStep + 1 : billingStep;
      setBillingStep(nextStep);

      // If the billing steps are complete, set activeTab to 3
      if (nextStep === 3) {
        setActiveTab(3);
      }
    } else {
      const nextTab = activeTab < 3 ? activeTab + 1 : activeTab;
      setActiveTab(nextTab);
    }
  };

  return (
    <div className="relative font-product">
      <img className="w-full h-screen" src={Image1} alt="" />
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
        <div className="text-4xl font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 max-w-fit">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-purple text-4xl font-semibold mb-10 ml-5 text-start ">
              Complete Your Purchase
            </h2>
            <div className="flex font-product font-semibold justify-center border-b border-gray-200">
              <button
                className={`py-4 text-4xl px-6 ${
                  activeTab === 1
                    ? "border-b-4 border-customOrange rounded-sm text-customOrange"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => changeTab(1)}
              >
                Personal Info
              </button>
              <button
                className={`py-4 text-4xl px-6 ${
                  activeTab === 2
                    ? "border-b-4 border-customOrange rounded-sm text-customOrange"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => changeTab(2)}
              >
                Billing Info
              </button>
              <button
                className={`py-4 text-4xl px-6 ${
                  activeTab === 3
                    ? "border-b-4 border-customOrange rounded-sm text-customOrange"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => changeTab(3)}
              >
                Confirm Payment
              </button>
            </div>
            <div className="p-4">
              {activeTab === 1 && (
                <div className="">
                  <Personal />
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  {billingStep === 1 && <Billing />}
                  {billingStep === 2 && <BillingStep2 />}
                </div>
              )}
              {activeTab === 3 && (
                <div>
                  <Confirm />
                </div>
              )}
            </div>

            <div className="flex text-3xl justify-start gap-20 mt-20">
              {activeTab !== 3 && ( // Render Next button conditionally
                <button
                  className="py-5 px-24 border-2 bg-gradient-to-t from-customOrange to-yellow text-white outline-none border-none rounded-lg"
                  onClick={goToNextTab}
                >
                  {activeTab === 2 && billingStep === 2 ? "Pay" : "Next"}
                </button>
              )}
              {activeTab !== 3 && ( // Render Cancel button conditionally
                <button className="text-purple text-3xl">Cancel Payment</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
