import React from "react";
import "../index.css";
// import image from "../assets/2.jpg";

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div className="flex text-center justify-center mt-10">
      <div className="absolute">
        <img
          src={imageURL}
          alt=""
          className="w-[37rem] h-auto rounded-md shadow-xl  border-2 border-red-400"
          id="inputImage"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
