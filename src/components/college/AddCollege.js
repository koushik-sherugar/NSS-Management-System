import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addcollege = () => {
  const navigate = useNavigate();

  const [college, setcollege] = useState({
    college_id: "",
    college_name: "",
    college_email: "",
  });
  // const { college_id, college_name, email } = college;
  const [inputs, setInputs] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    axios
      .post("http://localhost:80/nss-ms/college/save", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/listCollege");
      });

    // axios.post("http://localhost/nms-ms/insert.php", inputs)

    //   .then((result) => {
    //     if (result.data.Status == "Invalid") {
    //       alert("invalid user");
    //     } else {
    //       // props.history.push('/dashboard')
    //       history("/listcollege");
    //     }
    //   });
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <img className="mx-auto h-16 w-auto" src={logo} alt="Nss logo" /> */}

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add College
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
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="number"
                  name="university_id"
                  id="university-id"
                  autoComplete="university-id"
                  placeholder="enter university id"
                  onChange={handleChange}
                  className=" mt-5 appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="college_name"
                  id="college-name"
                  autoComplete="college-name"
                  placeholder="enter college name"
                  onChange={handleChange}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <input
                  id="email"
                  name="college_email"
                  type="email"
                  autoComplete="current-college_email"
                  required
                  onChange={(e) => handleChange(e)}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="email"
                />
              </div>

              <div>
                <textarea
                  id="text"
                  name="College_address"
                  type="text"
                  rows={3}
                  autoComplete="current-college_address"
                  required
                  onChange={(e) => handleChange(e)}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="enter college address"
                />
              </div>
            </div>

            <div>
              <input
                id="contact"
                name="college_contact_no"
                type="number"
                autoComplete="current-college_contact_no"
                required
                onChange={(e) => handleChange(e)}
                className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="contact number"
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add college
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addcollege;
