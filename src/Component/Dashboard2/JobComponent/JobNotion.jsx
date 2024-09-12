import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { supabase } from "../../Supabase/supabaseClient";
import { FaMapMarkerAlt, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { usePrivy } from "@privy-io/react-auth";

const JobNotion = () => {
  const [job, setJob] = useState(null);
  const { jobTitle } = useParams();
  const location = useLocation();
  const { jobId: initialJobId } = location.state || {}; // Renaming for clarity
  const [jobId, setJobId] = useState(initialJobId); // Track current job ID
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [otherJobs, setOtherJobs] = useState([]);
  const { user, isAuthenticated } = usePrivy();
  const [LoggedInUser, setLoggedInUser] = useState("");

  //   useEffect(() => {
  //     const fetchJobDetails = async () => {
  //       if (!jobId) return;

  //       const { data, error } = await supabase
  //         .from("jobs")
  //         .select("*")
  //         .eq("id", jobId)
  //         .single();

  //       if (error) {
  //         console.error("Error fetching job details:", error);
  //       } else {
  //         setJob(data);
  //       }
  //     };

  //     fetchJobDetails();
  //   }, [jobId]);
  // Fetch the current job details when jobId changes
  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!jobId) return;

      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", jobId)
        .single();

      if (error) {
        console.error("Error fetching job details:", error);
      } else {
        setJob(data); // store the fetched job in the state
      }
    };

    fetchJobDetails();

    // Fetch other jobs excluding the current job
    const fetchOtherJobs = async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .neq("id", jobId) // Fetch all jobs except the current one
        .limit(10); // Limit to 10 jobs

      if (error) {
        console.error("Error fetching other jobs:", error);
      } else {
        setOtherJobs(data); // store other jobs in the state
      }
    };

    fetchOtherJobs();
  }, [jobId]); // Fetch jobs whenever jobId changes

  // Handle click on the "Apply" button
  const handleApplyClick = (selectedJobId) => {
    setJobId(selectedJobId); // Update jobId, which triggers a re-fetch of job data
  };

  // Toggle showing more jobs
  const handleViewAllClick = () => {
    setShowAllJobs(!showAllJobs);
  };

  // Display 2 jobs or all based on showAllJobs state
  const jobsToShow = showAllJobs ? otherJobs : otherJobs.slice(0, 2);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <img
              src="https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png"
              alt="Sidechain Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="text-xl font-semibold text-white">sidechain</span>
          </div>
          <div className="space-x-4">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-gray-600">
              Apply
            </button>
            {/* <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600">
              Start Hiring
            </button> */}
            {/* <button className="text-gray-300 hover:text-white">
              Sign In →{LoggedInUser}
            </button> */}
          </div>
        </header>

        {/* Banner Image */}
        <div
          className="h-40 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-lg mb-8"
          style={{ height: "300px", borderRadius: "30px" }}
        >
          {/* <img
            src="https://png.pngtree.com/background/20210709/original/pngtree-smoke-black-background-picture-image_322080.jpg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          /> */}
        </div>

        {/* Company Info */}
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-2/3 pr-8">
            <div className="flex items-center mb-4">
              <img
                src="https://supabase.com/dashboard/img/supabase-logo.svg"
                alt="Super Team Logo"
                className="h-16 w-16 rounded-lg mr-4"
              />
              <h1 className="text-2xl font-bold text-white">
                {job.company_name}
              </h1>
            </div>
            <p className="text-gray-300 mb-4">{job.duration}</p>
          </div>
          <div
            className="md:w-1/3 mt-4 md:mt-0"
            style={{
              border: "1px solid grey",
              borderRadius: "20px",
              padding: "3%",
              width: "25%",
              marginLeft: "10%",
            }}
          >
            <h2 className="text-xl font-semibold mb-2 text-white">Overview</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-gray-400">Website</p>
                <p className="text-white">domain.gg</p>
              </div>
              <div>
                <p className="text-gray-400">Size</p>
                <p className="text-white">{job.employee_count}</p>
              </div>
              <div>
                <p className="text-gray-400">HQ</p>
                <p className="text-white">{job.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        {/* Job Description */}
        <div className="mb-8" style={{ width: "70%" }}>
          <h2 className="text-xl font-semibold mb-4 text-white">
            <span className="bg-green-700 px-2 py-1 rounded">ABOUT</span>
          </h2>
          <p className="text-gray-300">{job.description}</p>
        </div>
        {/* Funding Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Expected Salary
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-gray-400">Total</p>
              <p className="font-semibold text-white">{job.payscale}</p>
            </div>
            <div>
              <p className="text-gray-400">Location</p>
              <p className="font-semibold text-white">{job.location}</p>
            </div>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-white">
            <span className="bg-green-700 px-2 py-1 rounded">JOBS</span>
            <button
              className="text-green-400 ml-4 hover:text-green-300"
              onClick={handleViewAllClick}
            >
              {showAllJobs ? "Show Less ←" : "View All →"}
            </button>
          </h2>
          <div className="space-y-4">
            {jobsToShow.map((otherJob) => (
              <div
                key={otherJob.id}
                className="flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-white">
                    {otherJob.company_name}
                  </h3>
                  <div className="flex space-x-2 text-sm text-gray-400">
                    <span>{otherJob.location}</span>
                    <span>{otherJob.type}</span>
                    <span>{otherJob.job_type}</span>
                    <span className="bg-gray-700 px-2 py-1 rounded">
                      {otherJob.payscale}
                    </span>
                  </div>
                </div>
                <button
                  className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500"
                  onClick={() => handleApplyClick(otherJob.id)}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bounties Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">
            <span className="bg-green-700 px-2 py-1 rounded">BOUNTIES</span>
            <button className="text-green-400 ml-4 hover:text-green-300">
              View All →
            </button>
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-white">
                  Write A Twitter (X) Thread
                </h3>
                <div className="flex space-x-2 text-sm text-gray-400">
                  <span className="bg-gray-700 px-2 py-1 rounded">
                    #RESEARCH
                  </span>
                  <span className="bg-gray-700 px-2 py-1 rounded">
                    #TESTING
                  </span>
                  <span className="bg-gray-700 px-2 py-1 rounded">#BUGS</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-green-700 text-white px-3 py-1 rounded-full font-semibold">
                  $900
                </span>
                <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500">
                  View
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-white">
                  Product Testing and Feedback
                </h3>
                <div className="flex space-x-2 text-sm text-gray-400">
                  <span className="bg-gray-700 px-2 py-1 rounded">
                    #RESEARCH
                  </span>
                  <span className="bg-gray-700 px-2 py-1 rounded">
                    #TESTING
                  </span>
                  <span className="bg-gray-700 px-2 py-1 rounded">#BUGS</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-green-700 text-white px-3 py-1 rounded-full font-semibold">
                  $900
                </span>
                <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobNotion;
// import React from "react";

// function JobNotion() {
//   return (
//     <div>
//       <h1>JobNotion</h1>
//     </div>
//   );
// }

// export default JobNotion;
