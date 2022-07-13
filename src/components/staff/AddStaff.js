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
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <img className="mx-auto h-16 w-auto" src={logo} alt="Nss logo" /> */}

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add staff
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
            onSubmit={(e) => submitForm(e)}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="text"
                  name="first_name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="enter first name"
                  value={first_name}
                  onChange={(e) => handleChange(e)}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="last_name"
                  id="last-name"
                  autoComplete="last-name"
                  placeholder="enter last name"
                  value={last_name}
                  onChange={(e) => handleChange(e)}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => handleChange(e)}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Staff
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStaff;
