import React from "react";
import { Link } from "react-router-dom";
const StaffRegister = () => {
  return (
    <div>
      <div className="w-full bg-grey-lightest pt-5">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
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
            <div className="py-4 px-8 text-indigo-700 text-center text-xl border-b border-grey-lighter">
              <h1>STAFF REGISTER</h1>
            </div>
            <div className="py-4 px-8">
              <div className="flex mb-4">
                <div className="w-1/2 mr-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                  >
                    College Id
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="first_name"
                    type="number"
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
                    type="text"
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
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  for="contact_no"
                >
                  contact number
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="contact_no"
                  type="number"
                  placeholder=" contact number"
                />
                {/* <p className="text-grey text-xs mt-1">At least 6 characters</p> */}
              </div>
              <div className="flex mb-4">
                <div className="w-1/3 mr-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                  >
                    Trained
                  </label>
                  <select
                    id="trained"
                    name="trained"
                    autoComplete="trained"
                    className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option disabled selected value className="w-full">
                      Yes/No
                    </option>
                    <option>yes</option>
                    <option>no</option>
                  </select>
                </div>
                <div className="w-1/3 mr-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                  >
                    Training center
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="center_name"
                    type="text"
                    placeholder="center name"
                  />
                </div>
                <div className="w-1/3 ml-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    for="year"
                  >
                    Year
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="year"
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                    placeholder="enter year"
                  />
                </div>
              </div>
              {/* <div className="flex items-center justify-between mt-8">
                <button
                  className="bg-indigo-700 text-center hover:bg-blue-dark font-bold py-2 px-4 rounded-full"
                  type="submit"
                >
                  Sign Up
                </button>
              </div> */}

              <div className=" py-3 bg-white text-right sm:px-6  justify-center">
                <button
                  type="submit"
                  className="w-100 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <p className="text-center my-4">
            <Link
              to="/stafflogin"
              className="text-indigo-600 text-sm no-underline hover:text-grey-darker"
            >
              <h5>Already have an account?</h5>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffRegister;
