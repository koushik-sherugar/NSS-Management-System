import React from "react";
import StudentDashboard from "./StudentDashboard";

function StudentLayout({ children }) {
  return (
    <>
      <StudentDashboard />
      {children}
    </>
  );
}

export default StudentLayout;
