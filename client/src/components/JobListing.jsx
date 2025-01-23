import { useContext, useState } from "react";
import { AppContext } from "./../context/AppContext";
import {
  assets,
  JobCategories,
  JobLocations,
} from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);

  const [showFiler,setShowFilter]=useState(false)

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/*??? SideBAr */}
      <div className="w-full lg:w-1/4 px-4 bg-white">
        {/* Search filer from hero component */}

        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-600">
                {searchFilter.title && (
                  <span className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-500 px-4 py-1.5 rounded">
                    {searchFilter.title}
                    <img
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="ml-2 inline-flex items-center bg-blue-50 border border-blue-200 text-blue-500  px-4 py-1.5 rounded">
                    {searchFilter.location}
                    <img
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
              </div>
            </>
          )}


          <button onClick={e => setShowFilter(prev =>!prev)} className="px-6 py-1.5 rounded border-gray-400 lg:hidden ">
            {showFiler ? 'Close' : 'Filters'}
          </button>

        {/* Category Filter */}

        <div className="max-lg:hidden">
          <h4 className="font-medium text-lg py-4">Search By Category</h4>
          <ul className="space-y-2 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" name="" id="" />
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* SEARCH BY LOCATION */}
        <div className="max-lg:hidden">
          <h4 className="font-medium text-lg py-4 pt-14">Search By Location</h4>
          <ul className="space-y-2 text-gray-600">
            {JobLocations.map((Location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" name="" id="" />
                {Location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2">Latest Job</h3>
        <p className="mb-8">Get your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job}></JobCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobListing;
