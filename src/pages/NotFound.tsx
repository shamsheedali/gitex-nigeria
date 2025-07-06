import { Button } from "@/components/ui/button/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-[70vh] ">
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-md max-w-xl w-full text-center border-t-4 border-green-600">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-black mb-4">
          404
        </h1>
        <p className="text-gray-800 text-base sm:text-lg mb-2">
          Oops! Page not found.
        </p>
        <p className="text-gray-700 text-sm sm:text-base mb-6">
          The page you're looking for doesn't exist or has been moved.
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

export default NotFound;
