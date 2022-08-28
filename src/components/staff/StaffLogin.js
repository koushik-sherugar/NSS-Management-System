import React, { useState, useEffect } from "react";
import Navbar from "../../pages/Navbar";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  college_id: "",
  staff_name: "",
  staff_email: "",
};

const StaffLogin = () => {
  const [staff, setStaff] = useState(initialState);

  const { college_id, staff_name, staff_email } = staff;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff({
      ...staff,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();

    const { college_id, staff_name, staff_email } = staff;

    axios
      .post("http://localhost:5000/api/stafflogin", {
        college_id,
        staff_name,
        staff_email,
      })
      .then((res) => {
        // alert(res.data.message);
        console.log("fonrtend", res.data[0].staff_id);
        // var staffid= res.data[0].staff_id

        if (res.data.error) {
          toast.error("No user found");
        } else {
          toast.success("Log in sucessfull");
          navigate("/liststudents/");
          // navigate(`/liststudents/${res.data.staff_id}`);
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="w-full bg-grey-lightest bg-gray-50 pt-5">
        <div className="container mx-auto py-8">
          <form className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 text-indigo-700 text-center text-xl border-b border-grey-lighter">
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
              <h1>STAFF LOGIN</h1>
            </div>
            <div className="py-4 px-8">
              <div className="flex mb-4">
                <div className="w-1/2 mr-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    for="college_id"
                  >
                    College Id
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="first_name"
                    type="number"
                    name="college_id"
                    value={staff.college_id}
                    onChange={handleChange}
                    required
                    placeholder="enter college id"
                  />
                </div>
                <div className="w-1/2 ml-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    for="last_name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="name"
                    value={staff.staff_name}
                    onChange={handleChange}
                    name="staff_name"
                    type="text"
                    required
                    placeholder="enter name"
                  />
                </div>
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
                  name="staff_email"
                  value={staff.staff_email}
                  onChange={handleChange}
                  // value={staff_email}
                  // onChange={handleInputChange}

                  // onChange={(e) => {
                  //   setStaff_email(e.target.value);
                  // }}
                  placeholder="Your email address"
                />
              </div>

              <div className=" py-3 bg-white text-right sm:px-6  justify-center">
                <button
                  type="button"
                  onClick={login}
                  className="w-100 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <p className="text-center my-4">
            <Link
              to="/staffregister"
              className="text-indigo-600 text-sm no-underline hover:text-grey-darker"
            >
              <h5>Want to create an account?</h5>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
