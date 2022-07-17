import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditUniversity = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUniversity();
  }, []);
  function getUniversity() {
    axios
      .get(`http://localhost:80/nss-ms/university/${id}`)
      .then(function (response) {
        console.log(response.data);
        setInputs(response.data);
      });
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preDefault();
    axios
      .put(`http://localhost:80/nss-ms/university/${id}/edit`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });
  };

  return (
    <>
      <div>
        <h1>Edit university</h1>
        <form onSubmit={handleSubmit}>
          <table cellSpacing="10">
            <tbody>
              <tr>
                <th>
                  <label>Name: </label>
                </th>
                <td>
                  <input
                    value={inputs.name}
                    type="text"
                    name="name"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Email: </label>
                </th>
                <td>
                  <input
                    value={inputs.email}
                    type="text"
                    name="email"
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td colSpan="2" align="right">
                  <button>Save</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default EditUniversity;
