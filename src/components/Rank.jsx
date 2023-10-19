import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="text-white flex justify-center mt-5">
      <h1 className="pr-2 text-base">{`${name}, your current rank is `}</h1>
      <h1 className="text-base">{entries}</h1>
    </div>
  );
};

export default Rank;
