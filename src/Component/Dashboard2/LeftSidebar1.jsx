import React from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaBriefcase,
  FaSearch,
  FaBlog,
} from "react-icons/fa";

function LeftSidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col fixed top-0 left-0 bottom-0 p-4 border-r border-gray-300">
      <div className="p-4 border-b border-gray-200">
        <img src="" alt="Logo" className="w-32 h-auto" />
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 p-4">
          <li className="flex items-center space-x-2">
            <FaHome className="text-gray-600" />
            <a href="#scroll" className="block p-2 hover:bg-gray-100">
              Scroll
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaProjectDiagram className="text-gray-600" />
            <a href="#projects" className="block p-2 hover:bg-gray-100">
              Projects
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaBriefcase className="text-gray-600" />
            <a href="#jobs" className="block p-2 hover:bg-gray-100">
              Jobs
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaSearch className="text-gray-600" />
            <a href="#search" className="block p-2 hover:bg-gray-100">
              Search
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaBlog className="text-gray-600" />
            <a href="#blog" className="block p-2 hover:bg-gray-100">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default LeftSidebar;
