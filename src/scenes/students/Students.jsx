import React from "react";
import Header from "../../Components/Header";
import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Students = () => {
  return (
    <>
      <Box m="20px" display="flex" justifyContent="space-between">
        <Header
          title="BRIDGEKODE STUDENTS"
          subtitle="List Of Bridgekode Students "
        />
      </Box>
      <Box>
        <Link to="/students/all">All Students</Link>
        <Link to="/students/list">List View</Link>
        <Link to="/students/add">Add Students</Link>
        <Outlet />
      </Box>
    </>
  );
};

export default Students;
