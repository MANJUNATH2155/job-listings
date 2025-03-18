import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./module.css"; // Custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faBusinessTime,faHourglassEnd } from '@fortawesome/free-solid-svg-icons';
const JobCard = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);
  return (
    
    
    <div className="job-card position-relative">
    <div className="posted-date">{job.posted}</div>

    <div className="d-flex align-items-center gap-2">
      {job.logo && (
        <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
      )}
      <div>
        <h5 className="job-title mb-0">{job.title}</h5>
        <p className="job-meta mb-0">
        <FontAwesomeIcon icon={faLocationDot}  className="icon"/> {job.location} • <FontAwesomeIcon icon={faBusinessTime} className="icon"/> Full-time • <FontAwesomeIcon icon={faHourglassEnd} className="icon" />  
        &nbsp;{job.posted}
        </p>
      </div>
    </div>

    <p className="job-description">
        {/* Full description on desktop & tablet */}
        <span className="d-none d-md-block">{job.description}</span>
        
        {/* Short description + View More on mobile */}
        <span className="d-block d-md-none">
          {showFullDescription
            ? job.description
            : `${job.description?.slice(0, 100)}...`}
          {job.description && job.description.length > 100 && (
            <button onClick={toggleDescription} className="view-more-btn">
              {showFullDescription ? "View Less" : "View More"}
            </button>
          )}
        </span>
      </p>


    <div className="job-buttons d-flex justify-content-center gap-2">
      <Link to={`/jobs/${job.id}`} className="btn btn-dark">
        View Details
      </Link>
      <button className="btn btn-outline-dark">View Applicants</button>
    </div>
  </div>
);
};

export default JobCard;






