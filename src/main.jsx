import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { AnimeDataProvider } from "./contexts/AnimeData.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AnimeDataProvider>
          <App />
        </AnimeDataProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
