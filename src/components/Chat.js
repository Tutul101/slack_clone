import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { db } from "../firebase";
import { Message } from "./Message";
import {
  doc,
  onSnapshot,
  collection,
  query,
  orderBy,
} from "firebase/firestore";
import { ChatInput } from "./ChatInput";
export const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  const getMessages = async () => {
    const q = await query(
      collection(db, `rooms/${roomId}/messages`),
      orderBy("timestamp")
    );
    await onSnapshot(q, (querySnapShot) => {
      const messages = [];
      querySnapShot.forEach((doc) => {
        messages.push(doc.data());
      });
      setRoomMessages(messages);
    });
  };
  useEffect(() => {
    if (roomId) {
      const specialOfTheDay = doc(db, `rooms/${roomId}`);
      onSnapshot(specialOfTheDay, (docSnapshot) => {
        const doc_data = docSnapshot.data();
        setRoomDetails(doc_data);
      });
    }
    getMessages();
  }, [roomId]);
  console.log(roomMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon className="chat__starIcon" />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon className="chat__infoIcon" />
            Details
          </p>
        </div>
      </div>
      <div className="chat__container">
        <div className="chat__messages">
          {/* Chat messages */}
          {roomMessages.map((msg) => {
            return (
              <Message
                message={msg.message}
                timestamp={msg.timestamp}
                user={msg.user}
                userImage={msg.userimage}
              ></Message>
            );
          })}
        </div>
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
};
