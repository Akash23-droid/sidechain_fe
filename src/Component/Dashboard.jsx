import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { usePrivy } from "@privy-io/react-auth";
import LoadingScreen from "../Component/LoadingScreen1"; // Import the LoadingScreen component
import { supabase } from "./Supabase/supabaseClient";
// import { checkUserExists, insertUser } from "./Supabase/supabaseUtils";

const Dashboard = () => {
  const [resume, setResume] = useState(null);
  const [githubLink, setGithubLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = usePrivy();
  const navigate = useNavigate();
  const { user, isAuthenticated } = usePrivy();
  const [userData, setUserData] = useState(null);
  const [loginDetails, setLoginDetails] = useState({
    method: "Unknown",
    username: "",
    email: "",
    url: "",
    clientId: "",
    profilePicture: "",
  });

  const handleFileChange = (event) => {
    if (event.target.files) {
      setResume(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading
    const formData = new FormData();
    formData.append("resume", resume);
    try {
      const response = await axios.post(
        `https://be-sidechain.vercel.app/upload`, // Update the API endpoint URL
        // `http://localhost:3000/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response.data;
      const usernameMatch = githubLink.match(/github\.com\/([^/]+)\/?$/);
      const githubUsername = usernameMatch ? usernameMatch[1] : "";

      // navigate("/dashboard2", { state: { ...data, githubUsername } });
      navigate("/dashboard2", {
        state: {
          skills: data.skills || [],
          githubUsername: githubUsername || "",
        },
      });
    } catch (error) {
      console.error("Error uploading resume:", error);
      setIsLoading(false); // Stop loading on error
    }
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  const extractUserInfo = (user) => {
    const mappings = {
      google: {
        method: "Google",
        username: user.google?.name,
        email: user.google?.email,
        profilePicture: user.google?.picture,
        clientId: user.google?.subject,
      },
      github: {
        method: "GitHub",
        username: user.github?.username,
        url:
          user.github?.profile || `https://github.com/${user.github?.username}`,
        // email: user.github?.email || user.github?.username,
        email: (
          user.github?.email || `${user.github?.username}@github.com`
        ).replace(/-/g, ""),
        clientId: user.github?.subject,
        profilePicture: user.github?.avatar_url,
      },
      email: {
        method: "Email",
        email: user.email,
      },
      wallet: {
        method: "Wallet",
        username: user.wallet?.address,
      },
    };

    for (const [key, value] of Object.entries(mappings)) {
      if (user[key]) {
        return value;
      }
    }

    return loginDetails; // Default unknown login details
  };

  // useEffect(() => {
  //   const storeUserData = async () => {
  //     if (user) {
  //       const loginInfo = extractUserInfo(user);
  //       setLoginDetails(loginInfo);

  //       const username = loginInfo.username;
  //       const email = loginInfo.email;
  //       const name = loginInfo.method;
  //       const profileUrl = loginInfo.profilePicture;

  //       const { error } = await supabase
  //         .from("users") // Assuming you have a 'users' table in Supabase
  //         .insert([{ username, email, name, profile_url: profileUrl }]);

  //       if (error) {
  //         console.error("Error storing user data in Supabase:", error);
  //       } else {
  //         console.log("User data successfully stored in Supabase");
  //       }

  //       setUserData({ username, email, name, profileUrl });
  //     }
  //   };

  //   storeUserData();
  // }, [isAuthenticated, user]);

  useEffect(() => {
    const storeUserData = async () => {
      if (user) {
        const loginInfo = extractUserInfo(user);
        setLoginDetails(loginInfo);

        const { username, email, name, profilePicture: profileUrl } = loginInfo;

        // Check if the user already exists in the 'users' table by email
        const { data: existingUser, error: fetchError } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .maybeSingle(); // Use maybeSingle to allow for no results

        if (fetchError) {
          console.error("Error checking for existing user:", fetchError);
          return;
        }

        // If the user doesn't exist, insert the new user data
        if (!existingUser) {
          const { error: insertError } = await supabase
            .from("users")
            .insert([{ username, email, name, profile_url: profileUrl }]);

          if (insertError) {
            console.error("Error storing user data in Supabase:", insertError);
          }
          // else {
          //   console.log("User data successfully stored in Supabase");
          // }
        }
        // else {
        //   console.log("User already exists in Supabase, skipping insert.");
        // }

        setUserData({ username, email, name, profileUrl });
      }
    };

    storeUserData();
  }, [isAuthenticated, user]);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (error) {
        console.error("Error fetching user data from Supabase:", error);
      }
      // else {
      //   console.log("Fetched user data from Supabase:");
      // }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg ring-2 ring-indigo-600">
        <h1 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
          Enter Your Details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 text-left text-sm">
              Upload Your Resume
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 text-left text-sm">
              GitHub Account
            </label>
            <input
              type="url"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="https://github.com/your-username"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="h-10 px-5 text-white bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
            >
              Submit
            </button>
            <button
              className="text-indigo-700 underline"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
