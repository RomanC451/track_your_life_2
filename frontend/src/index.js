import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";

import { AppGeneralContextProvider } from "./contexts/AppGeneralContextProvider";
import { AppStyleContextProvider } from "./contexts/AppStyleContextProvider";

const root = createRoot(document.getElementById("app"));

root.render(
  <AppGeneralContextProvider>
    <AppStyleContextProvider>
      <App />
    </AppStyleContextProvider>
  </AppGeneralContextProvider>
);
