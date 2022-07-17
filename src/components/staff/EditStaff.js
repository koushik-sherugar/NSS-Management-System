import React from "react";

const EditStaff = () => {
  return (
    <div>
      {/* <form action="#" method="POST">
        <div className="form container mx-auto px-4 mt-4">
          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 capitalize text-gray-900">
                    Profile
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Enter your personal details here.
                  </p>
                </div>
              </div>

              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className=" after:content-['*'] after:ml-0.5 after:text-red-500  block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          id="first-name"
                          autoComplete="given-name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                          //value={data.first_name}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className=" after:content-['*'] after:ml-0.5 after:text-red-500  block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          id="last-name"
                          autoComplete="last_name"
                          className="pl-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                          //value={data.last_name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form> */}

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
                <h1>STAFF DATA EDIT</h1>
              </div>
              <form method="post" className="py-4 px-8">
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
              </form>

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
        </div>
      </div>
    </div>
  );
};

export default EditStaff;
