// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

// Define your MapleStory themed palette
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#ffa71a', // Adjust the primary color to fit MapleStory's theme
    },
    secondary: {
      main: '#ffce80', // Adjust the secondary color as well
    },
    // Add more customizations as needed
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  // Add other theme configurations here
});

export default defaultTheme;
