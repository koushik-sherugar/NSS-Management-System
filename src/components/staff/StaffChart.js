import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  Cell,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
} from "recharts";

import { useState, useEffect } from "react";
import axios from "axios";
import StaffLayout from "../layout/stafflayout/StaffLayout";
const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#ffef0e"];
const data = [
  { name: "Manglore", users: 20000000 },
  { name: "Banglore", users: 15000000 },
  { name: "Dharwad", users: 10000000 },
  { name: "Hasan", users: 5000000 },
];

const Chart = () => {
  const [studentCount, setStudentCount] = useState([]);
  const [staffCount, setStaffCount] = useState([]);
  const [activityCount, setActivityCount] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/countstudents");
    setStudentCount(response.data.number_of_students);
  };

  const staffData = async () => {
    const response = await axios.get("http://localhost:5000/api/countstaffs");
    setStaffCount(response.data.number_of_staffs);
  };

  const activityData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/countactivities"
    );
    setActivityCount(response.data.number_of_activities);
    console.log("activity test", activityCount);
  };
  useEffect(() => {
    loadData();
    staffData();
    activityData();
  }, []);

  return (
    <StaffLayout>
      <div style={{ marginLeft: "270px" }}>
        <h1 classNameName="text-center mt-2 ml-5 mb-4">STATISTICS</h1>

        <div className="flex flex-wrap mt-5 mb-2">
          <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
            <div className="bg-green-600 border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-right">
                  <h5 className="text-white">Total Students</h5>
                  <h3 className="text-white text-3xl">
                    {studentCount}
                    <span className="text-green-400">
                      {/* <i className="fas fa-caret-down"></i> */}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
            <div className="bg-blue-600 border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4">
                  <i className="fas fa-briefcase fa-2x fa-fw fa-inverse"></i>
                </div>
                <div className="flex-1 text-right">
                  <h5 className="text-white">Total Staff</h5>
                  <h3 className="text-white text-3xl"> {staffCount}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pl-2 xl:pr-3">
            <div className="bg-red-600 border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4">
                  <i className="fas fa-calendar fa-2x fa-fw fa-inverse"></i>
                </div>
                <div className="flex-1 text-right">
                  <h5 className="text-white">Activities</h5>
                  <h3 className="text-white text-3xl">{activityCount}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classNameName="container align-items-center ">
          <h5 classNameName=" text-4xl mt-3 ml-1">University Registered</h5>
          <ResponsiveContainer width={400} height={400}>
            <PieChart classNameName="ml-60">
              <Pie
                dataKey="users"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill={"#1f77b4"}
                label
              >
                {data.map((entry, index) => (
                  <Cell fill={colors[index % colors.length]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <hr />

          <h5 classNameName="  mt-6 mb-3 text-4xl">Colleges Registered</h5>

          <BarChart
            width={800}
            height={500}
            data={data}
            classNameName="ml-70 mt-5"
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }}>
              {data.map((entry, index) => (
                <Cell fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </StaffLayout>
  );
};

export default Chart;
