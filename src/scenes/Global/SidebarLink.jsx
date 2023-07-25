import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
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
import GroupsIcon from "@mui/icons-material/Groups";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
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
        <Typography>{title}</Typography>
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
                    variant="h3"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "25px 0 0 0" }}
                  >
                    ADMINIS
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    VP Fancy Admin
                  </Typography>
                </Box>
              </Box>
            )}

            {/* MENU ITEMS */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Link to="/">
                <Item
                  title="Dashboard"
                  icon={<HomeIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0px 5px 20px" }}
              >
                Data
              </Typography>

              <Link to="/team">
                <Item
                  title="Manage Team"
                  icon={<EscalatorWarningIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>

              <Link to="/invoices">
                <Item
                  title="Invoices Balances"
                  icon={<ReceiptLongIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>

              <Link to="/clients">
                <Item
                  title="Clients Information"
                  icon={<FamilyRestroomIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>

              <Link to="/students">
                <Item
                  title="Students Information"
                  icon={<GroupsIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0px 5px 20px" }}
              >
                Pages
              </Typography>

              <Link to="/form">
                <Item
                  title="Profile Form"
                  icon={<PeopleIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>

              <Link to="/calendar">
                <Item
                  title="Calendar"
                  icon={<CalendarMonthIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>
              <Link to="/faq">
                <Item
                  title="FAQ Page"
                  icon={<HelpIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0px 5px 20px" }}
              >
                Chart
              </Typography>

              <Link to="/bar">
                <Item
                  title="Bar Chart"
                  icon={<BarChartIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>

              <Link to="/pie">
                <Item
                  title="Pie Chart"
                  icon={<PieChartOutlineIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>

              <Link to="/line">
                <Item
                  title="Line Chart"
                  icon={<TimelineIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>
              <Link to="/geography">
                <Item
                  title="Geographical Chart"
                  icon={<LocationOnIcon className="icons" />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Link>

              {/* SIDEBAR FOOTER */}
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
