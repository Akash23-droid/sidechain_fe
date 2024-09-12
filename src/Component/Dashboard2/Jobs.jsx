import React from "react";
import Sidebar from "./JobComponent/Sidebar";
import MainContent from "./JobComponent/MainContent";
import Container from "./JobComponent/Container";

const Jobs = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Jobs;
