import React from "react";
import { useHistory } from "react-router";
import "./SidebarOption.css";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };
  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      await addDoc(collection(db, "rooms"), {
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};
