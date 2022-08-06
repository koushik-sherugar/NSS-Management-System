import React from "react";
import { Link } from "react-router-dom";
// import Link from "react-router-dom"
import logo from "../assets/hero2.png";
const Header = () => {
  return (
    <>
      <div class="container mx-auto px-8 flex flex-col ">
        <main className="container flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
          <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="uppercase text-5xl text-indigo-900 font-bold text-left	 leading-none tracking-wide mb-2">
              NSS Management
            </h1>
            <h2 className="uppercase text-5xl text-orange-500  tracking-widest mb-6  text-left">
              system
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              A complete software to register and manage details of student and
              staff of college and also maintain their data through university
              and the higher officials of NSS
            </p>
            <div className="flex flex-row space-x-4 ">
              {/* <a href="/redirect" className="no-underline"> */}
              <Link to="/redirect" className="no-underline">
                <div className="py-6 px-10  bg-indigo-900 rounded-full text-3xl hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center animate-bounce text-white">
                  Get Started{" "}
                </div>
              </Link>
              {/* </a> */}
            </div>
          </div>
          <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12 ">
            <img className="w-screen px-4 py-2" src={logo} alt="" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Header;
