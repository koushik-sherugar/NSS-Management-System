import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUniversity = () => {
  const navigate = useNavigate();

  const [university, setuniversity] = useState({
    university_id: "",
    university_name: "",
    university_email: "",
  });
  // const { university_id, university_name, email } = university;
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
      .post("http://localhost:80/nss-ms/university/save", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/listuniversity");
      });

    // axios.post("http://localhost/nms-ms/insert.php", inputs)

    //   .then((result) => {
    //     if (result.data.Status == "Invalid") {
    //       alert("invalid user");
    //     } else {
    //       // props.history.push('/dashboard')
    //       history("/listuniversity");
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
              Add university
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
                {/* <input
                  type="text"
                  name="university_id"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="enter university id"
                  value={university_id}
                  onChange={(e) => handleChange(e)}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                /> */}
              </div>
              <div>
                <input
                  type="text"
                  name="university_name"
                  id="last-name"
                  autoComplete="last-name"
                  placeholder="enter university name"
                  onChange={handleChange}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  email
                </label>
                <input
                  id="email"
                  name="university_email"
                  type="email"
                  autoComplete="current-university_email"
                  required
                  onChange={(e) => handleChange(e)}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="email"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add university
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUniversity;
