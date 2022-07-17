import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
function table() {
  return (
    <div className="container">
      <div
      // style={{
      //   display: "block",
      //   width: 700,
      //   padding: 30,
      // }}
      >
        <h4 className="mb-4">Details of students</h4>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dummmy</td>
              <td>25</td>
              <td>Dummmy</td>
              <td>25</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default table;
