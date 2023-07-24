import React from "react";
import Header from "../../Components/Header";
import { tokens } from "../../theme";
import GeographyChart from "../../Components/GeographyChart";
import { Box, useTheme } from "@mui/material";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box m="20px">
        <Header title="GEOGRAPHICAL MAP" subtitle="Simple World Map " />
        <Box
          height="75vh"
          border={`1px solid ${colors.grey[100]}`}
          borderRadius="4px"
        >
          <GeographyChart />
        </Box>
      </Box>
    </>
  );
};

export default Geography;
