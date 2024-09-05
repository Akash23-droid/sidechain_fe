import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { usePrivy } from "@privy-io/react-auth";
import LoadingScreen from "../Component/LoadingScreen1"; // Import the LoadingScreen component

const Dashboard = () => {
  const [resume, setResume] = useState(null);
  const [githubLink, setGithubLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = usePrivy();
  const navigate = useNavigate();

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
    // production or local env variables
    try {
      const response = await axios.post(
        `https://sidechain-kb2s5rha1-akashs-projects-271485dc.vercel.app/upload`, // Update the API endpoint URL
        // `http://localhost:3000/upload`, // Update the API endpoint URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      console.log("data : ", data);
      // Extract GitHub username from the link
      const usernameMatch = githubLink.match(/github\.com\/([^/]+)\/?$/);
      const githubUsername = usernameMatch ? usernameMatch[1] : "";

      // Navigate to Dashboard2 with all the response data
      navigate("/dashboard2", { state: { ...data, githubUsername } });
    } catch (error) {
      console.error("Error uploading resume:", error);
      setIsLoading(false); // Stop loading on error
    }
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

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
              className="
                                w-full
                                px-4 py-2
                                border border-gray-300
                                rounded-md
                                shadow-sm
                                text-sm
                                focus:border-indigo-500
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                            "
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
