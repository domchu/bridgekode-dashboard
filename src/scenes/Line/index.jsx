import React from "react";
import Header from "../../Components/Header";
import LineChart from "../../Components/LineChart";
import { Box } from "@mui/material";

const Line = () => {
  return (
    <>
      <Box m="20px">
        <Header title="LINE CHART" subtitle="Simple Line Chart " />
        <Box height="75vh">
          <LineChart />
        </Box>
      </Box>
    </>
  );
};

export default Line;
