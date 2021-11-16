import React from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import "./Header.css";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useSelector } from "react-redux";
export const Header = () => {
  const state = useSelector((state) => state.userreducer);
  const user = state[state.length - 1].user;

  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          src={user.photoURL}
          alt={user?.displayName}
        ></Avatar>
        <AccessTimeOutlinedIcon />
      </div>
      <div className="header_search">
        <input placeholder="Search Tutul's slack" name="search_input" />
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_right">
        {/*help icon */}
        <HelpOutlineOutlinedIcon />
      </div>
    </div>
  );
};
