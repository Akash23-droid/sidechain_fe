import React from "react";
import { useNavigate } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";

function RightSidebar() {
  const navigate = useNavigate();
  const { user, logout } = usePrivy();

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  const handleJoin = () => {
    navigate("/jobs");
  };

  return (
    <aside className="w-64 bg-white shadow-lg fixed top-0 right-0 bottom-0 p-4 border-l border-gray-300">
      <div className="p-4 flex space-x-2">
        <button
          type="button"
          onClick={handleLogout}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Logout
        </button>

        <button
          type="button"
          onClick={handleJoin}
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Join
        </button>
      </div>
    </aside>
  );
}

export default RightSidebar;
