import React from "react";
import { colorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Scenes/Global/Topbar";
// import Sidebar from "./Scenes/Global/Sidebar";

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
              {/* <Sidebar /> */}
            </main>
          </Box>
        </ThemeProvider>
      </colorModeContext.Provider>
    </>
  );
}

export default App;
