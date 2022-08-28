import React from "react";
import Layout from "../layout/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminActivitycard = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/listactivity");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    // console.log("test");
    loadData();
  }, []);
  console.log(data.image);
  return (
    <>
      <Layout>
        <div className="" style={{ marginLeft: "270px" }}>
          <div className="container  mt-4 mx-auto grid grid-cols-3 gap-6">
            {data.map((uni, index) => {
              return (
                <>
                  <div className="flex mx-2K">
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                      <img
                        className="rounded-t-lg"
                        // src="https://flowbite.com/docs/images/blog/image-1.jpg"
                        src={uni.image}
                        alt=""
                      />

                      <div className="p-5">
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                          {uni.activity_name}
                        </h5>
                        <p className="font-normal text-gray-700 mb-3">
                          Here are the biggest enterprise technology
                          acquisitions of 2021 so far, in reverse chronological
                          order.
                        </p>
                        <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                          Total Present: {uni.total_present}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminActivitycard;
