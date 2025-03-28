import { Link, useNavigate } from "react-router-dom";
import { assets } from "./../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate =useNavigate()

  const {setShowRecruiterLogin} = useContext(AppContext)

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        {/* <img  className="cursor-pointer" src={assets.logo} alt="" /> */}
        <button onClick={()=>navigate('/')}  className="cursor-pointer text-2xl font-bold"> <span class="text-black ">Employ</span><span class="text-violet-700">Nix</span></button>
        {
          user 
          ? 
          <div className="flex items-center gap-3">
            <Link to={"/application"}>Applied Job</Link>
            <p></p>
            <p className="max-sm:hidden">Hi , {user.firstName + " " + user.lastName}</p>
            <UserButton></UserButton>
          </div>
         :<div className="flex gap-4 max-sm:text-xs">
            <button onClick={e=>setShowRecruiterLogin(true)} className="text-gray-600">Recruiter Login</button>
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white sm:px-9 py-2 rounded-full"
            >
              Login
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
