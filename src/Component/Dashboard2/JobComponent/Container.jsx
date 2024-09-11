import React from "react";
import { FiSearch } from 'react-icons/fi'; // Import search icon
import { IoIosArrowDown } from 'react-icons/io'; // Import icons for Category and Type
import { RiUser6Fill } from 'react-icons/ri'; // Import user icon
import { FaMapMarkerAlt, FaDollarSign, FaCalendarAlt } from 'react-icons/fa'; // Import location, dollar, and calendar icons

const Container = () => {
    return (
        <div className="w-[90%] h-full mx-auto bg-white p-2 flex flex-col space-y-5">
            
            {/* Header and Paragraph */}
            <div className="flex flex-col space-y-4">
                <h1 className="text-3xl font-bold text-gray-800">Discover the best opportunities in Crypto</h1>
                <p className="text-sm text-gray-700">
                    We are curating a set of jobs, grants, events, and all kinds of other opportunities in crypto.<br/>
                    You can apply to them with your POAPs and other web3 credentials.
                </p>
            </div>

            {/* Search Bar */}
            <div className="flex items-center bg-slate-100 rounded-md p-2 w-full">
                <FiSearch className="text-gray-800 ml-2 mr-2" />
                <span className="text-gray-400">Search</span>
            </div>

            {/* Category and Type */}
            <div className="flex space-x-4 items-center w-full">
                <div className="flex items-center">
                    <span className="text-xs font-medium mr-2">Category</span>
                    <IoIosArrowDown className="text-gray-700" />
                </div>
                <div className="flex items-center">
                    <span className="text-xs font-medium mr-2">Type</span>
                    <IoIosArrowDown className="text-gray-700" />
                </div>
            </div>

            {/* Card */}
            <div className="w-full bg-slate-100 rounded-md p-3 px-6 flex flex-col space-y-4">
                {/* Card Header */}
                <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs text-gray-600">Logo</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">Company Name</span>
                        <p className="text-sm text-gray-700 mt-1">
                            This is a brief description of the company.
                        </p>
                        <div className="flex items-center mt-2 bg-slate-200 rounded-full p-1">
                            <RiUser6Fill className="text-gray-700 mr-2" />
                            <p className="text-xs text-gray-700">Less than 10 people work here</p>
                        </div>
                    </div>
                </div>

                {/* Additional Box Inside the Card */}
                <div className="border border-gray-300 bg-slate-100 rounded-md p-2 flex flex-col space-y-2 ">

                    <div className="flex items-center space-x-4">
                        <div className="w-9 h-5 bg-blue-500 rounded-full flex items-center justify-center ml-2">
                            <span className="text-xs text-white">Job</span>
                        </div>
                        <span className="text-sm font-semibold">Role</span>
                    </div>
                    {/* Location, Duration, Payscale Row */}
                    <div className="flex w-full text-xs text-gray-600 justify-between items-center">
                        <div className="flex space-x-4 ml-12"> 
                            <div className="flex items-center space-x-1">
                                <FaMapMarkerAlt className="text-gray-400" />
                                <span className="text-gray-400">Location Name</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <FaCalendarAlt className="text-gray-400" />
                                <span className="text-gray-400">Duration</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <FaDollarSign className="text-gray-400" />
                                <span className="text-gray-400">Payscale</span>
                            </div>
                        </div>

                        {/* Apply Button */}
                        <button className="bg-black text-white rounded-md py-1 px-3 mr-2">Apply</button> {/* Added some margin-right to adjust */}
                    </div>



                    <div className="border-t border-gray-300 my-4"></div>
                    
                    <div className="flex items-center space-x-4">
                        <div className="w-9 h-5 bg-blue-500 rounded-full flex items-center justify-center ml-2">
                            <span className="text-xs text-white">Job</span>
                        </div>
                        <span className="text-sm font-semibold">Role</span>
                    </div>
                    
                    {/* Location, Duration, Payscale Row */}
                    <div className="flex w-full text-xs text-gray-600 justify-between items-center">
                    <div className="flex space-x-4 ml-12"> 
                        <div className="flex items-center space-x-1">
                            <FaMapMarkerAlt className="text-gray-400" />
                            <span className="text-gray-400">Location Name</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaCalendarAlt className="text-gray-400" />
                            <span className="text-gray-400">Duration</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaDollarSign className="text-gray-400" />
                            <span className="text-gray-400">Payscale</span>
                        </div>
                    </div>

                    {/* Apply Button */}
                    <button className="bg-black text-white rounded-md py-1 px-3 mr-2">Apply</button> {/* Added some margin-right to adjust */}
                </div>

                </div>
            </div>
            {/* Card */}
            <div className="w-full bg-slate-100 rounded-md p-6 flex flex-col space-y-4">
                {/* Card Header */}
                <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs text-gray-600">Logo</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">Company Name</span>
                        <p className="text-sm text-gray-700 mt-1">
                            This is a brief description of the company.
                        </p>
                        <div className="flex items-center mt-2 bg-slate-200 rounded-md p-2">
                            <RiUser6Fill className="text-gray-700 mr-2" />
                            <p className="text-xs text-gray-700">Less than 10 people work here</p>
                        </div>
                    </div>
                </div>

                {/* Additional Box Inside the Card */}
                <div className="border border-gray-300 bg-slate-100 rounded-md p-3 flex flex-col space-y-4 ">

                    <div className="flex items-center space-x-4">
                        <div className="w-9 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">Job</span>
                        </div>
                        <span className="text-sm font-semibold">Role</span>
                    </div>
                    <div className="flex w-full space-x-4 text-xs text-gray-600 ml-12">
                        <div className="flex items-center space-x-1">
                            <FaMapMarkerAlt className="text-gray-400" />
                            <span className="text-gray-400">Location Name</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaCalendarAlt className="text-gray-400" />
                            <span className="text-gray-400">Duration</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaDollarSign className="text-gray-400" />
                            <span className="text-gray-400">Payscale</span>
                        </div>
                        <button className="bg-black text-white rounded-md py-1 px-3">Apply</button>
                    </div>

                    <div className="border-t border-gray-300 my-4"></div>
                    
                    <div className="flex items-center space-x-4">
                        <div className="w-9 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">Job</span>
                        </div>
                        <span className="text-sm font-semibold">Role</span>
                    </div>
                    <div className="flex w-full space-x-4 text-xs text-gray-600 ml-12">
                        <div className="flex items-center space-x-1">
                            <FaMapMarkerAlt className="text-gray-400" />
                            <span className="text-gray-400">Location Name</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaCalendarAlt className="text-gray-400" />
                            <span className="text-gray-400">Duration</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaDollarSign className="text-gray-400" />
                            <span className="text-gray-400">Payscale</span>
                        </div>
                        <button className="bg-black text-white rounded-md py-1 px-3">Apply</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Container;
