import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import GuestApp from "./GuestApp.jsx";
import Presentation from "./Presentation.jsx";

const showGuestApp = new URLSearchParams(window.location.search).get("view") === "guest";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>{showGuestApp ? <GuestApp /> : <Presentation />}</React.StrictMode>,
);
