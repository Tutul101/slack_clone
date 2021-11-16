import React, { useState } from "react";
import "./ChatInput.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
// import firebase from "firebase";
export const ChatInput = ({ channelName, channelId }) => {
  const [msgInput, setMsgInput] = useState("");
  const state = useSelector((state) => state.userreducer);
  const user = state[state.length - 1].user;
  const sendMessage = async (e) => {
    e.preventDefault();
    if (channelId) {
      await addDoc(collection(db, `rooms/${channelId}/messages`), {
        message: msgInput,
        timestamp: new Date(),
        user: user.displayName,
        userimage: user.photoURL,
      });
    }
    setMsgInput("");
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={msgInput}
          onChange={(e) => setMsgInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
          className="chatInput__msg"
        ></input>
        <SendIcon className="send_btn" onClick={sendMessage} color="green">
          Send
        </SendIcon>
      </form>
    </div>
  );
};
