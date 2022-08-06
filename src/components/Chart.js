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
const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#ffef0e"];
const data = [
  { name: "Manglore", users: 20000000 },
  { name: "Banglore", users: 15000000 },
  { name: "Dharwad", users: 10000000 },
  { name: "Hasan", users: 5000000 },
];
const Chart = () => {
  return (
    <>
      <h1 className="text-center mt-2 mb-4">CHART</h1>

      <div className="container align-items-center ">
        <h5 className=" text-4xl mt-3 ml-1">University Registered</h5>
        <ResponsiveContainer width={400} height={400}>
          <PieChart className="ml-60">
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

        <h5 className="  mt-6 mb-3 text-4xl">Colleges Registered</h5>

        <BarChart
          width={800}
          height={500}
          data={data}
          className="ml-70 mt-5"
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
    </>
  );
};

export default Chart;
