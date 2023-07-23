import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "./../../data/mockdata";
import Header from "../../Components/Header";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: number,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <>
            <Box
              width="60%"
              m="0 auto"
              p="5px"
              borderRadius="4px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                access === "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700]
              }
            >
              {access === "admin" && <HomeIcon />}
              {access === "user" && <MenuIcon />}
              {access === "manager" && <PersonIcon />}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {access}
              </Typography>
            </Box>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Box m="20px">
        <Header title="Team" subtitle="Managing The Team Members" />
        <Box height="75vh" m="40px 0 0 0">
          <DataGrid rows={mockDataTeam} columns={columns} />
        </Box>
      </Box>
    </>
  );
};

export default Team;
