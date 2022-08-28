import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
// import bgimg from "../../assets/images/detailsbg.jpg";
const ViewUniversity = () => {
  const [university, setUniversity] = useState({});
  const { university_id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/get/${university_id}`).then((resp) => {
      setUniversity({ ...resp.data[0] });
    });
  }, [university_id]);

  return (
    <>
      <Layout>
        <main className="profile-page mt-0 ml-72">
          <section className="relative block h-500-px">
            <image
              className="absolute top-0  w-full bg-center bg-cover"
              // src={bgimg}
              // style={{ backgroundImage: `url(${bgimg})` }}
              //     style="
              //     background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80');
              //   "
            />
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-100 bg-indigo-700"
            ></span>
            {/* </image> */}
            <div
              className="top-auto  bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              // style="transform: translateZ(0px)"
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-orange-400">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-80">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full  px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        {/* <img
                        alt="..."
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      /> */}
                        {/* <svg
                        className="h-60 w-60 shadow-l rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        xmlns="http://www.w3.org/2000/svg"
                        // class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg> */}
                      </div>
                    </div>
                    {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"> */}
                    {/* <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div> */}
                    {/* </div> */}
                    <div className="w-full justify-center text-center  px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="p-3 text-center">
                          {/* <span className="text-xl  text-blueGray-700 font-bold block uppercase tracking-wide text-blueGray-600">
                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                            Role :{" "}
                            <p className="inline text-indigo-700">STAFF</p>
                          </span> */}
                          <h1 className=" text-indigo-700">
                            UNIVERSITY DETAILS
                          </h1>

                          {/* <span className="text-sm text-blueGray-500">
                          Has the power to access and modify student details Has the power to access and modify student details
                        </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                      University Name: {university.university_name}
                    </h3>
                    <div className="text-lg leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class=" inline-block mr-2 text-lg  text-blueGray-400 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                        />
                      </svg>
                      University Id: {university_id}
                    </div>
                    <div className="mb-2 text-blueGray-600 mt-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class=" inline-block mr-2 text-lg  text-blueGray-400 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                        />
                      </svg>
                      University Email {university.university_email}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      {/* University of Computer Science */}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          University has the power to add, delete and update the
                          details of the colleges which comes under it. It also
                          have access the activity details of colleges.
                        </p>
                        {/* <a
                          href="/listniversity"
                          className="font-normal text-indigo-700 "
                        >
                          Go Back
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};
export default ViewUniversity;
