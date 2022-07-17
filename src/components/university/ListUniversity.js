import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const ListUniversity = () => {
  const [university, setUniversity] = useState([]);

  useEffect(() => {
    getUniversity();
  }, []);

  function getUniversity() {
    axios
      .get("http//localhost:80/nss-ms/university/")
      .then(function (response) {
        console.log(response.data);
        setUniversity(response.data);
      });
  }
  return (
    <>
      <h1>List university</h1>;
      <Table className="striped bordered hover">
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          {university.map((officer, key) => (
            <tr key={key}>
              <td>{officer.university_id}</td>
              <td>{officer.university_name}</td>
              <td>{officer.university_email}</td>

              <td>
                <Link
                  to={`officer/${officer.id}/edit`}
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </Link>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListUniversity;
