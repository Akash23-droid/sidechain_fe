import React, { useEffect, useState } from "react";
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
  const { skills } = location?.state;
  
  const [loginDetails, setLoginDetails] = useState({
    method: "Unknown",
    username: "",
    email: "",
    url: "",
    clientId: "", 
    profilePicture: "" 
  });

  useEffect(() => {
    if (user) {
      const loginInfo = {
        method: "Unknown",
        username: "",
        email: "",
        url: "",
        clientId: user.id || "", 
        profilePicture: "" 
      };
      loginInfo.email = user?.google?.email;
      console.log("loginInfo.email : ", loginInfo?.email);
      console.log("user email : ", user?.email);


      if (user.google) {
        loginInfo.method = "Google";
        loginInfo.username = user.google.name;
        loginInfo.email = user.google.email;
        loginInfo.profilePicture = user.google.picture; 
      } else if (user.github) {
        loginInfo.method = "GitHub";
        loginInfo.username = user.github.username;
        loginInfo.url = user.github.profile || `https://github.com/${user.github.username}`;
        loginInfo.email = user.github.email;
        loginInfo.profilePicture = user.github.avatar_url; 
      } else if (user.email) {
        loginInfo.method = "Email";
        loginInfo.email = user.email;
      } else if (user.wallet) {
        loginInfo.method = "Wallet";
        loginInfo.username = user.wallet.address;
      }

      setLoginDetails(loginInfo);

      console.log("Login Details:", loginInfo);
      console.log("Client ID:", loginInfo.clientId);
    } else {
      console.log("User data not available");
    }

    console.log("Data from Dashboard:", { skills, githubUsername });
  }, [skills, githubUsername, user]);

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block">
        <LeftSidebar />
      </div>

      <div className="flex-1">
        <MainContainer skills={skills} githubUsername={githubUsername} />
        
        <div className="text-center mt-4">
          <p>Logged in via: {loginDetails.method}</p>
          {loginDetails.profilePicture && (
            <img
              src={loginDetails.profilePicture}
              alt="Profile"
              style={{ width: "100px", borderRadius: "50%" }}
            />
          )}
          
          {loginDetails.method === "Google" && (
            <p>Google Username: {loginDetails.username}, Email: {loginDetails.email}</p>
          )}
          {loginDetails.method === "GitHub" && (
            <p>GitHub Username: {loginDetails.username}, URL: {loginDetails.url},  Email: {loginDetails.email}</p>
          )}
          {loginDetails.method === "Email" && (
            <p>Email: {loginDetails.email}</p>
          )}
          {loginDetails.method === "Wallet" && (
            <p>Wallet Address: {loginDetails.username}</p>
          )}

          <p>Client ID: {loginDetails.clientId}</p>
        </div>
      </div>

      <div className="hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Dashboard2;
