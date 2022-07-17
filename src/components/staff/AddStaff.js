import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStaff = () => {
  let history = useNavigate();

  const [staff, setStaff] = useState({
    first_name: "",
    last_name: "",
    password: "",
  });
  const { first_name, last_name, password } = staff;

  const handleChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
    console.log(staff);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost/nms-ms/insert.php", staff)

      .then((result) => {
        if (result.data.Status == "Invalid") {
          alert("invalid user");
        } else {
          // props.history.push('/dashboard')
          history("/listStaff");
        }
      });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-center">Add Staff</h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block" for="Name">
                  College id
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              {/*               
              <span className="text-xs text-red-400">
                Password must be same!
              </span> */}
              <div className="flex">
                <button className="w-full px-6 py-2 mt-4 text-white bg-indigo-800 rounded-lg hover:bg-blue-900">
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Want to go back?
                <a className="text-indigo-600 hover:underline" href="#">
                  click here
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStaff;
