import React from "react";

const AddActivity = () => {
  return (
    <div>
      <form action="#" method="POST">
        <div className="form container mx-auto px-4 mt-4">
          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 capitalize text-gray-900">
                    Activity
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Enter the activity details.
                  </p>
                </div>
              </div>

              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="college_id"
                          className=" after:content-['*'] after:ml-0.5 after:text-red-500  block text-sm font-medium text-gray-700"
                        >
                          College id
                        </label>
                        <input
                          type="number"
                          name="college_id"
                          id="first-name"
                          autoComplete="given-name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                          //onChange={handleChange}
                          //value={data.college_id}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="activity_name"
                          className=" after:content-['*'] after:ml-0.5 after:text-red-500  block text-sm font-medium text-gray-700"
                        >
                          Activity Name
                        </label>
                        <input
                          type="text"
                          name="activity_name"
                          id="last-name"
                          autoComplete="activity_name"
                          className="pl-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                          //onChange={handleChange}
                          //value={data.activity_name}
                        />
                      </div>
                    </div>

                    {/* //parents */}

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700 "
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          className="mt-1 pl-2 lg:text-lg sm:text-md text-gray-500
                           focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  sm:text-sm border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="total_present"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Total Present
                        </label>
                        <input
                          type="number"
                          name="total_present"
                          id="total-no"
                          autoComplete="total_present"
                          min="0"
                          oninput="this.value = Math.abs(this.value)"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                          //onChange={handleChange}
                          //value={data.total_present}
                        />
                      </div>
                    </div>

                    {/* ********** */}

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label
                          htmlFor="street_address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Street address
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="address"
                            name="street_address"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder=" 
                             enter your address"
                            //onChange={handleChange}
                            //value={data.street_address}
                          />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className=" block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="city"
                          className="mt-1 pl-2
                           focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                          //onChange={handleChange}
                          //value={data.city}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal_code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ZIP / Postal code
                        </label>

                        <input
                          type="number"
                          name="postal_code"
                          id="postal-code"
                          autoComplete="postal_code"
                          min="0"
                          oninput="this.value = Math.abs(this.value)"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                          //onChange={handleChange}
                          //value={data.postal_code}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <select
                          id="state"
                          name="state"
                          autoComplete="state"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          //onChange={handleChange}
                          //value={data.state}
                        >
                          <option disabled selected value>
                            select state
                          </option>
                          <option>Karnataka</option>
                          <option>Maharashtra</option>
                          <option>Delhi</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Photo
                      </label>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        {/* <button
                          type="file" name="image"
                          className="ml-5  bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          //onChange={handleChange} //value={data.image}
                        >
                          Select Image
                        </button> 
                         */}
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="image_upload"
                            className="ml-5  bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="image-upload"
                              name="image_upload"
                              type="file"
                              // //onChange={handleChange}
                              // //value={data.image_upload}
                              className="sr-only"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div> */}

          {/* collge details */}

          <div className="px-4 py-3 bg-white text-right sm:px-6 justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddActivity;
