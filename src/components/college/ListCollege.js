import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";

const ListCollege = () => {
  return (
    <div className="container mt-3">
      <div>
        <button id="menu-button" aria-expanded="true" aria-haspopup="true">
          <h4 className="mb-4 ">Details of college</h4>
        </button>

        <Table>
          <thead>
            <tr>
              <th>College Id</th>
              <th>University Id</th>
              <th>College Name</th>
              <th>College Email</th>
              <th>Address</th>
              <th>Contact No</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dummmy</td>
              <td>25</td>
              <td>Dummmy</td>
              <td>25</td>
              <td>Dummmy</td>
              <td>25</td>
              <td>
                <Link to="/editcollege">
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
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListCollege;
