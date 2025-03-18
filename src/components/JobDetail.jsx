import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './module.css';

const JobDetail = () => {
  const { id } = useParams();

  const jobs = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Google',
        location: 'California',
        address: '1600 Amphitheatre Parkway, Mountain View, CA 94043',
        description: 'We are looking for a skilled frontend developer to join our team...',
        salary: '$120K - $150K/year',
        contact: {
            name: 'John Doe',
            email: 'john.doe@google.com',
            phone: '123-456-7890'
        }
    },
    {
        id: 2,
        title: 'Backend Developer',
        company: 'Amazon',
        location: 'Seattle',
        address: '410 Terry Ave N, Seattle, WA 98109',
        description: 'Seeking an experienced backend developer to build and maintain services...',
        salary: '$110K - $140K/year',
        contact: {
            name: 'Jane Smith',
            email: 'jane.smith@amazon.com',
            phone: '987-654-3210'
        }
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Microsoft',
      location: 'New York',
      address: '11 Times Square, New York, NY 10036',
      description: 'Hiring a full stack developer with expertise in both frontend and backend...',
      salary: '$115K - $145K/year',
      contact: {
          name: 'Emily Johnson',
          email: 'emily.johnson@microsoft.com',
          phone: '555-123-4567'
      }
  },
  {
      id: 4,
      title: 'UI/UX Designer',
      company: 'Apple',
      location: 'San Francisco',
      address: '1 Apple Park Way, Cupertino, CA 95014',
      description: 'Looking for a creative UI/UX designer to enhance user experience...',
      salary: '$105K - $130K/year',
      contact: {
          name: 'Sarah Lee',
          email: 'sarah.lee@apple.com',
          phone: '123-987-6543'
      }
  },
  {
      id: 5,
      title: 'Frontend Engineer',
      company: 'Netflix',
      location: 'Los Angeles',
      address: '100 Winchester Circle, Los Gatos, CA 95032',
      description: 'We need a talented frontend engineer to build cutting-edge interfaces...',
      salary: '$125K - $155K/year',
      contact: {
          name: 'Mike Brown',
          email: 'mike.brown@netflix.com',
          phone: '999-123-4567'
      }
  },
  {
      id: 6,
      title: 'Backend Developer',
      company: 'IBM',
      location: 'Austin',
      address: '11501 Burnet Road, Austin, TX 78758',
      description: 'Join us as a backend developer to work on enterprise-level applications...',
      salary: '$108K - $135K/year',
      contact: {
          name: 'Chris Green',
          email: 'chris.green@ibm.com',
          phone: '888-654-3210'
      }
  },
  {
      id: 7,
      title: 'Full Stack Developer',
      company: 'Adobe',
      location: 'San Jose',
      address: '345 Park Avenue, San Jose, CA 95110',
      description: 'Seeking a full stack developer with experience in JavaScript and Node.js...',
      salary: '$110K - $140K/year',
      contact: {
          name: 'Alex White',
          email: 'alex.white@adobe.com',
          phone: '777-987-6543'
      }
  },
  {
      id: 8,
      title: 'UI/UX Designer',
      company: 'Tesla',
      location: 'Palo Alto',
      address: '3500 Deer Creek Road, Palo Alto, CA 94304',
      description: 'Hiring a UI/UX designer to create a seamless experience for customers...',
      salary: '$100K - $125K/year',
      contact: {
          name: 'Taylor Swift',
          email: 'taylor.swift@tesla.com',
          phone: '666-123-4567'
      }
  },
  {
      id: 9,
      title: 'Mobile Developer',
      company: 'Samsung',
      location: 'Seoul',
      address: '129 Samsung-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do, South Korea',
      description: 'Join our mobile team to create innovative apps for the global market...',
      salary: '$95K - $120K/year',
      contact: {
          name: 'Kang Lee',
          email: 'kang.lee@samsung.com',
          phone: '555-888-7777'
      }
  },
  {
      id: 10,
      title: 'Software Engineer',
      company: 'Intel',
      location: 'Santa Clara',
      address: '2200 Mission College Blvd, Santa Clara, CA 95054',
      description: 'We are looking for a software engineer to work on cutting-edge technology...',
      salary: '$112K - $138K/year',
      contact: {
          name: 'Nina Patel',
          email: 'nina.patel@intel.com',
          phone: '999-888-7777'
      }
  },
  {
      id: 11,
      title: 'Game Developer',
      company: 'Sony',
      location: 'Tokyo',
      address: '1-7-1 Konan, Minato-ku, Tokyo 108-0075, Japan',
      description: 'Seeking a game developer to create next-gen console and mobile games...',
      salary: '$90K - $115K/year',
      contact: {
          name: 'Hiro Tanaka',
          email: 'hiro.tanaka@sony.com',
          phone: '444-555-6666'
      }
  },
  {
    id: 12,
    title: 'Security Engineer',
    company: 'Cisco',
    location: 'San Francisco',
    address: '170 West Tasman Drive, San Jose, CA 95134',
    description: 'We need a security engineer to protect our systems and data...',
    salary: '$118K - $142K/year',
    contact: {
        name: 'Ashley Brown',
        email: 'ashley.brown@cisco.com',
        phone: '333-777-9999'
    }
},

    // Add more jobs here...
  ];

  // Convert id to number and find the job
  const job = jobs.find(job => job.id === Number(id));

  // ✅ Add check to prevent accessing undefined properties
  if (!job) {
    return <p>Job not found!</p>;
  }

  return (
     <div className={`${styles.container} ${styles.detailContainer}`}>
    <h2>{job.title}</h2>
    <p><strong>Company:</strong> {job.company}</p>
    <p><strong>Location:</strong> {job.location}</p>
    <p><strong>Address:</strong> {job.address}</p>
    <p><strong>Description:</strong> {job.description}</p>
    <p><strong>Salary:</strong> {job.salary}</p>
    
    {/* ✅ Combine contact details in one line */}
    {job.contact && (
      <p>
        <strong>Contact:</strong> {job.contact?.name} | {job.contact?.email} | {job.contact?.phone}
      </p>
    )}
  </div>
  );
};

export default JobDetail;




  
