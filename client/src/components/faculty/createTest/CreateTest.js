import React from "react";
import Body from "./Body";
import Header from "../Header";
import Sidebar from "../Sidebar";

const CreateTest = () => {
  return (
    <div className="FACULTYPAGE">
      <div className="FACINNER">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default CreateTest;
