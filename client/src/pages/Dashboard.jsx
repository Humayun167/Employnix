
import { assets } from './../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
const Dashboard = () => {


    const navigate = useNavigate()

    return (
        <div className="min-h-screen">
         {/* Navbar for Recruiter Panel */}
         <div className='shadow py-4'>
            <div className='px-5 flex justify-between items-center'>
                <img onClick={e=>navigate('/')} className='mx-sm:w-re cursor-pointer' src={assets.logo} alt="" />
                <div className='flex items-center gap-3'> 
                    <p className='max-sm:hidden'>Wellcome,Khan</p>
                    <div className='relative group'>
                        <img className='w-8 border rounded-full' src={assets.company_icon} alt="" />
                        <div className='absolute hidden group-hover:block  top-0 right-0 z-10 text-black rounded pt-12 '>
                            <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         </div>
            

        <div>
        <div className="flex">
            {/* Sidebar */}
            <div className="inline-block min-h-screen border-r-2">
                <ul className="flex flex-col items-start pt-5 text-gray-800">
                    <NavLink className={({isActive})=>` flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && ' bg-blue-100 border-r-4 border-blue-500 '}`}  to={'/dashboard/add-job'} >
                    <img src={assets.add_icon} alt="" />
                    <p>Add Jobs</p>
                    </NavLink>

                    <NavLink className={({isActive})=>` flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && ' bg-blue-100 border-r-4 border-blue-500 '}`} to={'/dashboard/manage-job'} >
                    <img src={assets.home_icon} alt="" />
                    <p>Manage Jobs</p>
                    </NavLink>
                    <NavLink className={({isActive})=>` flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && ' bg-blue-100 border-r-4 border-blue-500 '}`} to={'/dashboard/view-application'} >
                    <img src={assets.person_tick_icon} alt="" />
                    <p>View Applications</p>
                    </NavLink>
                </ul>
            </div>

            {/* Main Content */}
            <div className="w-3/4 p-4">
                <h2 className="text-xl mb-4">Add Job</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Job Title</label>
                        <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Job Description</label>
                        <textarea className="w-full p-2 border rounded"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Job Category</label>
                        <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Job Location</label>
                        <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Salary</label>
                        <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add</button>
                </form>
            </div>
        </div>
        </div>


        </div>
    );
};

export default Dashboard;