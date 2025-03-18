import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/jobs/:id" element={<JobDetail />} />
    </Routes>
  );
}

export default App;


