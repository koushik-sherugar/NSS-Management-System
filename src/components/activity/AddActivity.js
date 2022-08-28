import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  college_id: "",
  activity_name: "",
  date: "",
  total_present: "",
  report: "",
  image: "",
};

const AddActivity = () => {
  const [state, setState] = useState(initialState);
  const { college_id, activity_name, date, total_present, report, image } =
    state;

  const navigate = useNavigate();
  const { activity_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getactivity/${activity_id}`)
      .then((resp) => {
        setState({ ...resp.data[0] });
      });
  }, [activity_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!college_id || !activity_name) {
      toast.error("please enter the values in input");
    } else {
      if (!activity_id) {
        axios
          .post("http://localhost:5000/api/addactivity", {
            college_id,
            activity_name,
            date,
            total_present,
            report,
            image,
          })
          .then(() => {
            setState({
              college_id: "",
              activity_name: "",
              date: "",
              total_present: "",
              report: "",
              image: "",
            });
          })
          .catch((err) => {
            toast.error(err.response.data);
          });
        toast.success("activity added sucessfully");
        setTimeout(() => navigate("/listactivity"), 500);
      } else {
        axios
          .put(`http://localhost:5000/api/updateactivity/${activity_id}`, {
            college_id,
            activity_name,
            date,
            total_present,
            report,
            image,
          })
          .then(() => {
            setState({
              college_id: "",
              activity_name: "",
              date: "",
              total_present: "",
              report: "",
              image: "",
            });
          })
          .catch((err) => {
            toast.error(err.response.data);
          });
        toast.success("activity updated sucessfully");
        setTimeout(() => navigate("/listactivity"), 500);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="#" method="POST">
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
                          id="college_id"
                          autoComplete="given-id"
                          className="pl-2 mt-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md "
                          value={college_id || ""}
                          onChange={handleInputChange}
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
                          autoComplete="given-name"
                          className="pl-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm lg:text-lg sm:text-md border border-gray-300 rounded-md"
                          value={activity_name || ""}
                          onChange={handleInputChange}
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
                          value={date || ""}
                          onChange={handleInputChange}
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
                          value={total_present || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* ********** */}

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label
                          htmlFor="report"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Activity Report
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="report"
                            name="report"
                            rows={3}
                            className="shadow-sm px-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder=" 
                             enter details regarding the activity"
                            value={report || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* <label className="block text-sm font-medium text-gray-700">
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
                      {/* <div className="flex text-sm text-gray-600">
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
                      </div>*/}
                      {/* **************** */}
                      <div>
                        <label className=" mt-3 block text-sm font-medium text-gray-700">
                          Upload Activity photo
                        </label>
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
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 "
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="image"
                                  type="file"
                                  className="sr-only"
                                  value={image || ""}
                                  onChange={handleInputChange}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, up to 5MB
                            </p>
                          </div>
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
