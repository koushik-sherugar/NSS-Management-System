import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { Table } from "reactstrap";

import { toast } from "react-toastify";
import Layout from "../layout/Layout";

const ListStaff = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/liststaff");
    // console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    // console.log("test");
    loadData();
  }, []);

  const deleteStaff = (staff_email) => {
    if (window.confirm("Are you sure want to delete this staff?")) {
      console.log(staff_email);
      axios.delete(`http://localhost:5000/api/removestaff/${staff_email}`);
      toast.success("staff deleted sucessfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <Layout>
      <div className=" container mt-3" style={{ marginLeft: "270px" }}>
        <div>
          <button id="menu-button" aria-expanded="true" aria-haspopup="true">
            <h4 className="mb-4">Details of staff</h4>
          </button>

          <Table>
            <thead>
              <tr>
                <th>Sno</th>
                <th>College id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Trained</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {data.map((uni, index) => {
                return (
                  <tr key={uni.staff_email}>
                    <td>{index + 1}</td>
                    <td>{uni.college_id}</td>
                    <td>{uni.staff_name}</td>
                    <td>{uni.staff_email}</td>
                    <td>{uni.trained}</td>
                    <td>
                      <Link to={`/staffregister/update/${uni.staff_id}`}>
                        <button
                          // type="submit"
                          className=" justify-center py-1 px-2 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Edit
                        </button>
                      </Link>
                      <Link to={`/viewuniversity/${uni.staff_id}`}>
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
                        onClick={() => deleteStaff(uni.staff_email)}
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

export default ListStaff;
