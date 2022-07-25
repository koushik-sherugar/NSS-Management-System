import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { Table } from "reactstrap";

import { toast } from "react-toastify";

const ListStudents = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/liststudents");
    // console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    // console.log("test");
    loadData();
  }, []);

  const deleteUniversity = (university_id) => {
    if (window.confirm("Are you sure want to delete this university?")) {
      console.log(university_id);
      axios.delete(`http://localhost:5000/api/remove/${university_id}`);
      toast.success("contact deleted sucessfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <div className="m-3 mt-3">
      <div>
        <button id="menu-button" aria-expanded="true" aria-haspopup="true">
          <h4 className="mb-4">Details of Student</h4>
        </button>

        <Table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>first name</th>
              <th>last name</th>
              <th>email id</th>
              <th>mob no</th>
              <th>Register no</th>
              {/* <th>Interests</th>
              <th>Achievements</th> */}
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((uni, index) => {
              return (
                <tr key={uni.university_id}>
                  <td>{index + 1}</td>
                  <td>{uni.first_name}</td>
                  <td>{uni.last_name}</td>
                  <td>{uni.email_id}</td>
                  <td>{uni.mob_no}</td>
                  <td>{uni.register_no}</td>
                  {/* <td>{uni.interests}</td>
                  <td>{uni.achievements}</td> */}
                  <td className="d-flex">
                    <Link to="/editstaff">
                      <button
                        // type="submit"
                        className=" justify-center py-1 px-2 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      // type="submit"
                      className=" justify-center py-1 px-2 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View
                    </button>
                    <button
                      // type="submit"
                      className=" justify-center py-1 px-2 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      onClick={() => deleteUniversity(uni.university_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListStudents;
