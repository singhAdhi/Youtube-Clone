import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generate } from "../utils/helper";
const LiveChat = () => {
  let [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("api polling");
      dispatch(
        addMessage({
          name: generate(),
          message: "this is the new message",
        })
      );
    }, 2000);
    return () => clearInterval();
  }, []);
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 overflow-y-scroll">
      {chatMessages.map((c) => (
        <ChatMessage name={c.name} message={c.message} />
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Adhiraj Singh",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          type="text"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default LiveChat;
