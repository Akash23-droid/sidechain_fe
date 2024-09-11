import React, { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import {
  useLocation,
  Route,
  Routes,
  NavLink,
  useNavigate,
} from "react-router-dom";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import UserProfile from "./UserProfile";
import UserData from "./UserData";
import Resume from "../MidContainerRoutes/Resume";
import Hiring from "../MidContainerRoutes/Hiring";
import Posts from "../MidContainerRoutes/Posts";

function MainContainer({ githubUsername, handleJoin }) {
  const { logout } = usePrivy();
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    avatar_url: "",
    username: "",
  });
  const { skills } = location?.state || { skills: [] };

  useEffect(() => {
    const fetchGitHubUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}`
        );
        const data = await response.json();
        setUserData({
          name: data.name,
          avatar_url: data.avatar_url,
          username: data.login,
        });
      } catch (error) {
        console.error("Error fetching GitHub user data:", error);
      }
    };

    if (githubUsername) {
      fetchGitHubUserData();
    }
  }, [githubUsername]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <nav className="bg-white fixed top-0 left-0 right-0 md:left-16 lg:left-64 md:right-16 lg:right-64 z-10 p-4 rounded-t-lg flex justify-between items-center border-b border-gray-300">
        <div className="flex items-center">
          <img
            src={userData.avatar_url}
            alt="User"
            className="w-7 h-7 rounded-full mr-2"
          />
          <span className="text-l font-bold">
            {userData.name || githubUsername}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <EllipsisVerticalIcon className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" />
          <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" />

          <button
            type="button"
            onClick={handleJoin}
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Follow
          </button>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center mt-20 space-y-4 overflow-y-auto px-4 md:px-8 lg:px-16 w-full">
        <div className="w-10/12">
          <UserProfile userData={userData} />
        </div>

        <div className="w-full flex justify-between sticky top-14 z-[7] bg-white">
          <ul className="flex items-center text-sm mx-auto gap-6 overflow-x-auto">
            <li>
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  isActive
                    ? "flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 font-semibold text-green-600 border-b-2 border-green-600"
                    : "flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 hover:border-gray-500 font-medium text-gray-800 border-b-2 border-transparent"
                }
              >
                WORK
              </NavLink>
            </li>
            <li>
              <NavLink
                to="resume"
                className={({ isActive }) =>
                  isActive
                    ? "flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 font-semibold text-green-600 border-b-2 border-green-600"
                    : "flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 hover:border-gray-500 font-medium text-gray-800 border-b-2 border-transparent"
                }
              >
                RESUME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="hiring"
                className={({ isActive }) =>
                  isActive
                    ? "flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 font-semibold text-green-600 border-b-2 border-green-600"
                    : "flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 hover:border-gray-500 font-medium text-gray-800 border-b-2 border-transparent"
                }
              >
                I'M HIRING
              </NavLink>
            </li>
            <li>
              <NavLink
                to="posts"
                className={({ isActive }) =>
                  isActive
                    ? "flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 font-semibold text-green-600 border-b-2 border-green-600"
                    : "flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 hover:border-gray-500 font-medium text-gray-800 border-b-2 border-transparent"
                }
              >
                POSTS
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-full">
          <Routes>
            <Route index element={<UserData username={githubUsername} />} />
            <Route path="resume" element={<Resume />} />
            <Route path="hiring" element={<Hiring />} />
            <Route path="posts" element={<Posts />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default MainContainer;
