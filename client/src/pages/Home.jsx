import Hero from "../components/Hero";
import JobListing from "../components/JobListing";
import Navbar from "./../components/Navbar";
const Home = () => {
  return (
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
       <JobListing></JobListing>
      </div>

  );
};

export default Home;
