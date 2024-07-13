import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotice } from "../../redux/actions/adminActions";
import {
  getAttendance,
  getSubject,
  getTestResult,
} from "../../redux/actions/studentActions";

import Body from "./Body";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StudentHome = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubject(user.result.department, user.result.year));
    dispatch(
      getTestResult(
        user.result.department,
        user.result.year,
        user.result.section,
        user.result.username
      )
    );
    dispatch(
      getAttendance(
        user.result.username
      )
    );
    dispatch(getNotice());
  }, [dispatch]);

  return (
    <div className="STUDENTPAGE">
      <div className="STUINNER">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
