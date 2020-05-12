import React, { useState } from "react";
import MainPage from "./pages/MainPage";
import CalendarPage from "./pages/CalendarPage";
import UserSettingsPage from "./pages/UserSettingsPage";
import AppSettingsPage from "./pages/AppSettingsPage";
import StatsPage from "./pages/StatsPage";

export default function App() {
  const [page, setPage] = useState("main");

  switch (page) {
    case "main":
      return <MainPage setPage={setPage} />;
    case "calendar":
      return <CalendarPage setPage={setPage} />;
    case "userSettings":
      return <UserSettingsPage setPage={setPage} />;
    case "stats":
      return <StatsPage setPage={setPage} />;
    case "appSettings":
      return <AppSettingsPage setPage={setPage} />;
    default:
      return <MainPage setPage={setPage} />;
  }
}