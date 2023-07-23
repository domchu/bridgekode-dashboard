import React from "react";
import { Typography, IconButton, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "./../../data/mockdata";
import Header from "../../Components/Header";
import AdminIcon from "@mui/icons-material/Admin";
import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box>
        <Header title="Team" subtitle="Managing The Team Members" />
        <Box>
          <DataGrid />
        </Box>
      </Box>
    </>
  );
};

export default Team;
