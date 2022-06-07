
export default function Login() {
  return (
    <>
      <form action="#" method="POST">
        <div className="form container mx-auto px-4 mt-4">
          <div >

            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 capitalize text-gray-900">Profile</h3>
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
                        <label htmlFor="first-name" className=" after:content-['*'] after:ml-0.5 after:text-red-500  block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className=" after:content-['*'] after:ml-0.5 after:text-red-500  block text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="pl-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    {/* //parents */}

                    <div className="grid grid-cols-6 gap-6">


                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="parent-name" className=" block text-sm font-medium text-gray-700">
                          Parents/Gardian Name
                        </label>
                        <input
                          type="text"
                          name="parent-name"
                          id="parent-name"
                          autoComplete="parent-name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="aadhar-no" className="block text-sm font-medium text-gray-700">
                          Aadhar Number
                        </label>
                        <input
                          type="number"
                          name="aadhar-no"
                          id="aadhar-no"
                          autoComplete="aadhar-no"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="aadhar-no" className="block text-sm font-medium text-gray-700">
                          Pan Number
                        </label>
                        <input
                          type="number"
                          name="aadhar-no"
                          id="aadhar-no"
                          autoComplete="aadhar-no"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>


                    </div>

                    {/* ********** */}

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                        <label htmlFor="city" className=" block text-sm font-medium text-gray-700">
                          Gender
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="" disabled="disabled">select gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>

                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                        <label htmlFor="blood-group" className=" block text-sm font-medium text-gray-700">
                          Blood group
                        </label>
                        <select
                          id="blood"
                          name="blood"
                          autoComplete="blood-group"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="" disabled="disabled">select blood group</option>
                          <option>A+</option>
                          <option>A-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>AB+</option>
                          <option>AB-</option>
                          <option>O+</option>
                          <option>O-</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700 ">
                          Date of birth
                        </label>
                        <input
                          type="date"
                          name="dob"
                          id="dob"

                          className="mt-1 pl-2 lg:text-lg sm:text-md text-gray-500
                           focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  sm:text-sm border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="register-no" className="block text-sm font-medium text-gray-700">
                          Register Number
                        </label>
                        <input
                          type="number"
                          name="register-no"
                          id="register-no"
                          autoComplete="register-no"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>


                    </div>
                    {/* ****************************** */}

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="blood-group" className=" block text-sm font-medium text-gray-700">
                          Category (As mentioned by KEA)
                        </label>
                        <select
                          id="blood"
                          name="blood"
                          autoComplete="blood-group"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="" disabled="disabled">select blood group</option>
                          <option>2A</option>
                          <option>SC</option>
                          <option>OBC</option>
                          <option>ST</option>
                          <option>AB+</option>
                          <option>AB-</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="mob-no" className="block text-sm font-medium text-gray-700">
                          Mobile no
                        </label>
                        <input
                          type="number"
                          name="mob-no"
                          id="mob-no"
                          autoComplete="mob-no"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="email-id" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>


                        <input
                          type="email"
                          name="email-id"
                          id="email-id"
                          autoComplete="email"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>

                    </div>

                    {/* *************************************************************************** */}
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Street address
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="address"
                            name="address"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder=" 
                             enter your address"
                            defaultValue={''}
                          />

                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className=" block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-1 pl-2
                           focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className="mt-1 pl-2
                           focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          ZIP / Postal code
                        </label>


                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>

                    </div>

                    {/* *************************************************************************** */}

                    {/* <div>
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        About
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="you@example.com"
                          defaultValue={''}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description for your profile. URLs are hyperlinked.
                      </p>
                    </div> */}

                    {/* <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                Website
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                  http://
                                </span> 
                                <input
                                  type="text"
                                  name="company-website"
                                  id="company-website"
                                  className="h-8 focus:ring-indigo-200 focus:border-indigo-300  flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                  placeholder="www.example.com"
                                />
                              </div>
                            </div>
                          </div> */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Photo</label>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <button
                          type="button"
                          className="ml-5  bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Change
                        </button>
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

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">College details</h3>
                  <p className="mt-1 text-sm text-gray-600">Enter your college details.</p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">

                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="uni-name" className="block text-sm font-medium text-gray-700">
                          University / Institution
                        </label>
                        <input
                          type="text"
                          name="uni-name"
                          id="uni-name"
                          autoComplete="given-name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="college-name" className="block text-sm font-medium text-gray-700">
                          college name
                        </label>
                        <input
                          type="text"
                          name="college-name"
                          id="college-name"
                          autoComplete="college-name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="college-name" className="block text-sm font-medium text-gray-700">
                          Program
                        </label>
                        <input
                          type="text"
                          name="college-name"
                          id="college-name"
                          autoComplete="college-name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="college-name" className="block text-sm font-medium text-gray-700">
                          Course
                        </label>
                        <input
                          type="text"
                          name="college-name"
                          id="college-name"
                          autoComplete="college-name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                        />
                      </div>



                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className=" block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-1 pl-2
                           focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                          State / Province
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>



                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="pl-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="achievements" className="block text-sm font-medium text-gray-700">
                          Achievements                        </label>
                        <div className="mt-1">
                          <textarea
                            id="achievements"
                            name="achievements"
                            rows={3}
                            className="shadow-sm ml-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="  enter the honours and awards won by you"
                            defaultValue={''}
                          />

                        </div>

                      </div>


                    </div>
                  </div>

                </div>
                <div>
                  <label className=" mt-3 block text-sm font-medium text-gray-700">Upload your college Id card</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>



          {/* <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
              <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <legend className="sr-only">By Email</legend>
                    <div className="text-base font-medium text-gray-900" aria-hidden="true">
                      By Email
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">
                            Comments
                          </label>
                          <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="candidates" className="font-medium text-gray-700">
                            Candidates
                          </label>
                          <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="offers" className="font-medium text-gray-700">
                            Offers
                          </label>
                          <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                    <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div> 
      </div>*/}
        </div>
      </form>
    </>
  )
}
