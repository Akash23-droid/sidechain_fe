import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LeftSidebar from "./LeftSidebar1";
import MainContainer from "./MainContainer1";
import RightSidebar from "./RightSidebar1";
import { usePrivy } from "@privy-io/react-auth";
// import { supabase } from "../Supabase/supabaseClient";

function Dashboard2() {
  const location = useLocation();
  // const { githubUsername } = location.state || {
  //   skills: [],
  //   githubUsername: "",
  // };
  // const { githubUsername, skills } = location.state || {
  //   githubUsername: "",
  //   skills: [],
  // };
  const { githubUsername = "", skills = [] } = location.state || {};
  const { user } = usePrivy();
  // const { skills } = location?.state;

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block">
        <LeftSidebar />
      </div>

      <div className="flex-1">
        <MainContainer skills={skills} githubUsername={githubUsername} />
      </div>
      <div className="hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Dashboard2;
