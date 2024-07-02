// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

// Define your MapleStory themed palette
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#ff0000', // Adjust the primary color to fit MapleStory's theme
    },
    secondary: {
      main: '#00ff00', // Adjust the secondary color as well
    },
    // Add more customizations as needed
  },
  typography: {
    fontFamily: '"Nexon Lv1 Gothic", sans-serif', // Example of using a custom font
  },
  // Add other theme configurations here
});

export default defaultTheme;
