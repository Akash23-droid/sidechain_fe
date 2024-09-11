import React from "react";
import { useLocation } from "react-router-dom";

function UserProfile({ userData }) {
  const location = useLocation();

  // const { skills } = location.state;
  const { githubUsername, skills } = location.state || {
    githubUsername: "",
    skills: [],
  };
  return (
    <div className="border-b border-gray-300">
      <div className="bg-white py-10 px-4 flex flex-col items-center">
        <img
          src={userData?.avatar_url}
          alt="User Avatar"
          className="w-20 h-20 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{userData?.username}</h2>
        <p className="text-black-600 text-sm">Software Engineer</p>
        <div className="flex items-center text-black-400 text-sm mt-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <p className="mr-4">Member since 2022</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          <a
            href={`https://github.com/${userData?.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {`https://github.com/${userData?.username}`}
          </a>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center gap-2">
          {/* Button 1 */}
          {skills.length > 0 ? (
            <div>
              {skills.map((skill, index) => (
                <button
                  type="button"
                  key={index}
                  className="text-gray-900 bg-white font-medium rounded-full text-xs px-3 py-1.5 border border-primaryBorder hover:bg-gray-200"
                >
                  <span className="flex items-center">
                    <i
                      className={`${skill.icon} text-2xl mr-2`}
                      onError={(e) =>
                        (e.target.className =
                          "devicon-devicon-plain text-2xl mr-2")
                      }
                    ></i>
                    <span>{skill.name}</span>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <p className="mb-4">No skills found. Please upload your resume.</p>
          )}
        </div>
      </div>
      {/* <div className="flex justify-between sticky top-14 z-[7]">
        <div className="w-full">
          <div className="bg-white sm:px-6 px-4 mr-[1px]">
            <div className="flex items-center bg-white">
              <ul className="flex items-center text-sm mx-auto gap-6 overflow-x-auto sticky top-[70px] lg:top-[70px] z-[5]">
                <li className="flex items-center">
                  <a className="flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 font-semibold text-green-600 border-b-2 border-green-600">
                    WORK
                  </a>
                </li>
                <li className="flex items-center">
                  <a className="flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 hover:border-gray-500 font-medium text-gray-800 border-b-2 border-transparent">
                    RESUME
                  </a>
                </li>
                <li className="flex items-center">
                  <a className="flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 hover:border-gray-500 font-medium text-gray-800 border-b-2 border-transparent">
                    I'M HIRING
                  </a>
                </li>
                <li className="flex items-center">
                  <a className="flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 hover:border-gray-500 font-medium text-gray-800 border-b-2 border-transparent">
                    POSTS
                    <p className="font-semibold text-xs flex justify-end">
                      &nbsp;•&nbsp;11
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default UserProfile;
