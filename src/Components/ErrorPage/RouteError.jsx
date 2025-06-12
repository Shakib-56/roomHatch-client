import { useRouteError, isRouteErrorResponse } from "react-router";
import RouteErrorAnimation from "../ExtraSection/RouteErrorAnimation";

const RouteError = () => {
  const error = useRouteError();
  
  // Handle different error types
  let errorMessage = "Something went wrong.";
  let status = 500;
  
  if (isRouteErrorResponse(error)) {
    // Error from throw new Response()
    try {
      const errorData = error.data ? JSON.parse(error.data) : {};
      errorMessage = errorData.message || error.statusText;
      status = error.status;
    } catch {
      errorMessage = error.statusText;
      status = error.status;
    }
  } else if (error instanceof Error) {
    // Standard JavaScript error
    errorMessage = error.message;
  }

  return (
    <div className="text-center items-center space-y-2 flex flex-col max-w-7xl mx-auto px-20 py-10 rounded-3xl bg-gray-200 my-20">
      <RouteErrorAnimation />
      <h1 className="text-2xl font-bold text-red-600">
        {status === 404 ? "Not Found" : "Oops! An error occurred."}
      </h1>
      <p className="text-gray-700 text-xl font-bold mt-4">
        {errorMessage}
      </p>
      <button 
        onClick={() => window.location.reload()}
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default RouteError;