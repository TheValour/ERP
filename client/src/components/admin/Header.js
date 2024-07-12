import React from "react";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ERP from '../../image/erp2.png'

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login/adminLogin");
  };
  
  return (
    <div className="flex-[0.05] flex justify-between items-center mx-4 my-2 bg-gray-800 p-1 rounded-lg text-white">
      <img  src={ERP} className="h-10"  alt="img"/>
      <h1 className="font-semibold">Welcome</h1>
      <div className="flex items-center space-x-3">
        <Avatar
          src={user.result.avatar}
          alt={user.result.name.charAt(0)}
          sx={{ width: 28, height: 28 }}
          className="border-gray-200 border-2"
        />
        <h1>{user.result.name.split(" ")[0]}</h1>
        <LogoutIcon
          onClick={logout}
          className="cursor-pointer hover:scale-110 transition-all "
        />
      </div>
    </div>
  );
};

export default Header;
