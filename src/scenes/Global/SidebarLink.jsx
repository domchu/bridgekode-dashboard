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
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import TimelineIcon from "@mui/icons-material/Timeline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LightModeIcon from "@mui/icons-material/LightMode";
// import "react-pro-sidebar/dist/css/styles.css";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <MenuItem
        active={selected === title}
        style={{ color: colors.grey[100] }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title} </Typography>
        <Link to={to} />
      </MenuItem>
    </>
  );
};

const SidebarLink = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
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
              icon={isCollapsed ? <MenuIcon /> : undefined}
              style={{ margin: "10px 0px 20px 0px", color: colors.grey[100] }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    BRIDGEKODE
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
                    src={`../../assets/bridgekode-logo.png`}
                    alt="Brand Logo"
                    width="150px"
                    height="auto"
                    style={{ cursor: "pointer" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    ADMINIS
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    USER
                  </Typography>
                </Box>
              </Box>
            )}

            {/* MENU ITEMS */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0px 5px 20px" }}
              >
                Data
              </Typography>
              <Item
                title="Manage Team"
                to="/team"
                icon={<EscalatorWarningIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Clients Information"
                to="/client"
                icon={<ReceiptLongIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Students Information"
                to="/students"
                icon={<ReceiptLongIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptLongIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0px 5px 20px" }}
              >
                Pages
              </Typography>
              <Item
                title="Profile Form"
                to="/form"
                icon={<PeopleIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarMonthIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0px 5px 20px" }}
              >
                Chart
              </Typography>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<LocationOnIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Box
                sx={{
                  m: "15px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton sx={{ m: "0px 5px" }}>
                  <SettingsIcon />
                </IconButton>
                <IconButton sx={{ m: "0px 5px" }}>
                  <HomeIcon />
                </IconButton>
                <IconButton sx={{ m: "0px 5px" }}>
                  <LightModeIcon />
                </IconButton>
              </Box>
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </>
  );
};

export default SidebarLink;
