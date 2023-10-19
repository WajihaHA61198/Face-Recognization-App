import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <Tilt className="cursor-pointer shadow-2xl rounded-lg">
        <div className="w-auto p-5">
          <img src={logo} alt="logo" className="w-[15rem] h-[10rem]" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
