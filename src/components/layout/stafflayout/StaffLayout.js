import React from "react";
import StaffDashboard from "./StaffDashboard";

function StaffLayout({ children }) {
  return (
    <>
      <StaffDashboard />
      {children}
    </>
  );
}

export default StaffLayout;
