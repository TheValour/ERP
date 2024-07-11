import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import { Avatar } from "@mui/material";
import { deepPurple } from '@mui/material/colors';
import Data from "./Data";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mx-8">
          <div className="flex space-x-2 text-gray-400">
            <AssignmentIndIcon />
            <h1>Profile</h1>
          </div>
          <Avatar src={user.result.avatar} sx={{ width: 50, height: 50, bgcolor: deepPurple[400] }} />

          <div
            onClick={() => navigate("/faculty/update")}
            className="flex space-x-2 cursor-pointer">
            <SecurityUpdateIcon />
            <h1 className="font-bold">Update</h1>
          </div>
        </div>
        <div className="w-[98%] bg-white rounded-xl flex py-10 justify-evenly">
          <div className="flex flex-col space-y-10">
            <Data label="Name" value={user.result.name} />
            <Data label="Email" value={user.result.email} />
            <Data label="Username" value={user.result.username} />
            <Data label="Department" value={user.result.department} />
          </div>
          <div className="flex flex-col space-y-10 ">
            <Data label="DOB" value={user.result.dob} />
            <Data label="Joining Year" value={user.result.joiningYear} />
            <Data label="Contact Number" value={user.result.contactNumber} />
            <Data label="Designation" value={user.result.designation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
