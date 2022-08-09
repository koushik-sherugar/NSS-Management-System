import React from "react";
import Adminwindow from "./Adminwindow";
// import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Adminwindow />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
