import React from "react";
import { colorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Scenes/Global/Topbar";
import { Route, Routes } from "react-router-dom";
import SidebarLink from "./Scenes/Global/SidebarLink";
import Dashboard from "./Scenes/dashboard";
import Team from "./Scenes/team";
import Clients from "./Scenes/clients";
import Students from "./Scenes/students/Students";
import Invoices from "./Scenes/invoices";
import Form from "./Scenes/form";
import Calendar from "./Scenes/calendar";
import Faq from "./Scenes/faq";
import Bar from "./Scenes/bar";
import Line from "./Scenes/line";
import Pie from "./Scenes/pie";
import Geography from "./Scenes/geography";
import AddStudents from "./Scenes/students/add";
import ListView from "./Scenes/students/list";
import All from "./Scenes/students/all";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <colorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box className="app">
            <SidebarLink />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/clients" element={<Clients />} />
                {/* router */}
                <Route path="/students" element={<Students />}>
                  <Route path="list" element={<ListView />} />
                  <Route path="all" element={<All />} />
                  <Route path="add" element={<AddStudents />} />
                </Route>
                {/* router */}
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </Box>
        </ThemeProvider>
      </colorModeContext.Provider>
    </>
  );
}

export default App;
