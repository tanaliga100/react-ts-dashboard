import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
// import Bar from "./views/Bar";
// import Contacts from "./views/Contacts";
// import FAQ from "./views/FAQ";
// import Form from "./views/Form";
// import Geography from "./views/Geography";
// import Invoices from "./views/Invoices";
// import Line from "./views/Line";
// import Pie from "./views/Pie";
// import Team from "./views/Team";
import DashBoard from "./views/pages/dashboard";
// import Calendar from "./views/shared/Calendar";
import Calendar from "./views/pages/calendar";
import Contacts from "./views/pages/contacts";
import Faq from "./views/pages/faq";
import FormComponent from "./views/pages/form";
import Invoices from "./views/pages/invoices";
import Team from "./views/pages/team";
import SideBar from "./views/shared/SideBar";
import TopBar from "./views/shared/TopBar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<FormComponent />} />
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              <Route path="/faq" element={<Faq />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
