import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
import Homepage from './pages/homepage';
import MainLayout from './layouts/mainlayout';
import JobsPage from './pages/jobspage';
import NotFoundPage from './pages/notfoundpage';
import JobPage, { jobLoader } from './pages/jobpage';
import AddJobPage from './pages/AddJobPage';
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />{' '}
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
