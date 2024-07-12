import React from "react";
import Header from "../../../Header";
import Sidebar from "../../../Sidebar";
import Body from "./Body";

const Password = () => {
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

export default Password;
