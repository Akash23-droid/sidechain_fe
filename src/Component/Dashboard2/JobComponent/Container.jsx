import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi"; // Import search icon
import { IoIosArrowDown } from "react-icons/io"; // Import icons for Category and Type
import { RiUser6Fill } from "react-icons/ri"; // Import user icon
import { FaMapMarkerAlt, FaDollarSign, FaCalendarAlt } from "react-icons/fa"; // Import location, dollar, and calendar icons
import { supabase } from "../../Supabase/supabaseClient";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../LoadingScreen1";

const Container = () => {
  const [jobs, setJobs] = useState([]);
  // const [isLoading, setIsLoading] = useState(true); // Track loading state
  const navigate = useNavigate();

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
      // Ensure the loader shows for at least 2 seconds
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 2000);
    };

    fetchJobs();
  }, []);
  const handleApply = (jobTitle, jobId) => {
    // Use the job title for the URL, but pass the job ID as state
    const urlFriendlyJobTitle = jobTitle.toLowerCase().replace(/\s+/g, "-");
    navigate(`/jobs/${urlFriendlyJobTitle}`, { state: { jobId } });
  };
  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  return (
    <div className="w-[90%] h-full mx-auto bg-gray-900 p-2 flex flex-col space-y-5 text-white">
      {/* Header and Paragraph */}
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold text-gray-100">
          Discover the best opportunities in Crypto
        </h1>
        <p className="text-sm text-gray-300">
          We are curating a set of jobs, grants, events, and all kinds of other
          opportunities in crypto.
          <br />
          You can apply to them with your POAPs and other web3 credentials.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-800 rounded-md p-2 w-full">
        <FiSearch className="text-gray-300 ml-2 mr-2" />
        <span className="text-gray-400">Search</span>
      </div>

      {/* Category and Type */}
      <div className="flex space-x-4 items-center w-full">
        <div className="flex items-center">
          <span className="text-xs font-medium mr-2">Category</span>
          <IoIosArrowDown className="text-gray-400" />
        </div>
        <div className="flex items-center">
          <span className="text-xs font-medium mr-2">Type</span>
          <IoIosArrowDown className="text-gray-400" />
        </div>
      </div>

      {/* Card */}
      <div className="w-[90%] h-full mx-auto bg-gray-800 p-2 flex flex-col space-y-5">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="w-full bg-gray-700 rounded-md p-3 px-6 flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-4">
              <div
                className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
                style={{ width: "25%", height: "35%" }}
              >
                <img
                  src="https://supabase.com/dashboard/img/supabase-logo.svg"
                  alt={`${job.company_name} logo`}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">
                  {job.company_name}
                </span>
                <p className="text-sm text-gray-300 mt-1">{job.description}</p>
                <div className="flex items-center mt-2 bg-gray-600 rounded-full p-1">
                  <p className="text-xs text-gray-300">{job.employee_count}</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-500 bg-gray-700 rounded-md p-2 flex flex-col space-y-2">
              <span className="text-sm font-semibold">{job.job_title}</span>
              <div className="flex w-full text-xs text-gray-400 justify-between items-center">
                <div className="flex space-x-4 ml-12">
                  <div className="flex items-center space-x-1">
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{job.payscale}</span>
                  </div>
                </div>
                <button
                  className="bg-gray-900 text-white rounded-md py-1 px-3 mr-2"
                  onClick={() => handleApply(job.job_title, job.id)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Card */}
    </div>
  );
};

export default Container;
