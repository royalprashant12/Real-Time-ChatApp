import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const chatName = itsMe ? "chat-end" : "chat-start";
  // Sent: blue bg, white text; Received: gray bg, dark text
  const bubbleClass = itsMe
    ? "bg-blue-500 text-white"
    : "bg-gray-200 text-gray-800";

  const createdAt = message.createdAt ? new Date(message.createdAt) : new Date();
  const formattedTime = isNaN(createdAt.getTime())
    ? "Just now"
    : createdAt.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div>
      <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble ${bubbleClass}`}>
            {message.message}
          </div>
          <div className="chat-footer">{formattedTime}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
