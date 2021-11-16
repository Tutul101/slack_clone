import React, { useState, useEffect } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import "./Sidebar.css";
import { SidebarOption } from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";
export const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  async function getRooms(db) {
    const roomCol = collection(db, "rooms");
    const roomSnapshot = await getDocs(roomCol);
    setChannels(
      roomSnapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name };
      })
    );
    const specialOfTheDay = doc(db, "rooms/a3xLfjMXaap9K5S9m2pp");
    onSnapshot(specialOfTheDay, (docSnapshot) => {
      // const docData = docSnapshot.data();
      // console.log("Realtime data" + JSON.stringify(docData));
    });
  }
  useEffect(() => {
    getRooms(db);
  }, []);
  const state = useSelector((state) => state.userreducer);
  const user = state[state.length - 1].user;
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Tutul</h2>
          <h3>
            <FiberManualRecordIcon className="online__icon" />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon className="sidebar__pencil_icon" />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
      {/* Connect to db and list the channels*/}
      {channels.map((channel) => {
        return (
          <SidebarOption
            key={channel.id}
            id={channel.id}
            Icon={TagOutlinedIcon}
            title={channel.name}
          />
        );
      })}
    </div>
  );
};
