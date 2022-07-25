import React from "react";
import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:80/api",
  headers: {
    "content-type": "application/json",
  },
});
