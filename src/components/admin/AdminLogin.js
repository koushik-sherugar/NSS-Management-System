import React, { useState, useEffect } from "react";
import Navbar from "../../pages/Navbar";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
};

const AdminLogin = () => {
  const [admin, setAdmin] = useState(initialState);

  const { name, email } = admin;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();

    const { name, email } = admin;

    axios
      .post("http://localhost:5000/api/adminlogin", {
        name,
        email,
      })
      .then((res) => {
        console.log("fonrtend", res);
        if (res.data.error) {
          toast.error("No user found");
          // console.log("error", res.data.error);
        } else {
          toast.success("Log in sucessfull");
          // navigate("/liststudents");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="w-full bg-gray-50 pt-5">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 text-red-700 text-center text-xl border-b border-grey-lighter">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="mt-3">ADMIN LOGIN</h1>
            </div>
            <div className="py-4 px-8">
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="name"
                  type="text"
                  name="name"
                  value={admin.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  for="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="email"
                  type="email"
                  name="email"
                  value={admin.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                />
              </div>

              <div className=" py-3 bg-white text-right sm:px-6  justify-center">
                <button
                  type="submit"
                  onClick={login}
                  className="w-100 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <p className="text-center my-4">
            <Link
              to="/staffregister"
              className="text-indigo-600 text-sm no-underline hover:text-grey-darker"
            >
              <h5>Back ?</h5>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
