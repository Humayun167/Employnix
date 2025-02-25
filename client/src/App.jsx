import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJobs from "./pages/ApplyJobs";
import Applications from "./pages/Applications";
import RecruiterLogin from "./components/RecruiterLogin";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import ManageJobs from "./pages/ManageJobs";
import ViewApplication from "./pages/ViewApplication";
function App() {

  const {showRecruiterLogin} = useContext(AppContext)
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin></RecruiterLogin>}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/apply-job/:id" element={<ApplyJobs></ApplyJobs>} />
        <Route path="/applications" element={<Applications></Applications>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="add-job" element={<AddJob></AddJob>} />
        <Route path="manage-jobs" element={<ManageJobs></ManageJobs>} />
        <Route path="view-application" element={<ViewApplication></ViewApplication>} />
        {/* <Route path="manage-jobs" element={<ManageJobs></ManageJobs>} /> */}

      </Routes>
    </div>
  );
}

export default App;
