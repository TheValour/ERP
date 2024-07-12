import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTestResult } from "../../../redux/actions/studentActions";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Body from "./Body";

const TestResult = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getTestResult(
        user.result.department,
        user.result.year,
        user.result.section
      )
    );
  }, [dispatch, user.result.department, user.result.year, user.result.section]);
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

export default TestResult;
