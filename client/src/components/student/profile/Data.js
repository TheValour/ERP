import React from "react";

const Data = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between bg-green-100 rounded-md">
      <span className="bg-gray-700 text-white mr-5 p-2">{label} :</span>
      <span className="mr-5 p-2 rounded-xl">{value}</span>
    </div>
  );
};

export default Data;
