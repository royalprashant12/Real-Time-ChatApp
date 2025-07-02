import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };
  return (
    <>
      <hr />
      <div className="h-[10vh] flex items-center justify-center bg-transparent">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
          title="Logout"
        >
          <BiLogOutCircle className="text-3xl" />
        </button>
      </div>
    </>
  );
}

export default Logout;
