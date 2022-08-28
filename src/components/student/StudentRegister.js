import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../pages/Navbar";

const initialState = {
  first_name: "",
  last_name: "",
  parent_name: "",
  aadhar_no: "",
  email_id: "",
  gender: "",
  blood_group: "",
  dob: "",
  mob_no: "",
  category: "",
  street_address: "",
  city: "",
  postal_code: "",
  state_name: "",
  university_name: "",
  college_name: "",
  course: "",
  register_no: "",
  university_id: "",
  college_id: "",
  interests: "",
  achievements: "",
};
export default function StudentRegister() {
  const [state, setState] = useState(initialState);
  const {
    first_name,
    last_name,
    parent_name,
    aadhar_no,
    email_id,
    gender,
    blood_group,
    dob,
    mob_no,
    category,
    street_address,
    city,
    postal_code,
    state_name,
    university_name,
    college_name,
    course,
    university_id,
    register_no,
    college_id,
    interests,
    achievements,
  } = state;

  const navigate = useNavigate();
  const { student_id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getstudent/${student_id}`)
      .then((resp) => {
        setState({ ...resp.data[0] });
      });
  }, [student_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first_name || !register_no) {
      toast.error("please enter the values in input");
    } else {
      if (!student_id) {
        axios
          .post("http://localhost:5000/api/studentregister", {
            first_name,
            last_name,
            parent_name,
            aadhar_no,
            email_id,
            gender,
            blood_group,
            dob,
            mob_no,
            category,
            street_address,
            city,
            postal_code,
            state_name,
            university_name,
            college_name,
            course,
            university_id,
            register_no,
            college_id,
            interests,
            achievements,
          })
          .then(() => {
            setState({
              first_name: "",
              last_name: "",
              parent_name: "",
              aadhar_no: "",
              email_id: "",
              gender: "",
              blood_group: "",
              dob: "",
              mob_no: "",
              category: "",
              street_address: "",
              city: "",
              postal_code: "",
              state_name: "",
              university_name: "",
              college_name: "",
              course: "",
              university_id: "",
              register_no: "",
              college_id: "",
              interests: "",
              achievements: "",
            });
          })
          .catch((err) => {
            toast.error(err.response.data);
          });
        toast.success("data added sucessfully");
        setTimeout(() => navigate("/studentdashboard"), 500);
      } else {
        axios
          .put(`http://localhost:5000/api/updatestudent/${student_id}`, {
            first_name,
            last_name,
            parent_name,
            aadhar_no,
            email_id,
            gender,
            blood_group,
            dob,
            mob_no,
            category,
            street_address,
            city,
            postal_code,
            state_name,
            university_name,
            college_name,
            course,
            university_id,
            register_no,
            college_id,
            interests,
            achievements,
          })
          .then(() => {
            setState({
              first_name: "",
              last_name: "",
              parent_name: "",
              aadhar_no: "",
              email_id: "",
              gender: "",
              blood_group: "",
              dob: "",
              mob_no: "",
              category: "",
              street_address: "",
              city: "",
              postal_code: "",
              state_name: "",
              university_name: "",
              college_name: "",
              course: "",
              university_id: "",
              register_no: "",
              college_id: "",
              interests: "",
              achievements: "",
            });
          })
          .catch((err) => {
            toast.error(err.response.data);
          });
        toast.success("data added sucessfully");
        setTimeout(() => navigate("/activitycard"), 500);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} action="#" method="POST">
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
                          value={first_name || ""}
                          onChange={handleInputChange}
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
                          value={last_name || ""}
                          onChange={handleInputChange}
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
                          value={parent_name || ""}
                          onChange={handleInputChange}
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
                          value={aadhar_no || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="email-id"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          name="email_id"
                          id="email-id"
                          autoComplete="given-email"
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                          value={email_id || ""}
                          onChange={handleInputChange}
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
                          value={gender || ""}
                          onChange={handleInputChange}
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
                          value={blood_group || ""}
                          onChange={handleInputChange}
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
                          value={dob || ""}
                          onChange={handleInputChange}
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
                          value={mob_no || ""}
                          onChange={handleInputChange}
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
                          value={category || ""}
                          onChange={handleInputChange}
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
                            className="shadow-sm px-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder=" 
                             enter your address"
                            value={street_address || ""}
                            onChange={handleInputChange}
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
                          value={city || ""}
                          onChange={handleInputChange}
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
                          value={postal_code || ""}
                          onChange={handleInputChange}
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
                          name="state_name"
                          autoComplete="state"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={state_name || ""}
                          onChange={handleInputChange}
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
                              //     value={parent_name || ""}
                              // onChange={handleInputChange}
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
                          University name
                        </label>

                        <select
                          id="university_name"
                          name="university_name"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={university_name || ""}
                          onChange={handleInputChange}
                        >
                          <option disabled selected value>
                            select university
                          </option>
                          <option>Manglore</option>
                          <option>Dharwad</option>
                          <option>Banglore</option>
                          <option>Hasan</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="college_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          college name
                        </label>
                        {/* <input
                          type="text"
                          name="college_name"
                          id="college-name"
                          autoComplete="college_name"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                          value={college_name || ""}
                          onChange={handleInputChange}
                        /> */}
                        <select
                          id="college_name"
                          name="college_name"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={college_name || ""}
                          onChange={handleInputChange}
                        >
                          <option disabled selected value>
                            select college
                          </option>
                          <option>
                            Bandarkars arts and science college kundapur
                          </option>
                          <option>Dharwad institute of commerce</option>
                          <option>National college of arts</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="course"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Course
                        </label>

                        <select
                          id="course"
                          name="course"
                          className="pl-2 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={course || ""}
                          onChange={handleInputChange}
                        >
                          <option disabled selected value>
                            select course
                          </option>
                          <option>BCA</option>
                          <option>BCOM</option>
                          <option>Bsc</option>
                          <option>BBA</option>
                          <option>MCA</option>
                          <option>MBA</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
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
                          value={register_no || ""}
                          onChange={handleInputChange}
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="college_id"
                          className="block text-sm font-medium text-gray-700"
                        >
                          College id
                        </label>
                        <input
                          type="number"
                          name="college_id"
                          min="0"
                          oninput="this.value = Math.abs(this.value)"
                          id="college_id"
                          autoComplete="college_id"
                          value={college_id || ""}
                          onChange={handleInputChange}
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="university_id"
                          className="block text-sm font-medium text-gray-700"
                        >
                          University id
                        </label>
                        <input
                          type="number"
                          name="university_id"
                          min="0"
                          oninput="this.value = Math.abs(this.value)"
                          id="university_id"
                          autoComplete="university_id"
                          value={university_id || ""}
                          onChange={handleInputChange}
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div>

                      {/* <div className="col-span-6 sm:col-span-3 lg:col-span-4">
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
                          value={register_no || ""}
                          onChange={handleInputChange}
                          className="mt-1 pl-2
                          focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                        />
                      </div> */}

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
                            rows={3}
                            value={interests || ""}
                            onChange={handleInputChange}
                            className="shadow-sm  px-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder=" enter your hobbies and the field of interest"
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
                            value={achievements || ""}
                            onChange={handleInputChange}
                            className="shadow-sm  px-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder=" enter the honours and awards won by you"
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
