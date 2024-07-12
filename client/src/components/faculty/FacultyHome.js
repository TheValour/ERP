import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotice } from "../../redux/actions/adminActions";
import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";

const FacultyHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotice());
  }, [dispatch]);
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

export default FacultyHome;
