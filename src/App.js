import "./App.css";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signup" element={<Signin />} exact />
        <Route path="/login" element={<Login />} exact />

        <Route path="/admin" element={<Admin />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
