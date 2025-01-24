import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import JobListing from "../components/JobListing";
import Navbar from "./../components/Navbar";
const Home = () => {
  return (
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
       <JobListing></JobListing>
       <AppDownload></AppDownload>
       <Footer></Footer>
      </div>

  );
};

export default Home;
