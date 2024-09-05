import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LeftSidebar from "./LeftSidebar1";
import MainContainer from "./MainContainer1";
import RightSidebar from "./RightSidebar1";
import { usePrivy } from "@privy-io/react-auth";

function Dashboard2() {
  const location = useLocation();
  const { githubUsername } = location.state || {
    skills: [],
    githubUsername: "",
  };
  const { user } = usePrivy();
  const { skills } = location.state;
  console.log("skills : ", skills);

  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <MainContainer skills={skills} githubUsername={githubUsername} />
      <RightSidebar />
    </div>
  );
}

export default Dashboard2;
