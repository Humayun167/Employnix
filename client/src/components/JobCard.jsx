import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const JobCard = ({ job }) => {

     const navigate = useNavigate()

  return (
    <div className="border p-6 shadow  rounded">
      <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
        <img className="h-8" src={assets.company_icon} alt="" />
      </div>
      <h3 className="font-medium text-xl mt-2">{job.title}</h3>
      <div className="flex items-center gap-3 mt-2 text-xs ">
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
          {job.location}
        </span>
        <span className="bg-red-50 border border-red-200 px-4 py-1.5 rounded">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-500 text-sm mt-4"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>
      <div className="mt-4 flex gap-4 text-sm">
        <button onClick={()=>{navigate(`/apply-job/${job._id}`);scrollTo}} className="bg-blue-600 text-white px-4 py-2 rounded">
          Apply Now
        </button>
        <button onClick={()=>{navigate(`/apply-job/${job._id}`);scrollTo}} className="bg-red-600 text-white px-4 py-2 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
