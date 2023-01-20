import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

import { Navbar, Sidebar, Footer, ThemeSettings } from "./components";
import { HomePage, AuthenticationPage } from "./pages";

import "./App.css";

import { NavbarContextProvider } from "./contexts/NavbarContextProvider";
import { useAppGeneralStateContext } from "./contexts/AppGeneralContextProvider";
import { useAppStyleStateContext } from "./contexts/AppStyleContextProvider";

const App = () => {
  const { sidebarActive, themeSettings, setThemeSettings, screenSize } =
    useAppGeneralStateContext();
  const { currentColor, currentThemeMode } = useAppStyleStateContext();

  return (
    <div className={`${currentThemeMode === "Dark" ? "dark" : ""}`}>
      <BrowserRouter>
        <Routes>
          {/* dashboard  */}
          <Route path="/" element={<AuthenticationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
