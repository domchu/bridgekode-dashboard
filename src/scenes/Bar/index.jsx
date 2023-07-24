import React from "react";
import Header from "../../Components/Header";
import BarChart from "../../Components/BarChart";
import { Box } from "@mui/material";

const Bar = () => {
  return (
    <>
      <Box m="20px">
        <Header title=" BAR CHART" subtitle="Simple Bar Chart " />
        <Box height="75vh">
          <BarChart />
        </Box>
      </Box>
    </>
  );
};

export default Bar;
