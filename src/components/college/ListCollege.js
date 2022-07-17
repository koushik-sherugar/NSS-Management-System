import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListUniversity = () => {
  const [university, setUniversity] = useState([]);

  useEffect(() => {
    getUniversity();
  }, []);

  function getUniversity() {
    axios
      .get("http://localhost:80/nss-ms/university/save")
      .then(function (response) {
        console.log(response.data);
        setUniversity(response.data);
      });
  }
  return (
    <>
      <h1>List university</h1>;
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
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
      </table>
    </>
  );
};

export default ListUniversity;
