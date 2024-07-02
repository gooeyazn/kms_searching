// src/App.js
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage/HomePage'; // Adjust the path as per your directory structure
import defaultTheme from './theme/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline /> {/* Apply baseline styles, can be adjusted as needed */}
      <HomePage />
      {/* Add other components/pages here */}
    </ThemeProvider>
  );
}

export default App;
