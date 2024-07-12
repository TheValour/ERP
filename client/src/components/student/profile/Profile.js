import React from "react";
import Body from "./Body";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Profile = () => {
  return (
    <div className="STUDENTPAGE">
      <div className="STUINNER">
        <Header />
        <div className="flex flex-[0.95] overflow-y-scroll">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Profile;
