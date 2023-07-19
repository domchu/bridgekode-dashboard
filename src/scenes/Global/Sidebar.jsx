import React, { useStae } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "~react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import HomeIcon from "@mui/icons-material/Home";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import PeopleIcon from "@mui/icons-material/People";
// import HelpIcon from "@mui/icons-material/Help";
// import AddIcCallIcon from "@mui/icons-material/AddIcCall";
// import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
// import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
// import DonutLargeIcon from "@mui/icons-material/DonutLarge";
// import LegendToggleIcon from "@mui/icons-material/LegendToggle";
// import TimelineIcon from "@mui/icons-material/Timeline";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useStae(false);
  const [Selected, setSelected] = useStae("Dashboard");
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
        <ProSidebar colllapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* LOGO & MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuIcon /> : undefined}
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
            {isCollapsed && (
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
        </ProSidebar>
      </Box>
    </>
  );
};

export default Sidebar;
