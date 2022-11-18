import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Jobs = lazy(() => import('../pages/Jobs'));
const JobDetails = lazy(() => import('../pages/JobDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Jobs />}>
        <Route path="/jobs/:id" element={<JobDetails />}></Route>
      </Route>
    </Routes>
  );
};
