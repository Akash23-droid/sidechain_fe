import React from "react";
import GitHubCalendar from 'react-github-calendar';

import { Routes, Route, Link } from "react-router-dom";
import Work from "./MidNavbar/Work";
import Resume from "./MidNavbar/Resume";
import Hiring from "./MidNavbar/Hiring";
import Posts from "./MidNavbar/Posts";

const data = [
  {
      title: 'Title 1',
      content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '
  },
  {
      title: 'Title 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '
  },
  {
      title: 'Title 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '
  },
  {
      title: 'Title 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '
  },
  {
      title: 'Title 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '
  }
];
const UserData = ({ username }) => {
  return (
    <div className="mb-20">
      <div className="flex justify-center sticky top-14 z-[7]">
        <div className="w-9/12 border-b border-gray-300 mx-auto">
          <div className="bg-white sm:px-6 px-4">
            <div className="flex items-center bg-white justify-center">
              <ul className="flex items-center justify-center text-sm gap-6 overflow-x-auto sticky top-[70px] z-[5]">
                <li className="flex items-center">
                  <Link
                    to="work"
                    className="flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 font-semibold text-green-600 border-b-2 border-green-600"
                  >
                    WORK
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    to="resume"
                    className="flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 hover:border-gray-500 font-medium text-gray-800 border-b-2 border-transparent"
                  >
                    RESUME
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    to="hiring"
                    className="flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 hover:border-gray-500 font-medium text-gray-800 border-b-2 border-transparent"
                  >
                    I'M HIRING
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    to="posts"
                    className="flex whitespace-nowrap text-center items-center justify-between py-2.5 text-xs transition-all ease-in duration-75 hover:border-gray-500 font-medium text-gray-800 border-b-2 border-transparent"
                  >
                    POSTS
                    <p className="font-semibold text-xs flex justify-end">
                      &nbsp;•&nbsp;11
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-20 mt-10'>
        <div className="bg-white p-4 w-full max-w-full mx-auto flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 w-full text-center">GitHub Contributions for {username}:</h3>
            <div className="w-full flex justify-center overflow-x-auto">
                <div className="min-w-[800px] transform scale-75">
                    <GitHubCalendar username={username} />
                </div>
            </div>
            <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4 mt-4">
                {data.map((item,index) => (
                    <article className="flex flex-col justify-between flex-1 group border border-gray-300 hover:shadow-lg rounded-lg overflow-hidden transition-shadow" role="none">
                    <a href="#" className="flex flex-col justify-between h-full p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1 mr-1 sm:mr-2">
                                <h1 className="text-gray-900 font-semibold text-lg mb-2">{item.title}</h1>
                                <p className="text-gray-700 text-sm mb-2 break-words">{item.content}</p>
                            </div>
                        </div>
                    </a>
                </article>
                )
                )}
            </div>
        </div>
        </div>
      {/* Route content */}
      <div className="w-9/12 mx-auto mt-4">
        <Routes>
          <Route path="work" element={<Work />} />
          <Route path="resume" element={<Resume />} />
          <Route path="hiring" element={<Hiring />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserData;
