import React from "react";
import http from "../../http";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { useState, useEffect } from "react";

const ListStaff = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      setUsers(res.data);
    });
  };

  return (
    <div className="container mt-3">
      <div>
        <button id="menu-button" aria-expanded="true" aria-haspopup="true">
          <h4 className="mb-4">Details of staff</h4>
        </button>

        <Table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Operations</th>
              {/* <th>Id</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Trained</th>
              <th>Training center</th>
              <th>Year</th>
              <th>Operations</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              <tr key={user.id}>
                <td>{index}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
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
                  >
                    Delete
                  </button>
                </td>
              </tr>;
            })}
            {/* <tr>
              <td>Dummmy</td>
              <td>25</td>
              <td>Dummmy</td>
              <td>25</td>
              <td>Dummmy</td>
              <td>25</td>
              <td>Dummmy</td>
              <td>
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
                >
                  Delete
                </button>
              </td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListStaff;
