import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import { Avatar } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import Data from "./Data";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  
  return (
    <div className="flex-[0.8]">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mx-8">
          <div className="flex space-x-2 text-gray-500">
            <AssignmentIndIcon />
            <h1>Profile</h1>
          </div>
          <Avatar src={user.result.avatar} sx={{ width: 50, height: 50,bgcolor: deepOrange[300] }} />

          <div
            onClick={() => navigate("/student/update")}
            className="flex space-x-2 cursor-pointer">
            <SecurityUpdateIcon />
            <h1 className="font-bold">Update</h1>
          </div>
        </div>

        <div className="w-[98%] bg-white relative rounded-xl  ">
          <div className="overflow-y-scroll h-[27rem]">
            <div className="flex py-10  justify-evenly">
              <div className="flex flex-col space-y-8">
                <Data label="Name" value={user.result.name} />
                <Data label="Email" value={user.result.email} />
                <Data label="Username" value={user.result.username} />
                <Data label="Department" value={user.result.department} />
                <Data label="Father's Name" value={user.result.fatherName} />
                <Data label="Mother's Name" value={user.result.motherName} />
              </div>
              <div className="flex flex-col space-y-8">
                <Data label="DOB" value={user.result.dob} />
                <Data label="Year" value={user.result.year} />
                <Data
                  label="Contact Number"
                  value={user.result.contactNumber}
                />
                <Data label="Section" value={user.result.section} />
                <Data
                  label="Father's Contact Number"
                  value={user.result.fatherContactNumber}
                />
                <Data label="Batch" value={user.result.batch} />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Body;
