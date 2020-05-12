import React, { useState } from "react";
import MainPage from "./pages/MainPage";
import CalendarPage from "./pages/CalendarPage";
import SettingsPage from "./pages/SettingsPage";
import StatsPage from "./pages/StatsPage";

export default function App() {
  const [page, setPage] = useState("main");
  if (page === "main") {
    return <MainPage setPage={setPage} />;
  } else if (page === "calendar") {
    return <CalendarPage setPage={setPage} />;
  } else if (page === "settings") {
    return <SettingsPage setPage={setPage} />;
  } else if (page === "stats") {
    return <StatsPage setPage={setPage} />;
  } else {
    console.log(page);
    return <MainPage setPage={setPage} />;
  }
}
