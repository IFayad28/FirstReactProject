import Hero from '../components/hero';
import HomeCards from '../components/homecards';
import JobListings from '../components/joblistings';
import ViewAllJobs from '../components/viewalljobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome="true" />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
