import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-7xl font-bold text-green-700">404</h1>
      <p className="text-xl text-gray-700 mt-4">Oops! Page not found.</p>
      <p className="text-gray-500 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-200"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
