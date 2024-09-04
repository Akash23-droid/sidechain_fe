import React, { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useLocation } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";

function MainContainer({ githubUsername, handleJoin }) {
  const { logout } = usePrivy();
  const location = useLocation();
  // const { skills, projects, education } = location.state || {
  //   skills: [],
  //   projects: [],
  //   education: [],
  // };
  // const { user } = usePrivy();
  const [userData, setUserData] = useState({
    name: "",
    avatar_url: "",
    username: "",
  });
  const { skills } = location.state;
  console.log("skills : ", skills);

  useEffect(() => {
    const fetchGitHubUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}`
        );
        const data = await response.json();
        setUserData({
          name: data.name,
          avatar_url: data.avatar_url,
          username: data.login,
        });
      } catch (error) {
        console.error("Error fetching GitHub user data:", error);
      }
    };

    if (githubUsername) {
      fetchGitHubUserData();
    }
  }, [githubUsername]);

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  return (
    <div className="flex-1 ml-64 mr-64 mt-4 p-4">
      <header className="bg-blue-600 text-white p-4 shadow-md border-b border-gray-300">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </header>
      <main className="flex-1 mt-4">
        <div className="bg-white border border-gray-300 p-4 rounded shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Your Skills:</h2>
          {skills.length > 0 ? (
            <ul className="list-disc pl-5 mb-4">
              {skills.map((skill, index) => (
                <li key={index} className="py-1">
                  {/* <i className={`${skill.icon} text-2xl mr-2`}></i> */}
                  <i
                    className={`${skill.icon} text-2xl mr-2`}
                    onError={(e) =>
                      (e.target.className =
                        "devicon-devicon-plain text-2xl mr-2")
                    }
                  ></i>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mb-4">No skills found. Please upload your resume.</p>
          )}

          {/* <h2 className="text-2xl font-semibold mb-4">Your Projects:</h2>
          {projects?.length > 0 ? (
            <ul className="list-disc pl-5 mb-4">
              {projects?.map((project, index) => (
                <li key={index} className="py-1">
                  {project}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mb-4">No projects found.</p>
          )} */}

          {/* <h2 className="text-2xl font-semibold mb-4">Your Education:</h2>
          {education?.length > 0 ? (
            <ul className="list-disc pl-5 mb-4">
              {education?.map((edu, index) => (
                <li key={index} className="py-1">
                  {edu}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mb-4">No education information found.</p>
          )} */}
          {githubUsername && (
            <div>
              <h3>GitHub Contributions for {githubUsername}:</h3>
              <GitHubCalendar username={githubUsername} />
            </div>
          )}

          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}

export default MainContainer;
