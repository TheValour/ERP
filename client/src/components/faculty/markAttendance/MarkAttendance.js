import React, { useEffect } from "react";
import Body from "./Body";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useDispatch } from "react-redux";
import {
  getAllDepartment,
  getAllSubject,
} from "../../../redux/actions/adminActions";

const MarkAttendance = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDepartment());
  }, [dispatch]);
  return (
    <div className="FACULTYPAGE">
      <div className="FACINNER ">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default MarkAttendance;
