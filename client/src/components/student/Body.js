import React, { useState } from "react";
import QuizIcon from '@mui/icons-material/Quiz';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShowNotice from "../notices/ShowNotice";
import { useSelector } from "react-redux";
import ReplyIcon from "@mui/icons-material/Reply";
import Notice from "../notices/Notice";

const Body = () => {
  const [open, setOpen] = useState(false);
  const [openNotice, setOpenNotice] = useState({});
  const notices = useSelector((state) => state.admin.notices.result);
  const testResult = useSelector((state) => state.student.testResult.result);
  const attendance = useSelector((state) => state.student.attendance.result);
  const user = JSON.parse(localStorage.getItem("user"));
  const subjects = useSelector((state) => state.admin.subjects.result);
  var totalAttendance = 0;
  console.log(attendance);

  attendance?.map((att) => (totalAttendance += att.attended));

  return (
    <div className="flex-[0.8] mt-3 space-y-5">
      <div className="flex flex-col mr-5 space-y-4 overflow-y-auto">
        <div className="bg-white h-[8rem] rounded-xl shadow-lg grid grid-cols-4 justify-between px-8 items-center space-x-4">
          <div className="flex items-center space-x-4 border-r-2">
            <LibraryBooksIcon
              className="rounded-full py-2 bg-green-300"
              sx={{ fontSize: 40 }}
            />
            <div className="flex flex-col">
              <h1>Subjects</h1>
              <h2 className="text-2xl font-bold">{subjects?.length}</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r-2">
            <QuizIcon
              className="rounded-full py-2 bg-green-300"
              sx={{ fontSize: 40 }}
            />
            <div className="flex flex-col">
              <h1>Test</h1>
              <h2 className="text-2xl font-bold">{testResult?.length}</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r-2">
            <SupervisorAccountIcon
              className="rounded-full py-2 bg-green-300"
              sx={{ fontSize: 40 }}
            />
            <div className="flex flex-col">
              <h1>Attendance</h1>
              <h2 className="text-2xl font-bold">{totalAttendance}</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4 ">
            <MenuBookIcon
              className="rounded-full py-2 bg-green-300"
              sx={{ fontSize: 40 }}
            />
            <div className="flex flex-col">
              <h1>Year</h1>
              <h2 className="text-2xl font-bold">{user.result.year}</h2>
            </div>
          </div>
        </div>
          <div className="bg-white h-[17rem] w-full rounded-xl shadow-lg flex flex-col  pt-3">
            <div className="flex px-3">
              {open && (
                <ReplyIcon
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                />
              )}
              <h1 className="font-bold text-xl w-full text-center">
                Notices
              </h1>
            </div>
            <div className="mx-5 mt-5 space-y-3 overflow-y-auto h-[12rem]">
              {!open ? (
                notices?.map((notice, idx) => (
                  <div
                    onClick={() => {
                      setOpen(true);
                      setOpenNotice(notice);
                    }}
                    className="">
                    <Notice idx={idx} notice={notice} notFor="faculty" />
                  </div>
                ))
              ) : (
                <ShowNotice notice={openNotice} />
              )}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Body;
