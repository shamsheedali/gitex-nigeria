import LoginForm from "@/components/forms/LoginForm";
import layoutBg from "@/assets/images/common/layout-bg.png";
import allPartnersLogo from "@/assets/images/common/all-partners-logo.png";
import { Stepper } from "@/components/ui/Stepper";
import { Button } from "@/components/ui/button/Button";

const Login = () => {
  return (
    <div>
      <div className="py-3 w-full relative bottom-6 left-6">
        <Stepper totalSteps={4} />
      </div>

      <div className="border-1 border-[#579B29] bg-white rounded-sm p-3 flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-[70%]">
          <div
            className="text-white py-5 rounded-t-md px-6 flex justify-between items-center flex-wrap"
            style={{
              background: "linear-gradient(to right, #299D3F, #123F22)",
            }}
          >
            <h1 className="font-bold text-xl">Registration Information 1</h1>

            <div className="bg-white/5 backdrop-blur px-4 py-2 border border-white/30 rounded-md">
              <h1>PREMIUM TICKET - FREEIncl. 19% VAT</h1>
            </div>
          </div>

          <div className="border border-gray-600/20 rounded-sm">
            {/* Form Grid */}
            <LoginForm />
          </div>
        </div>

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
            <h1>Registration Information 1</h1>
          </div>

          <div className="py-3 flex flex-col gap-2 font-bold text-[#D4D4D4]">
            <h1 className="font-extrabold">FULL NAME</h1>
            <h1>JOB TITLE</h1>
            <h1>COMPANY NAME</h1>
            <h1>COUNTRY OF RESIDENCE</h1>
          </div>

          <div className="shadow-[-1px_0px_20px_0px_#0000003b] w-full py-4 flex flex-col gap-2 rounded-b-md bg-white  text-[#D4D4D4] font-bold">
            <h1>BADGE CATEGORY</h1>
            <h1 className="font-extrabold text-black">VISITOR</h1>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center relative top-5">
            <Button title="Next" size="md" className="bg-gradient-green fold-bold" />
      </div>
    </div>
  );
};

export default Login;
