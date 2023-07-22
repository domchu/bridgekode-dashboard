import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpIcon from "@mui/icons-material/Help";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import TimelineIcon from "@mui/icons-material/Timeline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import "react-pro-sidebar/dist/css/styles.css";

const SidebarLink = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [Selected, setSelected] = useState("Dashboard");
  return (
    <>
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#8670fa !important",
          },
        }}
      >
        <Sidebar colllapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* LOGO & MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <HomeIcon /> : undefined}
              style={{ margin: "10px 0px 20px 0px", color: colors.grey[100] }}
            >
              {isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {/* USER */}
            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    src={`../../assets/logo-blue.png`}
                    alt="Brand Logo"
                    width="100px"
                    height="100px"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Bridgekode
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    User Admin
                  </Typography>
                </Box>
              </Box>
            )}

            {/* MENU ITEMS */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}></Box>
          </Menu>

          <IconButton>
            <HomeIcon />
          </IconButton>
          <IconButton>
            <PeopleIcon />
          </IconButton>
          <IconButton>
            <HelpIcon />
          </IconButton>
          <IconButton>
            <AddIcCallIcon />
          </IconButton>
          <IconButton>
            <ReceiptLongIcon />
          </IconButton>
          <IconButton>
            <EscalatorWarningIcon />
          </IconButton>
          <IconButton>
            <BarChartIcon />
          </IconButton>
          <IconButton>
            <PieChartOutlineIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <LegendToggleIcon />
          </IconButton>
          <IconButton>
            <TimelineIcon />
          </IconButton>
          <IconButton>
            <LocationOnIcon />
          </IconButton>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <IconButton>
            <CalendarMonthIcon />
          </IconButton>
        </Sidebar>
      </Box>
    </>
  );
};

export default SidebarLink;
