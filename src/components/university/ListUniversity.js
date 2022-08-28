import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { Table } from "reactstrap";

import { toast } from "react-toastify";
import Layout from "../layout/Layout";

const ListUniversity = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
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
      toast.success("university deleted sucessfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <Layout>
      <div className=" container mt-3" style={{ marginLeft: "313px" }}>
        <div>
          <button id="menu-button" aria-expanded="true" aria-haspopup="true">
            <h4 className="mb-4">Details of University</h4>
          </button>
          <br />
          <Link to="/adduniversity">
            <button
              // type="submit"
              className=" justify-center inline-block mt-2 mb-3 py-1 px-2 mr-2 h-10 w-1/6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ADD UNIVERSITY
            </button>
          </Link>
          <Table>
            <thead>
              <tr>
                <th>Sno</th>
                <th>University id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {data.map((uni, index) => {
                return (
                  <tr key={uni.university_id}>
                    <td>{index + 1}</td>
                    <td>{uni.university_id}</td>
                    <td>{uni.university_name}</td>
                    <td>{uni.university_email}</td>
                    <td>
                      <Link to={`/adduniversity/update/${uni.university_id}`}>
                        <button
                          // type="submit"
                          className=" justify-center py-1 px-2 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Edit
                        </button>
                      </Link>
                      <Link to={`/viewuniversity/${uni.university_id}`}>
                        <button
                          // type="submit"
                          className=" justify-center py-1 px-2 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          View
                        </button>
                      </Link>
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
    </Layout>
  );
};

export default ListUniversity;
