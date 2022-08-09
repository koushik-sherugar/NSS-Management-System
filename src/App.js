import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Redirect from "./pages/Redirect";
import Adminwindow from "./components/layout/Adminwindow";

import SendMail from "./components/SendMail";
// import StaffAdminLogin from "./pages/StaffAdminLogin";
// import StudentStaffLogin from "./pages/StudentStaffLogin";

// student
import StudentRegister from "./components/student/StudentRegister";
import StudentLogin from "./components/student/StudentLogin";
import ListStudents from "./components/student/ListStudents";
import EditStudent from "./components/student/EditStudent";
import DashboardStudent from "./components/student/DashboardStudent";

import Admin from "./pages/Admin";
import Footer from "./components/layout/Footer";

import ListStaff from "./components/staff/ListStaff";
import AddStaff from "./components/staff/AddStaff";
import EditStaff from "./components/staff/EditStaff";
import StaffRegister from "./components/staff/StaffRegister";
import StaffLogin from "./components/staff/StaffLogin";
import StaffDashboard from "./components/layout/stafflayout/StaffDashboard";

// university
import ListUniversity from "./components/university/ListUniversity";
import AddUniversity from "./components/university/AddUniversity";

//activity
import AddActivity from "./components/activity/AddActivity";
import ListActivity from "./components/activity/ListActivity";
import ActivityCard from "./components/activity/ActivityCard";

// university
import ListCollege from "./components/college/ListCollege";
import AddCollege from "./components/college/AddCollege";
// import EditCollege from "./components/college/EditCollege";

//admin
import AdminLogin from "./components/admin/AdminLogin";
import Chart from "./components/Chart";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        // autoClose={3000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="*" element={<ErrorPage />} exact />

        <Route path="/studentregister" element={<StudentRegister />} exact />
        <Route path="/studentlogin" element={<StudentLogin />} exact />
        <Route path="/liststudents" element={<ListStudents />} exact />
        <Route path="/editstudent" element={<EditStudent />} exact />
        <Route path="/dashboardstudent" element={<DashboardStudent />} exact />

        <Route path="/redirect" element={<Redirect />} exact />

        <Route path="/sendmail" element={<SendMail />} exact />
        <Route path="/adminwindow" element={<Adminwindow />} exact />

        {/*
        <Route
          path="/studentstafflogin"
          element={<StudentStaffLogin />}
          exact
        /> */}

        <Route path="/admin" element={<Admin />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/chart" element={<Chart />} exact />

        {/* staff */}
        <Route path="/addstaff" element={<AddStaff />} exact />
        <Route path="/Liststaff" element={<ListStaff />} exact />
        <Route path="/editstaff/" element={<EditStaff />} exact />
        <Route path="/staffregister" element={<StaffRegister />} exact />
        <Route path="/stafflogin" element={<StaffLogin />} exact />
        <Route path="/staffdashboard" element={<StaffDashboard />} exact />

        {/* university */}
        <Route path="/adduniversity" element={<AddUniversity />} exact />
        <Route
          path="/adduniversity/update/:university_id"
          element={<AddUniversity />}
          exact
        />
        <Route path="/listuniversity" element={<ListUniversity />} exact />

        {/* college */}

        <Route path="/addcollege/create" element={<AddCollege />} exact />
        <Route path="/listcollege" element={<ListCollege />} exact />
        {/* <Route path="/editcollege/:id/edit" element={<EditCollege />} exact /> */}

        {/* activity */}
        <Route path="/addactivity" element={<AddActivity />} exact />
        <Route path="/listactivity" element={<ListActivity />} exact />
        <Route path="/activitycard" element={<ActivityCard />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
