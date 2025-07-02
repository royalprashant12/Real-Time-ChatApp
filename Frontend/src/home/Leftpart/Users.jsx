import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      <h1 className="px-8 py-2 text-indigo-200 font-bold text-lg bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl shadow mb-4 tracking-wide uppercase">
        Messages
      </h1>
      <div
        className="py-2 flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-indigo-700 scrollbar-track-transparent"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      >
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
