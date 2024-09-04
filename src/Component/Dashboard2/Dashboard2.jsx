// import React from "react";
// import { useLocation } from "react-router-dom";

// const Dashboard2 = () => {
//   const location = useLocation();
//   const { skills } = location.state;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
//         <h1 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
//           Your Skills
//         </h1>
//         <ul className="space-y-2">
//           {skills.map((skill, index) => (
//             <li key={index} className="flex items-center">
// <i className={`${skill.icon} text-2xl mr-2`}></i>
// <span>{skill.name}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard2;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import MainContainer from "./MainContainer";
import RightSidebar from "./RightSidebar";
import { usePrivy } from "@privy-io/react-auth";

function Dashboard2() {
  const location = useLocation();
  // const { skills, projects, education } = location.state || {
  //   skills: [],
  //   projects: [],
  //   education: [],
  // };
  const { githubUsername } = location.state || {
    skills: [],
    githubUsername: "",
  };
  const { user } = usePrivy();
  const { skills } = location.state;
  console.log("skills : ", skills);
  // useEffect(() => {
  //   if (user) {
  //     console.log("Privy User Details:", {
  //       email: user.email || "No email found",
  //       username: user.username || "No username found",
  //       id: user.id || "No user ID found",
  //     });
  //   }
  //   console.log("Skills:", skills);
  //   console.log("Projects:", projects);
  //   console.log("Education:", education);
  // }, [skills, projects, education, user]);

  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <MainContainer
        skills={skills}
        githubUsername={githubUsername}
        // projects={projects}
        // education={education}
      />
      <RightSidebar />
    </div>
  );
}

export default Dashboard2;
