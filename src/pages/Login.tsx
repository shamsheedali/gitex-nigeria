import { useState } from "react";
import LoginForm from "@/components/forms/LoginForm";
import layoutBg from "@/assets/images/common/layout-bg.png";
import allPartnersLogo from "@/assets/images/common/all-partners-logo.png";
import { Stepper } from "@/components/ui/Stepper";
import { Button } from "@/components/ui/button/Button";

const Login = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div>
      {/* Stepper */}
      <div className="py-3 w-full relative bottom-6 left-6">
        <Stepper totalSteps={totalSteps} currentStep={step} />
      </div>

      {/* Conditional content */}
      {step < 4 ? (
        <div className="border-1 border-[#579B29] bg-white rounded-sm p-3 flex flex-col md:flex-row gap-3">
          {/* Left section */}
          <div className="w-full md:w-[70%]">
            <div className="bg-gradient-green text-white py-5 rounded-t-md px-6 flex justify-between items-center flex-wrap">
              <h1 className="font-bold text-xl">Registration Information 1</h1>

              <div className="bg-white/5 backdrop-blur px-4 py-2 border border-white/30 rounded-md">
                <h1>PREMIUM TICKET - FREE Incl. 19% VAT</h1>
              </div>
            </div>

            <div className="border border-gray-600/20 rounded-sm">
              <LoginForm />
            </div>
          </div>

          {/* Right section */}
          <div className="w-full md:w-[30%] h-fit shadow-xl flex flex-col items-center text-center">
            <div
              className="h-20 w-full bg-cover rounded-t-md flex items-center px-3"
              style={{ backgroundImage: `url(${layoutBg})` }}
            >
              <img
                src={allPartnersLogo}
                alt="All Partners Logo"
                className="w-[215px]"
              />
            </div>

            <div
              className="text-white text-md rounded-b-md w-fit py-2 px-8 font-semibold"
              style={{
                background: "linear-gradient(to right, #299D3F, #123F22)",
              }}
            >
              <h1>Registration Information {step}</h1>
            </div>

            <div className="py-3 flex flex-col gap-2 font-bold text-[#D4D4D4]">
              <h1 className="font-extrabold">FULL NAME</h1>
              <h1>JOB TITLE</h1>
              <h1>COMPANY NAME</h1>
              <h1>COUNTRY OF RESIDENCE</h1>
            </div>

            <div className="shadow-[-1px_0px_20px_0px_#0000003b] w-full py-4 flex flex-col gap-2 rounded-b-md bg-white text-[#D4D4D4] font-bold">
              <h1>BADGE CATEGORY</h1>
              <h1 className="font-extrabold text-black">VISITOR</h1>
            </div>
          </div>
        </div>
      ) : (
        // Step 4
        <div className="bg-white p-6 rounded-md shadow-md">
          {/* Header */}
          <div className="bg-gradient-green text-white py-5 rounded-md px-6 flex justify-between items-center flex-wrap">
            <h1 className="font-bold text-xl">Registration Summary</h1>
          </div>

          {/* Ticket details */}
          <div className="mt-6 space-y-3 text-sm sm:text-base text-black">
            <div className="flex justify-between font-bold">
              <span>PREMIUM TICKET x 2</span>
              <span>EUR 40.19</span>
            </div>
            <hr className="border-t border-[#EBEBEB]" />

            <div className="flex justify-between font-bold text-black">
              <span>Student Ticket Access On Day 3 Only</span>
              <span>EUR 50.40 SUBJECT TO APPROVAL Incl. 19%</span>
            </div>
            <hr className="border-t border-[#EBEBEB]" />
          </div>

          {/* Promo code input */}
          <div className="bg-green-50 border border-dashed border-green-300 rounded-md mt-6 p-4">
            <label
              htmlFor="promo"
              className="block text-green-700 font-semibold mb-2"
            >
              Have a promo code?
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="promo"
                type="text"
                placeholder="Enter Promo code"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
              />

              <Button
                title="Apply"
                size="md"
                className="bg-gradient-red font-bold"
              />
            </div>
          </div>

          {/* Total */}
          <div className="mt-6 flex justify-end font-bold text-lg sm:text-xl">
            <span>Total:&nbsp;</span>
            <span className="text-black">EUR 300</span>&nbsp;
            <span className="text-sm font-normal text-gray-600">
              Incl. 19% VAT
            </span>
          </div>

          {/* Consent checkboxes */}
          <div className="mt-6 space-y-5 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <input type="checkbox" id="consent1" className="mt-1" />
              <label htmlFor="consent1">
                I have read and accept the{" "}
                <a href="#" className="text-red-600 underline">
                  terms and conditions, Privacy Policy
                </a>
                , and consent that attendees under the age of 21 will not be
                admitted, and admission to the exhibition is restricted to trade
                and business professionals only, and students above 16 and below
                18 can attend only if accompanied by school or faculty member{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="consent2" className="mt-1" />
              <label htmlFor="consent2">
                I hereby consent the use of my data by the organiser, exhibitors
                and sponsors of DWTC & KAOUN International to delivering
                services and for marketing purposes. I am aware that I can
                object to the sending of newsletters at any time{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="w-full flex justify-center items-center gap-4 relative top-5">
        {step > 1 && (
          <Button
            title="Previous"
            size="md"
            className="bg-gradient-purple font-bold"
            onClick={prevStep}
          />
        )}
        <Button
          title={step === totalSteps ? "Finish" : "Next"}
          size="md"
          className="bg-gradient-green font-bold"
          onClick={nextStep}
        />
      </div>
    </div>
  );
};

export default Login;
