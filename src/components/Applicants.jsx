import React from 'react';
import ApplicantCard from './ApplicantCard';

const applicants = [
  {
    id: 1,
    name: 'Jane Smith',
    role: 'Senior Frontend Developer',
    email: 'jane.smith@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    appliedDate: '3/10/2023',
    status: 'Pending',
  },
];

const Applicants = () => {
  return (
    <div className="applicants-list">
      {applicants.map((applicant) => (
        <ApplicantCard key={applicant.id} applicant={applicant} />
      ))}
    </div>
  );
};

export default Applicants;
