import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-indigo-900 via-slate-900 to-blue-900 text-gray-200 shadow-xl rounded-xl p-4 flex flex-col">
      <Search />
      <div
        className="flex-1 overflow-y-auto mt-4"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
}

export default Left;
