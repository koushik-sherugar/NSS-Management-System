import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import ListStaff from "./components/staff/ListStaff";
import AddStaff from "./components/staff/AddStaff";
import EditStaff from "./components/staff/EditStaff";

// university
import ListUniversity from "./components/university/ListUniversity";
import AddUniversity from "./components/university/AddUniversity";
import EditUniversity from "./components/university/EditUniversity";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/login" element={<Login />} exact />

        <Route path="/admin" element={<Admin />} exact />

        <Route path="/addstaff" element={<AddStaff />} exact />
        <Route path="/Liststaff" element={<ListStaff />} exact />
        <Route path="/editstaff/:id/edit" element={<EditStaff />} exact />

        <Route path="/adduniversity/create" element={<AddUniversity />} exact />
        <Route path="/listuniversity" element={<ListUniversity />} exact />
        <Route
          path="/edituniversity/:id/edit"
          element={<EditUniversity />}
          exact
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
