import React, { useState } from "react";
import Header from "../../Components/Header";
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome To Your Dashboard" />
          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <FileDownloadIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default dashboard;
