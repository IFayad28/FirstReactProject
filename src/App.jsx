import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import HomeCards from './components/homecards.jsx';
import JobListings from './components/joblistings.jsx';
import ViewAllJobs from './components/viewalljobs.jsx';
const App = () => {
  return (
    <>
      <body>
        <Navbar />
        <Hero />
        <HomeCards />
        <JobListings />
        <ViewAllJobs />
      </body>
    </>
  );
};

export default App;
