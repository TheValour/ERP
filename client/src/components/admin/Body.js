import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BoyIcon from "@mui/icons-material/Boy";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useSelector } from "react-redux";
import Notice from "../notices/Notice";
import ShowNotice from "../notices/ShowNotice";
import ReplyIcon from "@mui/icons-material/Reply";

const Body = () => {
  const [open, setOpen] = useState(false);
  const [openNotice, setOpenNotice] = useState({});
  const notices = useSelector((state) => state.admin.notices.result);
  const students = useSelector((state) => state.admin.allStudent);
  const faculties = useSelector((state) => state.admin.allFaculty);
  const admins = useSelector((state) => state.admin.allAdmin);
  const departments = useSelector((state) => state.admin.allDepartment);

  return (
    <div className="flex-[0.8] mt-3 space-y-5">
      <div className="flex flex-col mr-5 space-y-4 overflow-y-hidden">
        <div className="bg-white h-[8rem] rounded-xl shadow-lg grid grid-cols-4 justify-between px-8 items-center space-x-4">
          <div className="flex items-center space-x-4 border-r-4 bg-gray-200 p-2 border-gray-300 rounded-lg">
            <LibraryBooksIcon
              className="rounded-full py-2 bg-orange-300"
              sx={{ fontSize: 40 }}
            />
            <div className="flex flex-col">
              <h1>Faculty</h1>
              <h2 className="text-2xl font-bold">{faculties?.length}</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r-4 bg-gray-200 p-2 border-gray-300 rounded-lg">
            <BoyIcon
              className="rounded-full py-2 bg-orange-300"
              sx={{ fontSize: 40 }}
            />
            <div className="flex flex-col">
              <h1>Student</h1>
              <h2 className="text-2xl font-bold">{students?.length}</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r-4 bg-gray-200 p-2 border-gray-300 rounded-lg">
            <AdminPanelSettingsIcon
              className="rounded-full py-2 bg-orange-300"
              sx={{ fontSize: 40 }}
            />
            <div className="flex flex-col">
              <h1>Admin</h1>
              <h2 className="text-2xl font-bold">{admins?.length}</h2>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r-4 bg-gray-200 p-2 border-gray-300 rounded-lg">
            <MenuBookIcon
              className="rounded-full py-2 bg-orange-300"
              sx={{ fontSize: 40 }}
            />
            <div className="flex flex-col">
              <h1>Department</h1>
              <h2 className="text-2xl font-bold">{departments?.length}</h2>
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
                  <Notice idx={idx} notice={notice} notFor="" />
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
