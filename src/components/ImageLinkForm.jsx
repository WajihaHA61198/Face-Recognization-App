import React from "react";
import "../App.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="mt-5 text-center">
      <p className="text-white text-4xl mb-7 head">Face Detection</p>
      <input
        type="text"
        className="w-[30rem] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Image URL"
        onChange={onInputChange}
      />
      <button
        className="mx-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        onClick={onButtonSubmit}
      >
        Detect
      </button>
    </div>
  );
};

export default ImageLinkForm;
