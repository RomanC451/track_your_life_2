import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

import { Navbar, Sidebar, Footer, ThemeSettings } from "./components";
import { HomePage, LoginPage } from "./pages";

import "./App.css";

import { NavbarContextProvider } from "./contexts/NavbarContextProvider";
import { useAppGeneralStateContext } from "./contexts/AppGeneralContextProvider";
import { useAppStyleStateContext } from "./contexts/AppStyleContextProvider";

const App = () => {
  const { sidebarActive, themeSettings, setThemeSettings, screenSize } =
    useAppGeneralStateContext();
  const { currentColor, currentThemeMode } = useAppStyleStateContext();

  return (
    <div className={currentThemeMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-1000">
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          <Sidebar />
          <div
            id="mydiv"
            className={
              sidebarActive
                ? "dark:bg-main-dark-bg bg-white min-h-screen md:ml-72 w-full  "
                : "bg-white dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
            style={
              sidebarActive && screenSize > 900
                ? { width: `${screenSize - 288}px` }
                : {}
            }
          >
            <NavbarContextProvider>
              <Navbar />
            </NavbarContextProvider>
            <div>
              asdasd
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<LoginPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
