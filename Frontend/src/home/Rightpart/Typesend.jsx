import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex space-x-2 h-[8vh] bg-white/10 rounded-xl shadow-lg p-2 mx-2 mb-2 backdrop-blur-md">
        <div className="w-full">
          <input
            type="text"
            placeholder="Type here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-none rounded-xl outline-none px-4 py-3 w-full bg-transparent text-white placeholder:text-indigo-200 focus:ring-2 ring-indigo-400 transition"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
          title="Send"
          disabled={loading || !message.trim()}
        >
          <IoSend className="text-2xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
