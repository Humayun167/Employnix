import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-300 text-white py-16 text-center mx-2 rounded-xl">
        <h1 className="text-2xl md:3xl lg:text-4xl font-medium mb-4">
          Over 10,000+ jobs to apply{" "}
        </h1>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Your Next Big Career Move Starts Right Here - Explore the Best Job
          Opportunities and Take the First Step Toward Your Future!
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl mx-4 sm:mx-auto">
          <div className="flex items-center gap-2 p-2">
            <img src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="mx-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>
          <div className="flex items-center gap-2 p-2">
            <img src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="Search for Location"
              className="mx-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>

          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300 mr-4">
            Search
          </button>
        </div>
      </div>

      <div className="border border-gray-300 shadow-md mx-2 mt-5 flex justify-between items-center p-6  rounded-md"> 
        <p className="font-medium"> Trust</p>
        <img className="h-6" src={assets.microsoft_logo} alt="" />
        <img className="h-6" src={assets.walmart_logo} alt="" />
        <img className="h-6" src={assets.accenture_logo} alt="" />
        <img className="h-6" src={assets.samsung_logo} alt="" />
        <img className="h-6" src={assets.adobe_logo} alt="" />
        <img className="h-6" src={assets.amazon_logo} alt="" />

      </div>
    </div>
  );
};

export default Hero;
