import React from "react";
import Sidebar from "./JobComponent/Sidebar";
import MainContent from "./JobComponent/MainContent";
import Container from "./JobComponent/Container";

const Jobs = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Jobs;
