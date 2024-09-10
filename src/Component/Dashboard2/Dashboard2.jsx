import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LeftSidebar from "./LeftSidebar1";
import MainContainer from "./MainContainer1";
import RightSidebar from "./RightSidebar1";
import { usePrivy } from "@privy-io/react-auth";
// import { supabase } from "../Supabase/supabaseClient";

function Dashboard2() {
  const location = useLocation();
  const { githubUsername } = location.state || {
    skills: [],
    githubUsername: "",
  };
  const { user } = usePrivy();
  const { skills } = location.state;
  console.log("skills : ", skills);
  console.log("supabase : ", supabase);

  useEffect(() => {
    // Check if user data is available
    if (user) {
      console.log("Privy User Details:", {
        email: user.email || "No email found",
        username: user.username || "No username found",
        id: user.id || "No user ID found",
      });
    } else {
      console.log("User data not available");
    }
    console.log("email : ", user.email);
    console.log("username : ", user.username);
    console.log("id : ", user.id);
    // Log data from the Dashboard component
    console.log("Data from Dashboard:", { skills, githubUsername });
  }, [skills, githubUsername, user]);

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
