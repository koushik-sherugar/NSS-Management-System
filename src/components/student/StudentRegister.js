import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentRegister() {
  // const navigate = useNavigate();

  // const [data, setData] = useState({
  //   first_name: "",
  //   last_name: "",
  //   parent_name: "",
  //   aadhar_no: "",
  //   email_id: "",
  //   gender: "",
  //   blood_group: "",
  //   dob: "",
  //   mob_no: "",
  //   category: "",
  //   street_address: "",
  //   city: "",
  //   postal_code: "",
  //   state: "",
  //   // image: "",

  //   university_name: "",
  //   college_name: "",
  //   course: "",
  //   register_no: "",
  //   interests: "",
  //   achievements: "",
  // });

  // const [inputs, setInputs] = useState([]);

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputs);

  // axios
  //   .post("http://localhost:80/nss-ms/registration/save", inputs)
  //   .then(function (response) {
  //     console.log(response.data);
  //     navigate("/student");
  //   });

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   const sendData = {
  //     first_name: data.first_name,
  //     last_name: data.last_name,
  //     parent_name: data.parent_name,
  //     aadhar_no: data.aadhar_no,
  //     email_id: data.email_id,
  //     gender: data.gender,
  //     blood_group: data.blood_group,
  //     dob: data.dob,
  //     mob_no: data.mob_no,
  //     category: data.category,
  //     street_address: data.street_address,
  //     city: data.city,
  //     postal_code: data.postal_code,
  //     state: data.state,
  //     // image: data.image,

  //     university_name: data.university_name,
  //     college_name: data.college_name,
  //     course: data.college_name,
  //     register_no: data.register_no,
  //     interests: data.interests,
  //     achievements: data.achievements,
  //   };
  //   console.log(sendData);
  //   axios.post("hhtp", sendData).then((result) => {
  //     if (result.data.Status == "Invalid") {
  //       alert("invalid user");
  //     } else {
  //       // props.history.push('/dashboard')
  //       history("/dashboard");
  //     }
  //   });
  // };

  return (
    <>
      <form action="#" method="POST">
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
                          //onChange={handleChange}
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
                          //onChange={handleChange}
                          //value={data.last_name}
                        />
                      </div>
                    </div>

                    {/* //parents */}

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="parent_name"
                          className=" block text-sm font-medium text-gray-700"
                        >
                          Parents/Gardian Name
                        </label>
                        <input
                          type="text"
                          name="parent_name"
                          id="parent-name"
                          autoComplete="parent_name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                          //onChange={handleChange}
                          //value={data.parent_name}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="aadhar_no"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Aadhar Number
                        </label>
                        <input
                          type="number"
                          name="aadhar_no"
                          id="aadhar-no"
                          autoComplete="aadhar_no"
                          min="0"
                          oninput="this.value = Math.abs(this.value)"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                          //onChange={handleChange}
                          //value={data.aadhar_no}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="email_id"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          name="email_id"
                          id="email-id"
                          autoComplete="email_id"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                          //onChange={handleChange}
                          //value={data.email_id}
                        />
                      </div>

                      {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
                      </div> */}
                    </div>

                    {/* ********** */}

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                        <label
                          htmlFor="gender"
                          className=" block text-sm font-medium text-gray-700"
                        >
                          Gender
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          autoComplete="gender"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          //onChange={handleChange}
                          //value={data.gender}
                        >
                          <option disabled selected value className="w-full">
                            gender
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-1">
                        <label
                          htmlFor="blood_group"
                          className=" block text-sm font-medium text-gray-700"
                        >
                          Blood group
                        </label>
                        <select
                          id="blood"
                          name="blood_group"
                          autoComplete="blood_group"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          //onChange={handleChange}
                          //value={data.blood_group}
                        >
                          <option disabled selected value>
                            select blood group
                          </option>
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
                        <label
                          htmlFor="dob"
                          className="block text-sm font-medium text-gray-700 "
                        >
                          Date of birth
                        </label>
                        <input
                          type="date"
                          name="dob"
                          id="dob"
                          className="mt-1 pl-2 lg:text-lg sm:text-md text-gray-500
                           focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  sm:text-sm border border-gray-300 rounded-md"
                          //onChange={handleChange}
                          //value={data.dob}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="mob_no"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Mobile no
                        </label>
                        <input
                          type="number"
                          name="mob_no"
                          id="mob-no"
                          autoComplete="mob_no"
                          min="0"
                          oninput="this.value = Math.abs(this.value)"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                          //onChange={handleChange}
                          //value={data.mob_no}
                        />
                      </div>
                    </div>
                    {/* ****************************** */}

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="category"
                          className=" block text-sm font-medium text-gray-700"
                        >
                          Category (As mentioned by KEA)
                        </label>
                        <select
                          id="category"
                          name="category"
                          autoComplete="category"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          //onChange={handleChange}
                          //value={data.category}
                        >
                          <option disabled selected value>
                            select category
                          </option>
                          <option>2A</option>
                          <option>SC</option>
                          <option>ST</option>
                          <option>OBC</option>
                        </select>
                      </div>

                      {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
                      </div> */}
                    </div>

                    {/* *************************************************************************** */}
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

                    {/* *************************************************************************** */}

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

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    College details
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Enter your college details.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="university_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          University / Institution
                        </label>
                        <input
                          type="text"
                          name="university_name"
                          id="uni-name"
                          autoComplete="university_name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                          //onChange={handleChange}
                          //value={data.university_name}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="college_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          college name
                        </label>
                        <input
                          type="text"
                          name="college_name"
                          id="college-name"
                          autoComplete="college_name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                          //onChange={handleChange}
                          //value={data.college_name}
                        />
                      </div>

                      {/* <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="college-name" className="block text-sm font-medium text-gray-700">
                          Program
                        </label>
                        <input
                          type="text"
                          name="program-name"
                          id="college-name"
                          autoComplete="college-name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                        />
                      </div> */}

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="college-name"
                          className="block text-sm font-medium text-gray-700"
                        >
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

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="register_no"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Register Number
                        </label>
                        <input
                          type="number"
                          name="register_no"
                          min="0"
                          oninput="this.value = Math.abs(this.value)"
                          id="register_no"
                          autoComplete="register_no"
                          //onChange={handleChange}
                          //value={data.register_no}
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>

                      {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
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
                      </div> */}

                      {/* <div className="col-span-6 sm:col-span-3">
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
                      </div> */}

                      <div className="col-span-6">
                        <label
                          htmlFor="interests"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Interests{" "}
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="interests"
                            name="interests"
                            rows={2}
                            //onChange={handleChange}
                            // //value={data.interests}
                            className="shadow-sm ml-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="  enter your hobbies and the field of interest"
                          />
                        </div>
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="achievements"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Achievements{" "}
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="achievements"
                            name="achievements"
                            rows={3}
                            //onChange={handleChange}
                            // //value={data.achievements}
                            className="shadow-sm ml-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="  enter the honours and awards won by you"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>
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
                </div> */}
              </div>
            </div>
          </div>

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
    </>
  );
}
// }
