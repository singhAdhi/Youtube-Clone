import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <div>
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt=""
          className="h-10"
        />
      </div>
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
