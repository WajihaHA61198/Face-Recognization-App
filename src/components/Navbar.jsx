import React from "react";

const Navbar = ({ onRouteChange, isSignedIn }) => {
  // return (
  // <>
  if (isSignedIn) {
    return (
      <div className="flex justify-end font-[Ubuntu] pr-10 mt-6 font-medium cursor-pointer">
        <button
          className="mx-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          onClick={() => onRouteChange("signOut")}
        >
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex justify-end font-[Ubuntu] pr-10 mt-6 font-medium cursor-pointer">
        <button
          className="mx-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          onClick={() => onRouteChange("SignIn")}
        >
          Sign In
        </button>
        <button
          className="mx-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          onClick={() => onRouteChange("register")}
        >
          Register
        </button>
      </div>
    );
  }
};

export default Navbar;
