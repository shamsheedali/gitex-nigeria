import { Button } from "@/components/ui/button/Button";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-lime-50 to-green-50">
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-md max-w-xl w-full text-center border-t-4 border-green-600">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-4">
          THANK YOU!
        </h1>
        <p className="text-gray-800 text-base sm:text-lg mb-2">
          Your Registration Has Been Submitted Successfully
        </p>
        <p className="text-gray-700 text-sm sm:text-base mb-6">
          A Confirmation Email With Your Event Details Will Be Sent To You
          Shortly. Please Check Your Inbox (And Spam Folder).
        </p>

        <Button
          title="Return To Homepage"
          size="lg"
          className="bg-gradient-green font-semibold text-sm"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default Success;
