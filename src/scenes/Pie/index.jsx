import React from "react";
import Header from "../../Components/Header";
import PieChart from "../../Components/PieChart";
import { Box } from "@mui/material";

const Pie = () => {
  return (
    <>
      <Box m="20px">
        <Header title="PIE CHART" subtitle="Simple Pie Chart " />
        <Box height="75vh">
          <PieChart />
        </Box>
      </Box>
    </>
  );
};

export default Pie;
