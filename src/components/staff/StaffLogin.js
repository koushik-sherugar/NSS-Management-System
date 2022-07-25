import React, { useState } from "react";
import AuthUser from "../../http";

import { Link } from "react-router-dom";
const StaffLogin = () => {
  const { http } = AuthUser();
  const [collegeid, setCollegeid] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const submitForm = () => {
    // console.log(email + "" + name);

    http.post("./login", { name: name, email: email }).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <div className="w-full bg-grey-lightest pt-5">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
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
                    onChange={(e) => setCollegeid(e.target.value)}
                    name="college_id"
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
                    onChange={(e) => setName(e.target.value)}
                    name="name"
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
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                />
              </div>

              <div className=" py-3 bg-white text-right sm:px-6  justify-center">
                <button
                  type="submit"
                  onClick={submitForm}
                  className="w-100 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
              <h5>Want to create an account?</h5>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffLogin;
