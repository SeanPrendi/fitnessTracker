import React, { useState } from 'react';
import MainPage from './pages/MainPage';
import CalendarPage from './pages/CalendarPage';
import UserSettingsPage from './pages/UserSettingsPage';
import AppSettingsPage from './pages/AppSettingsPage';
import StatsPage from './pages/StatsPage';

export default function App() {
  const [page, setPage] = useState('main');
  const [day, setDay] = useState('Back');
  setDay('Back'); // ! remove this; short term linting fix

  switch (page) {
    case 'main':
      return <MainPage setPage={setPage} day={day} />;
    case 'calendar':
      return <CalendarPage setPage={setPage} day={day} />;
    case 'userSettings':
      return <UserSettingsPage setPage={setPage} day={day} />;
    case 'stats':
      return <StatsPage setPage={setPage} day={day} />;
    case 'appSettings':
      return <AppSettingsPage setPage={setPage} day={day} />;
    default:
      return <MainPage setPage={setPage} day={day} />;
  }
}
