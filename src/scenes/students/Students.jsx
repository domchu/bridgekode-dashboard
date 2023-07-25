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
        <Box ml="20px">
          <Link to="/students/all" className="btn">
            All Students
          </Link>
          <Link to="/students/list" className="btn">
            List View
          </Link>
          <Link to="/students/add" className="btn">
            Add Students
          </Link>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Students;
