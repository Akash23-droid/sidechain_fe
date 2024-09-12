import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";
// import { useState } from "react";
import { supabase } from "../Supabase/supabaseClient";

function RightSidebar() {
  const navigate = useNavigate();
  const { user, logout } = usePrivy();
  const [jobs, setJobs] = useState([]);

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  const handleJoin = () => {
    navigate("/jobs");
  };
  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("jobs") // your table name
        .select("*"); // fetch all rows and columns

      if (error) {
        console.error("Error fetching jobs:", error);
      } else {
        setJobs(data);
      }
    };

    fetchJobs();
  }, []);

  return (
    <aside className="w-64 bg-white shadow-lg fixed top-0 right-0 bottom-0 p-4 border-l border-gray-300">
      <div className="p-4 flex space-x-2">
        <button
          type="button"
          onClick={handleLogout}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Logout
        </button>

        <button
          type="button"
          onClick={handleJoin}
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Jobs
        </button>
      </div>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {console.log("jobs: ", jobs)}
        {jobs.map((jobs) => {
          return (
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                {/* <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://supabase.com/dashboard/img/supabase-logo.svg"
                    alt="Neil image"
                  />
                </div> */}
                <div className="flex-1 min-w-0">
                  {/* <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {jobs.company_name}
              </p> */}
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {jobs.company_name}
                  </p>
                </div>
                {/* <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  {jobs.job_title}
                </div> */}
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default RightSidebar;
