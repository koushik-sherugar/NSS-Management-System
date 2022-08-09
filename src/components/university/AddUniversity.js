import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  university_name: "",
  university_email: "",
};

const EditUniversity = () => {
  const [state, setState] = useState(initialState);
  const { university_name, university_email } = state;

  const navigate = useNavigate();
  const { university_id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/put/${university_id}`).then((resp) => {
      setState({ ...resp.data[0] });
    });
  }, [university_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!university_name || !university_email) {
      toast.error("please enter the values in input");
    } else {
      axios
        .post("http://localhost:5000/api/post", {
          university_name,
          university_email,
        })
        .then(() => {
          setState({ university_name: "", university_email: "" });
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
      toast.success("data added sucessfully");
      setTimeout(() => navigate("/listuniversity"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Link
        to="/adminwindow"
        className="flex mt-3 ml-2 no-underline text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
        </svg>
        <h1>Back</h1>
      </Link>
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

          <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#">
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
                  id="university-name"
                  autoComplete="university-name"
                  placeholder="enter university name"
                  value={university_name || ""}
                  onChange={handleInputChange}
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
                  value={university_email || ""}
                  onChange={handleInputChange}
                  className=" mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="email"
                />
              </div>
            </div>

            <div>
              <input
                type="submit"
                value={university_id ? "Update" : "Add University"}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUniversity;
