import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import StaffLayout from "../layout/stafflayout/StaffLayout";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

import { toast } from "react-toastify";

const ListActivity = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/listactivity");
    // console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    // console.log("test");
    loadData();
  }, []);

  const deleteUniversity = (college_id) => {
    if (window.confirm("Are you sure want to delete this university?")) {
      console.log(college_id);
      axios.delete(`http://localhost:5000/api/remove/${college_id}`);
      toast.success("contact deleted sucessfully");
      setTimeout(() => loadData(), 500);
    }
  };
  return (
    <StaffLayout>
      <div className="container mt-3 " style={{ marginLeft: "270px" }}>
        <div>
          <button id="menu-button" aria-expanded="true" aria-haspopup="true">
            <h4 className="mb-4">Details of Activities</h4>
          </button>

          <Table>
            <thead>
              <tr>
                <th>Sno</th>
                <th>College id</th>
                <th>Name</th>
                <th>Date</th>
                <th>Total present</th>
                <th>Report</th>
                <th>Image</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {data.map((uni, index) => {
                return (
                  <tr key={uni.college_id}>
                    <td>{index + 1}</td>
                    <td>{uni.college_id}</td>
                    <td>{uni.activity_name}</td>
                    <td>{uni.date}</td>
                    <td>{uni.total_present}</td>
                    <td>{uni.report}</td>
                    {/* <td>
                    <img src={uni.image} />
                  </td> */}
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
                        onClick={() => deleteUniversity(uni.college_id)}
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
    </StaffLayout>
  );
};

export default ListActivity;
