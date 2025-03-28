import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBusinessTime, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import ApplicantsTable from "./ApplicantsTable"; // Import ApplicantsTable component

export default function JobCard({ job }) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showApplicants, setShowApplicants] = useState(false);

    // Sample applicants (Replace with real API data)
    const applicants = [
        { id: 1, name: "John Doe", email: "john@example.com", experience: "3 years" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", experience: "5 years" },
        { id: 3, name: "Mark Johnson", email: "mark@example.com", experience: "2 years" },
    ];

    return (
        <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 mb-4">
            {/* Header Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={job.logo} alt={`${job.company} logo`} className="w-6 h-6" />
                    <h2 className="text-lg font-semibold">{job.title}</h2>
                </div>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-lg">
                    {job.datePosted}
                </span>
            </div>

            {/* Job Info */}
            <div className="flex items-center text-gray-600 text-sm gap-4 mt-2">
                <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faLocationDot} /> <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faBusinessTime} /> <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCalendarDays} /> <span>{job.datePosted}</span>
                </div>
            </div>

            {/* Job Description */}
            <div className="text-sm text-gray-700 mt-3">
                {/* Truncated Text for Laptop & Tablet */}
                <p className="hidden md:line-clamp-2 lg:line-clamp-2 ">
                    We are looking for a skilled {job.title} to join {job.company}. As a key member of our team, 
                    you will be responsible for delivering high-quality work while collaborating with talented professionals. 
                    This role requires expertise in industry best practices and a passion for innovation. 
                    If you're ready to take on new challenges and grow your career, apply now!
                </p>

                {/* Full Text for Mobile with Toggle */}
                <p className={`md:hidden transition-all ${showFullDescription ? "" : "line-clamp-2"}`}>
                    We are looking for a skilled {job.title} to join {job.company}. As a key member of our team, 
                    you will be responsible for delivering high-quality work while collaborating with talented professionals. 
                    This role requires expertise in industry best practices and a passion for innovation. 
                    If you're ready to take on new challenges and grow your career, apply now!
                </p>

                {/* Show Details / Hide Details Button (Only Mobile) */}
                <button
                    className="text-blue-600 text-sm mt-1 font-medium no-underline hover:text-blue-800 md:hidden"
                    onClick={() => setShowFullDescription(!showFullDescription)}
                >
                    {showFullDescription ? "Hide Details" : "Show Details"}
                </button>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-4 gap-2">
                <button className="w-1/2 bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    View Details
                </button>
                <button 
                    className="w-1/2 bg-gray-200 text-sm px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                    onClick={() => setShowApplicants(!showApplicants)}
                >
                    {showApplicants ? "Hide Applicants" : "View Applicants"}
                </button>
            </div>

            {/* Show ApplicantsTable when "View Applicants" is clicked */}
            {showApplicants && <ApplicantsTable applicants={applicants} />}
        </div>
    );
}




















  

  