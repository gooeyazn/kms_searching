import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import defaultTheme from './theme/default'; // Adjust the path to your theme file
import { ThemeProvider, CssBaseline } from '@mui/material'; // Import ThemeProvider and CssBaseline from MUI

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
