import React from 'react';

const ApplicantCard = ({ applicant }) => {
  return (
    <div className="applicant-card">
      <div className="card-header">
        <h3>{applicant.name}</h3>
        <span className={`status ${applicant.status.toLowerCase()}`}>
          {applicant.status}
        </span>
      </div>
      <p className="role">{applicant.role}</p>
      <div className="contact-info">
        <p>📧 {applicant.email}</p>
        <p>📞 {applicant.phone}</p>
        <p>📍 {applicant.location}</p>
        <p>📅 Applied: {applicant.appliedDate}</p>
      </div>
      <div className="card-actions">
        <button className="btn">Show Details</button>
        <button className="btn status-btn">Status</button>
      </div>
    </div>
  );
};

export default ApplicantCard;
