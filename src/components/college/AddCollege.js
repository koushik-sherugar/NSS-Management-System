import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  university_id: "",
  college_name: "",
  college_email: "",
  college_address: "",
  college_contact_no: "",
};
// const { university_id, college_name, college_email,college_address, college_contact_no } = college;

const Addcollege = () => {
  const [state, setState] = useState(initialState);
  const {
    university_id,
    college_name,
    college_email,
    college_address,
    college_contact_no,
  } = state;

  const navigate = useNavigate();
  // const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !university_id ||
      !college_email ||
      !college_address ||
      !college_contact_no
    ) {
      toast.error("please enter the values in input");
    } else {
      axios
        .post("http://localhost:5000/api/addcollege", {
          university_id,
          college_name,
          college_email,
          college_contact_no,
          college_address,
        })
        .then(() => {
          setState({
            university_id: "",
            college_name: "",
            college_email: "",
            college_contact_no: "",
            college_address: "",
          });
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
      toast.success("data added sucessfully");
      // setTimeout(() => navigate("/listcollege"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <img className="mx-auto h-16 w-auto" src={logo} alt="Nss logo" /> */}

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add College
            </h2>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                sign up now...
              </a>
            </p> */}
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="number"
                  name="university_id"
                  id="university-id"
                  min={0}
                  autoComplete="university-id"
                  placeholder="enter university id"
                  value={university_id || ""}
                  onChange={handleInputChange}
                  className=" mt-5 appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="college_name"
                  id="college-name"
                  autoComplete="college-name"
                  placeholder="enter college name"
                  value={college_name || ""}
                  onChange={handleInputChange}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <input
                  id="email"
                  name="college_email"
                  type="email"
                  autoComplete="current-college_email"
                  required
                  value={college_email || ""}
                  onChange={handleInputChange}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="email"
                />
              </div>
              <div>
                <input
                  id="contact"
                  name="college_contact_no"
                  type="number"
                  autoComplete="current-college_contact_no"
                  required
                  value={college_contact_no || ""}
                  onChange={handleInputChange}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="contact number"
                />
              </div>
              <div>
                <textarea
                  id="text"
                  name="college_address"
                  type="text"
                  rows={3}
                  autoComplete="current-college_address"
                  required
                  value={college_address || ""}
                  onChange={handleInputChange}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="enter college address"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add college
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addcollege;
