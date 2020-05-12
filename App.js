import React, { useState } from "react";
import MainPage from "./pages/MainPage";
import CalendarPage from "./pages/CalendarPage";
import SettingsPage from "./pages/SettingsPage";
import StatsPage from "./pages/StatsPage";

export default function App() {
  const [page, setPage] = useState("main");

  switch (page) {
    case "main":
      return <MainPage setPage={setPage} />;
    case "calendar":
      return <CalendarPage setPage={setPage} />;
    case "settings":
      return <SettingsPage setPage={setPage} />;
    case "stats":
      return <StatsPage setPage={setPage} />;
    default:
      return <MainPage setPage={setPage} />;
  }

  // if (page === "main") {
  //   return <MainPage setPage={setPage} />;
  // } else if (page === "calendar") {
  //   return <CalendarPage setPage={setPage} />;
  // } else if (page === "settings") {
  //   return <SettingsPage setPage={setPage} />;
  // } else if (page === "stats") {
  //   return <StatsPage setPage={setPage} />;
  // } else {
  //   console.log(page);
  //   return <MainPage setPage={setPage} />;
  // }
}
