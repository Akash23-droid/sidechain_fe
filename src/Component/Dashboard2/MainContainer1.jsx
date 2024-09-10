import React, { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useLocation } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import UserProfile from "./UserProfile";
import UserData from "./UserData";

function MainContainer({ githubUsername, handleJoin }) {
  const { logout } = usePrivy();
  const location = useLocation();
  const [userData, setUserData] = useState({
    name: "",
    avatar_url: "",
    username: "",
  });
  const { skills } = location.state;

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
    window.location.href = "/";
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

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center mt-20 space-y-4 overflow-y-auto px-4 md:px-8 lg:px-16">
        <div className="w-10/12 ">
          <UserProfile userData={userData} />
        </div>
        <div className="opacity-100">
          <div className=" w-full h-full mx-0">
            {githubUsername && <UserData username={githubUsername} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainContainer;

// {skills.length > 0 ? (
//   <ul className="list-disc pl-5 mb-4">
//     {skills.map((skill, index) => (
//       <li key={index} className="py-1">
//         {/* <i className={`${skill.icon} text-2xl mr-2`}></i> */}
//         <i
//           className={`${skill.icon} text-2xl mr-2`}
//           onError={(e) =>
//             (e.target.className =
//               "devicon-devicon-plain text-2xl mr-2")
//           }
//         ></i>
//         <span>{skill.name}</span>
//       </li>
//     ))}
//   </ul>
// ) : (
//   <p className="mb-4">No skills found. Please upload your resume.</p>
// )}

{
  /* <h2 className="text-2xl font-semibold mb-4">Your Projects:</h2>
          {projects?.length > 0 ? (
            <ul className="list-disc pl-5 mb-4">
              {projects?.map((project, index) => (
                <li key={index} className="py-1">
                  {project}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mb-4">No projects found.</p>
          )} */
}

{
  /* <h2 className="text-2xl font-semibold mb-4">Your Education:</h2>
          {education?.length > 0 ? (
            <ul className="list-disc pl-5 mb-4">
              {education?.map((edu, index) => (
                <li key={index} className="py-1">
                  {edu}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mb-4">No education information found.</p>
          )} */
}

// {githubUsername && (
//   <div>
//     <h3>GitHub Contributions for {githubUsername}:</h3>
//     <GitHubCalendar username={githubUsername} />
//   </div>
// )}

// <button
//   onClick={handleLogout}
//   className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
// >
//   Logout
// </button>
