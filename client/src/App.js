import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";

import AdminLogin from "./components/login/adminLogin/AdminLogin";
import AdminUpdate from "./components/admin/profile/update/Update";
import AdminHome from "./components/admin/AdminHome";
import AdminPassword from "./components/admin/profile/update/password/Password";
import AdminFirstTimePassword from "./components/admin/profile/update/firstTimePassword/FirstTimePassword";
import AdminProfile from "./components/admin/profile/Profile";
import AddAdmin from "./components/admin/addAdmin/AddAdmin";
import AddFaculty from "./components/admin/addFaculty/AddFaculty";
import AddStudent from "./components/admin/addStudent/AddStudent";
import AddDepartment from "./components/admin/addDepartment/AddDepartment";
import AddSubject from "./components/admin/addSubject/AddSubject";
import GetFaculty from "./components/admin/getFaculty/GetFaculty";
import GetStudent from "./components/admin/getStudent/GetStudent";
import GetSubject from "./components/admin/getSubject/GetSubject";
import DeleteAdmin from "./components/admin/deleteAdmin/DeleteAdmin";
import DeleteDepartment from "./components/admin/deleteDepartment/DeleteDepartment";
import DeleteFaculty from "./components/admin/deleteFaculty/DeleteFaculty";
import DeleteStudent from "./components/admin/deleteStudent/DeleteStudent";
import DeleteSubject from "./components/admin/deleteSubject/DeleteSubject";
import CreateNotice from "./components/admin/createNotice/CreateNotice";

import FacultyLogin from "./components/login/facultyLogin/FacultyLogin";
import FacultyHome from "./components/faculty/FacultyHome";
import FacultyProfile from "./components/faculty/profile/Profile";
import FacultyFirstTimePassword from "./components/faculty/profile/update/firstTimePassword/FirstTimePassword";
import FacultyUpdate from "./components/faculty/profile/update/Update";
import CreateTest from "./components/faculty/createTest/CreateTest";
import MarkAttendance from "./components/faculty/markAttendance/MarkAttendance";
import FacultyPassword from "./components/faculty/profile/update/password/Password";
import UploadMarks from "./components/faculty/uploadMarks/UploadMarks";

import StudentLogin from "./components/login/studentLogin/StudentLogin";
import StudentHome from "./components/student/StudentHome";
import StudentProfile from "./components/student/profile/Profile";
import StudentFirstTimePassword from "./components/student/profile/update/firstTimePassword/FirstTimePassword";
import StudentPassword from "./components/student/profile/update/password/Password";
import StudentUpdate from "./components/student/profile/update/Update";
import SubjectList from "./components/student/subjectList/SubjectList";
import TestResult from "./components/student/testResult/TestResult";
import Attendance from "./components/student/attendance/Attendance";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />

      {/* Admin  */}

      <Route path="/login/adminlogin" element={<AdminLogin />} />
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/admin/profile" element={<AdminProfile />} />
      <Route path="/admin/update" element={<AdminUpdate />} />
      <Route path="/admin/update/password" element={<AdminPassword />} />
      <Route path="/admin/updatepassword" element={<AdminFirstTimePassword />} />
      
      <Route path="/admin/createnotice" element={<CreateNotice />} />
      <Route path="/admin/addadmin" element={<AddAdmin />} />
      <Route path="/admin/deleteadmin" element={<DeleteAdmin />} />
      <Route path="/admin/adddepartment" element={<AddDepartment />} />
      <Route path="/admin/deletedepartment" element={<DeleteDepartment />} />
      <Route path="/admin/addfaculty" element={<AddFaculty />} />
      <Route path="/admin/deletefaculty" element={<DeleteFaculty />} />
      <Route path="/admin/deletestudent" element={<DeleteStudent />} />
      <Route path="/admin/deletesubject" element={<DeleteSubject />} />
      <Route path="/admin/allfaculty" element={<GetFaculty />} />
      <Route path="/admin/addstudent" element={<AddStudent />} />
      <Route path="/admin/addsubject" element={<AddSubject />} />
      <Route path="/admin/allsubject" element={<GetSubject />} />
      <Route path="/admin/allstudent" element={<GetStudent />} />

      {/* Faculty  */}

      <Route path="/login/facultylogin" element={<FacultyLogin />} />
      <Route path="/faculty/home" element={<FacultyHome />} />
      <Route path="/faculty/password" element={<FacultyFirstTimePassword />} />
      <Route path="/faculty/profile" element={<FacultyProfile />} />
      <Route path="/faculty/update" element={<FacultyUpdate />} />
      <Route path="/faculty/update/password" element={<FacultyPassword />} />
      <Route path="/faculty/createtest" element={<CreateTest />} />
      <Route path="/faculty/uploadmarks" element={<UploadMarks />} />
      <Route path="/faculty/markattendance" element={<MarkAttendance />} />

      {/* Student  */}

      <Route path="/login/studentlogin" element={<StudentLogin />} />
      <Route path="/student/home" element={<StudentHome />} />
      <Route path="/student/password" element={<StudentFirstTimePassword />} />
      <Route path="/student/profile" element={<StudentProfile />} />
      <Route path="/student/update" element={<StudentUpdate />} />
      <Route path="/student/update/password" element={<StudentPassword />} />
      <Route path="/student/subjectlist" element={<SubjectList />} />
      <Route path="/student/testresult" element={<TestResult />} />
      <Route path="/student/attendance" element={<Attendance />} />
    </Routes>
  );
};

export default App;
