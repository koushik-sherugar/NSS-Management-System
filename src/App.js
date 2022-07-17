import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";
// import StaffAdminLogin from "./pages/StaffAdminLogin";
// import StudentStaffLogin from "./pages/StudentStaffLogin";

// student
import StudentRegister from "./components/student/StudentRegister";
import StudentLogin from "./components/student/StudentLogin";
import ListStudents from "./components/student/ListStudents";
import EditStudent from "./components/student/EditStudent";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";

import ListStaff from "./components/staff/ListStaff";
import AddStaff from "./components/staff/AddStaff";
import EditStaff from "./components/staff/EditStaff";
import StaffRegister from "./components/staff/StaffRegister";
import StaffLogin from "./components/staff/StaffLogin";

// university
import ListUniversity from "./components/university/ListUniversity";
import AddUniversity from "./components/university/AddUniversity";
import EditUniversity from "./components/university/EditUniversity";

//activity
import AddActivity from "./components/activity/AddActivity";

// university
// import ListCollege from "./components/college/ListCollege";
import AddCollege from "./components/college/AddCollege";
// import EditCollege from "./components/college/EditCollege";

import Chart from "./components/Chart";

import Table from "./components/Table";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/studentregister" element={<StudentRegister />} exact />
        <Route path="/studentlogin" element={<StudentLogin />} exact />
        <Route path="/liststudents" element={<ListStudents />} exact />
        <Route path="/editstudent" element={<EditStudent />} exact />

        <Route path="/redirect" element={<Redirect />} exact />

        <Route path="/table" element={<Table />} exact />
        {/* <Route path="/staffadminlogin" element={<StaffAdminLogin />} exact />
        <Route
          path="/studentstafflogin"
          element={<StudentStaffLogin />}
          exact
        /> */}

        <Route path="/admin" element={<Admin />} exact />
        <Route path="/chart" element={<Chart />} exact />

        {/* staff */}
        <Route path="/addstaff" element={<AddStaff />} exact />
        <Route path="/Liststaff" element={<ListStaff />} exact />
        <Route path="/editstaff/" element={<EditStaff />} exact />
        <Route path="/staffregister" element={<StaffRegister />} exact />
        <Route path="/stafflogin" element={<StaffLogin />} exact />

        {/* :id/edit */}

        {/* university */}
        <Route path="/adduniversity/create" element={<AddUniversity />} exact />
        <Route path="/listuniversity" element={<ListUniversity />} exact />
        <Route
          path="/edituniversity/:id/edit"
          element={<EditUniversity />}
          exact
        />

        {/* college */}

        <Route path="/addcollege/create" element={<AddCollege />} exact />
        {/* <Route path="/listcollege" element={<ListCollege />} exact /> */}
        {/* <Route path="/editcollege/:id/edit" element={<EditCollege />} exact /> */}

        {/* activity */}
        <Route path="/addactivity" element={<AddActivity />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
