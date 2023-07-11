import React from "react";
import { colorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Scenes/Global/Topbar";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Scenes/Global/Sidebar";
import Dashboard from "./Scenes/Dashboard";
import Team from "./Scenes/Team";
import Clients from "./Scenes/Clients";
import Invoices from "./Scenes/Invoices";
import Students from "./Scenes/Students";
import Bar from "./Scenes/Bar";
import Contacts from "./Scenes/Contacts";
import Calendar from "./Scenes/Calendar";
import Form from "./Scenes/Form";
import Line from "./Scenes/Line";
import Pie from "./Scenes/Pie";
import FAQ from "./Scenes/Faq";
import Geography from "./Scenes/Geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <colorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box className="app">
            <main className="content">
              <h1>Testing the dashboard</h1>
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/students" element={<Students />} />
                <Route path="/form" element={<Form />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
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
